import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { WL } from "./whitelist";

const REACT_APP_CONTRACT_ADDRESS = "0xbb2b9Ac82cFc2Ce7F2D21c7484fde48cAf482533";
const SELECTEDNETWORK = "1";
const SELECTEDNETWORKNAME = "Ethereum Mainnet";
const nftquantity = 10000;

const addresses = WL.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(addresses, keccak256, { sortPairs: true });

function checkWhitelist(a) {
  const check = keccak256(a);
  const proof = merkleTree.getHexProof(check);
  const root = merkleTree.getRoot();

  console.log(root.toString("Hex"));
  return merkleTree.verify(proof, check, root);
}

function getProof(a) {
  const check = keccak256(a);
  return merkleTree.getHexProof(check);
}

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [walletConnected, setWalletConnected] = useState(0);
  const [whitelistedUser, setWhitelistedUser] = useState(0);

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      // setProvider(true);
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("Sale has ended");
        }
      } else {
        // setProvider(false);
        setErrorMsg('Select "' + SELECTEDNETWORKNAME + '" in Metamask');
      }
    } else {
      setErrorMsg("MetaMask not found!");
      // setProvider(false);
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      } else {
        setErrorMsg("Please install MetaMask!");
        // setProvider(false);
      }
    }
  }, []);

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          console.log("Sold out");
          return;
        }

        let status = await ct.methods.status().call();
        if (status == 1) {
          let price = await ct.methods.WLPRICE().call();
          let proof = getProof(metaMaskAccount);
          await ct.methods.whitelistMint(quantity, proof).send({
            from: metaMaskAccount,
            value: price * quantity,
          });
        } else if (status == 2) {
          let price = await ct.methods.PRICE().call();
          await ct.methods.mint(quantity).send({
            from: metaMaskAccount,
            value: price * quantity,
          });
        }
        setQuantity(1);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        const WAddress = metaMaskAccount;
        metaMaskAccount =
          metaMaskAccount.substring(0, 15) +
          "........" +
          metaMaskAccount.substring(
            metaMaskAccount.length - 10,
            metaMaskAccount.length
          );

        // check status
        // if 1 check for whitelist
        // if 2 allow mint
        // if 0 error
        const Status = await ct.methods.getStatus().call();
        if (Status == 0) {
          setErrorMsg("Sale Not started");
        } else if (Status == 1) {
          const whitelist = checkWhitelist(WAddress);
          if (whitelist) {
            setWalletConnected(1);
          } else {
            setErrorMsg("You Are Not Whitelisted");
          }
        } else if (Status == 2) {
          setWalletConnected(1);
        }
      }
    }
  }

  return (
    <div className="BtnDiv mt-4">
      {/* <h6 className="text-center">{userAddress}</h6> */}
      {!errormsg ? (
        <div className="row align-items-center">
          {walletConnected == 0 ? (
            <div className="col-12">
              <div class="btn-cont">
                <a
                  class="btn"
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  CONNECT WALLET
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                  <span class="line-4"></span>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-sm-5">
                <div className="d-flex justify-content-center align-items-center">
                  <div class="btn-cont">
                    <button
                      class="btn"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity == 1}
                    >
                      -<span class="line-1"></span>
                      <span class="line-2"></span>
                      <span class="line-3"></span>
                      <span class="line-4"></span>
                    </button>
                  </div>
                  <strong className="font-weight-bold dfd m-3">
                    {quantity}
                  </strong>
                  <div class="btn-cont">
                    <button
                      class="btn"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity == 100}
                    >
                      +<span class="line-1"></span>
                      <span class="line-2"></span>
                      <span class="line-3"></span>
                      <span class="line-4"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 pt-3 pt-sm-0">
                <div class="btn-cont">
                  <button class="btn" onClick={() => loadWeb3()}>
                    <strong className="font-weight-bold dfd m-3">MINT</strong>
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                    <span class="line-4"></span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <p className="mt-3 text-white mx-auto mb-0 text-center">{nftquantity-totalSupply}/{nftquantity} Available</p> */}
        </div>
      ) : (
        <h5 className="Txt supplytext text-center">
          <b className="">{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn;
