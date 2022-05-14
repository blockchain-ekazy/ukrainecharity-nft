import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";

import Img1 from "../Images/2.gif";
import Img2 from "../Images/2.png";
import Img4 from "../Images/4.png";
import Img5 from "../Images/5.png";
import Img6 from "../Images/6.png";
import Img7 from "../Images/7.jpg";
import Img9 from "../Images/9.png";
import Img20 from "../Images/20.png";
import Img25 from "../Images/25.png";
import Img22 from "../Images/22.png";
import Img23 from "../Images/23.png";
import Mintbtn from "./mintbtn";

export default function Home() {
  return (
    <div className="MAIN">
      <div className="container-fluid navbgo ">
        <nav class="navbar container-fluid navbar-expand-lg navbar-dark navv">
          <div class="container-fluid">
            <img className="log px-5" src={Img20}></img>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mob-navbar"
              aria-label="Toggle"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="centi collapse navbar-collapse" id="mob-navbar">
              <ul
                class="
              navbar-nav mb-2 mb-lg-0 "
              >
                <li class="nav-item px-3">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#About">
                    About Us
                  </a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#Rd">
                    WAR PATH
                  </a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#Team">
                    Team
                  </a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#Faq">
                    FAQS
                  </a>
                </li>
              </ul>
              <form class="d-flex btnns">
                <div class="social-buttons text-center">
                  <span class="neo-button px-2 hu">
                    <a
                      href="https://discord.com/invite/Nzekbfph"
                      target="_blank"
                    >
                      <i class=" hui fab fa-discord  text-white"></i>
                    </a>
                  </span>
                  <span class="neo-button px-2">
                    <a href="https://twitter.com/" target="_blank">
                      <i class="hu fab fa-twitter "></i>
                    </a>
                  </span>
                  <span class="neo-button px-2">
                    <a
                      href="https://instagram.com/nft_boxing_club?utm_medium=copy_link/"
                      target="_blank"
                    >
                      <i class="hu fab fa-instagram "></i>
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid sec1">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h1 className="tt text-center pt-5">
                Welcome To Ukraine Charity NFT
              </h1>
              <p className="p1 mt-5">
                Heroes of Ukraine Charity NFT is a philanthropic endeavor with
                the goal of bringing the NFT community together in a
                humanitarian effort. The collection consists of 10,000 Ukrainian
                heroes.{" "}
              </p>
              <ul class="wrapper mt-3">
                <li class="icon twitter">
                  <span class="tooltip">Discord</span>
                  <span>
                    <i class="fab fa-discord"></i>
                  </span>
                </li>
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                </li>
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row  mt-5">
            <div className="col-12 text-center">
              <button class="button ">
                Join The Fight
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row nmb">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <img className="w-100 bnb" src={Img1}></img>
            <div className="mt-4">
              <strong className="font-weight-bold dfd ">
                Whitelist Price = 0.025ETH
              </strong>
              <br></br>
              <br></br>
              <strong className="font-weight-bold dfd ">
                Public Sale = 0.05ETH
              </strong>
              <Mintbtn />
              <div class="btn-cont">
                <a class="btn" href="#">
                  View On OpenSea
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                  <span class="line-4"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <a id="About"></a>
      <div className="container-fluid AAA ">
        <div>
          <Fade left>
            <h1 className="tt text-center pt-5">About Us</h1>
          </Fade>
        </div>
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-md-5">
              <Fade left>
                <img className="w-100 bnb" src={Img2}></img>
              </Fade>
            </div>
            <div className="col-1"></div>
            <div className="col-md-6 text-left">
              <Fade left>
                <p className="ui">
                  The Russian invasion of Ukraine has left its cities in turmoil
                  & people in despair. Many Ukrainians have been displaced, many
                  live their daily life in danger, & many are in need of basic
                  food/supplies.<br></br>
                  <br></br>Even when the war ends, the Ukrainians will need the
                  support of the world to help rebuild.<br></br> The pledge for
                  Heroes of Ukraine is to help fund the efforts on the front
                  lines. CharityWatch.org is an organization that vets charities
                  ensuring 75% or more of their fundraising efforts is given to
                  the charity.<br></br>
                  <br></br>With that said, the Heroes of Ukraine project pledges
                  to donate 75% of its sales to qualifying charitable
                  organizations.<br></br> Charities we will be contributing to
                  include Save the Children, Unicef, Project Hope, & Doctors
                  without Borders.{" "}
                </p>
                <button className="btn5 mt-5">
                  <i class="rer px-3 fa-brands fa-twitter"></i>Follow On Twitter
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid SSS">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Fade left>
              <h1 className="tt1 text-center pt-5">Utility</h1>
            </Fade>
            <Fade left>
              <p className="text-center mt-3 nk">
                Apart from receiving some cool, unique art & donating to
                charity, holders of Heroes of Ukraine NFTs will have Whitelist
                access to mint collection #2.<br></br>
                <br></br> Details of the 2nd project will be released pending
                the mint results of the 1st project. There are 3 exciting
                projects planned. Whitelist for the 3rd release will be
                accessible to holders of projects 1 & 2. You do not want to miss
                what we have in store!!! ***Special air drops will be given for
                people who mint 5+ & 10+.***<br></br>
                <br></br>
                **Special air drop will be given for people who mint & hold at
                least 1 NFT from each project.**
              </p>
            </Fade>
            <Fade left>
              <h1 className="tt1 text-center pt-5">TRANSPARENCY</h1>
            </Fade>
            <Fade left>
              <p className="text-center mt-3 nk">
                The origin of this project is the United States where fraud is
                taken very seriously. Arrests for rug pulls are becoming more &
                more common. We will routinely post confirmation of all
                progress, sales, & donations made on our website &/or social
                media.
              </p>
            </Fade>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <a id="Rd"></a>
      <div className="container-fluid ZZZ"></div>
      <h1 className="tt2 text-center ">WAR PATH</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center rd">
            <i class="gf fa-solid fa-battery-empty"></i>
            <h1 className="ty">Project#1</h1>
            <ul className="vg">
              <li>Community Building</li>
              <li>2500 whitelist spots available</li>
              <li>500 held in reserve for marketing & giveaways</li>
              <li>unlimited mint amount</li>
              <li>
                special air drops for people who mint 5 or more & 10 or more
              </li>
              <li> whitelist date: 4/26/22 7:00PM EDT</li>
              <li>public mint: 4/27/22 7:00PM EDT</li>
            </ul>
          </div>
          <div className="col-md-4 text-center rd1">
            <i class="gf fa-solid fa-battery-quarter"></i>
            <h1 className="ty">Project#2</h1>
            <ul className="vg">
              <li>Heroines of Ukraine (10k heroic women join the fight)</li>
              <li>automatic whitelist & giveaways for holders of project 1</li>
              <li>
                special air drops to people who mint 5 or more & 10 or more
              </li>
              <li>more details & previews coming</li>
            </ul>
          </div>
          <div className="col-md-4 text-center rd2">
            <i class="gf fa-solid fa-battery-three-quarters"></i>
            <h1 className="ty">Project#3</h1>
            <ul className="vg">
              <li>
                Kids of Ukraine (10k brave young Ukrainians join the team)
              </li>
              <li>
                automatic whitelist & giveaways for holders of projects 1 & 2
              </li>
              <li>
                {" "}
                special air drops to people who mint 5 or more & 10 or more
              </li>
              <li>more details & previews coming </li>
            </ul>
          </div>
          {/* <div className="col-md-3 text-center rd3">
            <i class="gf fa-solid fa-battery-full"></i>
            <h1 className="ty">Phase#4</h1>
            <ul className="vg">
              <li>Community Building</li>
              <li>Community Fund</li>
              <li>Launch $20,000 giveaway</li>
              <li>Organic Marketing Growth Tactics</li>
              <li>
                Project, Celebrity, & Influencer Partnerships prepped for Mint
              </li>
              <li>250 AstroHeads held in reserve for marketing</li>
              <li>300 Whitelist spots given to elders</li>
              <li>Giveaways & Community Challenges</li>
              <li>Reveal Mint Date: 11/14/2021</li>
            </ul>
          </div> */}
        </div>
      </div>
      <a id="Team"></a>
      <div id="rs-team" class="rs-team fullwidth-team pt-100 pb-70">
        <div class="container FFF">
          <h1 className="tt3 text-center ">The Team</h1>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={Img25}></img>
                  <div class="normal-text">
                    <h4 class="team-name">DAN</h4>
                    <span class="subtitle">
                      business owner from Connecticut; creator & architect
                    </span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="display-table">
                    <div class="display-table-cell">
                      <div class="share-icons">
                        <div class="border"></div>
                        <ul class="team-social icons-1">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>

                        <ul class="team-social icons-2">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={Img22} />
                  <div class="normal-text">
                    <h4 class="team-name">Sara</h4>
                    <span class="subtitle">
                      Graphic Designer & Artist; husky_logos
                    </span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="display-table">
                    <div class="display-table-cell">
                      <div class="share-icons">
                        <div class="border"></div>
                        <ul class="team-social icons-1">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>

                        <ul class="team-social icons-2">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 hidden-md ">
              <div class="team-item">
                <div class="team-img">
                  <img src={Img23} />

                  <div class="normal-text">
                    <h4 class="team-name">Damien</h4>
                    <span class="subtitle">Twitter & Marketing </span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="display-table">
                    <div class="display-table-cell">
                      <div class="share-icons">
                        <div class="border"></div>
                        <ul class="team-social icons-1">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>

                        <ul class="team-social icons-2">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 hidden-md ">
              <div class="team-item">
                <div class="team-img">
                  <img src={Img2} />

                  <div class="normal-text">
                    <h4 class="team-name">Wasabi_Avenger</h4>
                    <span class="subtitle">Discord & IT </span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="display-table">
                    <div class="display-table-cell">
                      <div class="share-icons">
                        <div class="border"></div>
                        <ul class="team-social icons-1">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>

                        <ul class="team-social icons-2">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 hidden-md ">
              <div class="team-item">
                <div class="team-img">
                  <img src={Img25} />

                  <div class="normal-text">
                    <h4 class="team-name">SABIR PRO</h4>
                    <span class="subtitle">The Developer </span>
                  </div>
                </div>
                <div class="team-content">
                  <div class="display-table">
                    <div class="display-table-cell">
                      <div class="share-icons">
                        <div class="border"></div>
                        <ul class="team-social icons-1">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                        </ul>

                        <ul class="team-social icons-2">
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="Faq"></a>
      <div className="containner-fluid  hkl">
        <div className="container">
          <h1 className="tt5 text-center  mt-5 ">Frequently Asked Questions</h1>
          <div className="row  hkl">
            <div className="col-md-1 text-center">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">
                  How much of the proceeds will be donated?
                </b>
              </strong>
              <br></br>

              <p className="ttn">
                75% of the total proceeds Ex:ETH=$3,000; 10Ksold@
                0.05ETH=500ETHx.75=300ETH donation
              </p>
            </div>
          </div>
          <hr className="gt"></hr>
          <div className="row  mt-5">
            <div className="col-md-1 text-center ">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">
                  Will royalties be donated to charity?
                </b>
              </strong>
              <br></br>

              <p className="ttn">
                Yes, a 5% royalty on all sales will be donated to the same
                charities.
              </p>
            </div>
          </div>
          <hr className="gt"></hr>
          <div className="row  mt-5">
            <div className="col-md-1 text-center ">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">
                  What charities will we be donating to?
                </b>
              </strong>
              <br></br>

              <p className="ttn">
                Save the Children, Unicef, Project Hope, & Doctors Without
                Borders
              </p>
            </div>
          </div>
          <hr className="gt"></hr>
          <div className="row  mt-5">
            <div className="col-md-1 text-center ">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">
                  When will details of Project 2 be released?
                </b>
              </strong>
              <br></br>

              <p className="ttn">
                Within 2 weeks of at least 5,000 total Heroes of Ukraine being
                sold.
              </p>
            </div>
          </div>
          <hr className="gt"></hr>
          <div className="row  mt-5">
            <div className="col-md-1 text-center  ">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">
                  When will details of Project 3 be released?
                </b>
              </strong>
              <br></br>

              <p className="ttn">
                Within 2 weeks of at least 5,000 total from collection #2 being
                sold.
              </p>
            </div>
          </div>
          <hr className="gt"></hr>
          <div className="row  mt-5">
            <div className="col-md-1 text-center  ">
              <i class="vdf fa-solid fa-circle-question"></i>
            </div>
            <div className="col-md-11 cxc">
              <strong>
                <b className="text-white dg">How many can I mint?</b>
              </strong>
              <br></br>

              <p className="ttn">Unlimited.</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr className="text-white"></hr>
      <div className="container-fluid text-center py-2 ghj  ">
        <p>
          <a href=" https://discord.com/" target="_blank">
            <i className="hu fab fa-discord Footer px-1"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className=" hu px-1 Footer fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <i className="hu px-1 Footer fab fa-instagram"></i>
          </a>

          <a href="/NFT">
            <span className="px-1 Footer text-white dxd ">
              © 2022, Ukraine Charity NFT
            </span>
          </a>
        </p>
        <p></p>
      </div>
    </div>
  );
}
