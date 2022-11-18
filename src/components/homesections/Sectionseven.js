import React, {useRef, useState, useEffect} from 'react';
import sce from "../../img/sce1500.svg";
import videoplay from "../../img/blgr.mp4";
import bofapes from "../../img/bofapes1500.png";
import bg3a from "../../img/slider/cache/82f187f609f00f368c75749444acc26e/bg3a.png";
import leaves from "../../img/slider/cache/be3cdf63cc6e6b742129616e23e72cfe/leaves.jpg"
import ScrollContainer from 'react-indiana-drag-scroll';



export default function Sectionseven() {

  const slider = useRef();




  return (
<div
  className="n2-section-smartslider fitvidsignore n2_clear"
  data-ssid={25}
  tabIndex={0}
  role="region"
  aria-label="Slider"
>
  <div id="n2-ss-25-align" className="n2-ss-align n2-ss-align-visible">
    <div className="n2-padding">
      <div
        id="n2-ss-25"
        data-creator="Smart Slider 3"
        data-responsive="fullwidth"
        className="n2-ss-slider n2-ow n2-ss-showcase-horizontal n2-ss-loaded n2-ss-tabletPortrait"
        data-device-mode="tabletPortrait"
      >
        <div className="n2-ss-slider-wrapper-inside">
          <div
            className="n2-ss-slider-1 n2_ss__touch_element n2-ow"
            style={{ cursor: "grab", touchAction: "pan-y" }}
          >
            <div className="n2-ss-slider-2 n2-ow">
              <video
                loop="loop"
                className="n2-ss-slider-background-video n2-ow n2-cover"
                playsInline="playsinline"
                webkit-playsinline="webkit-playsinline"
                data-keepplaying={1}
                preload="none"
                muted="muted"
                autoPlay
              >
                <source src={videoplay} type="video/mp4" />
              </video>
              <div className="n2-ss-slider-3 n2-ow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 900"
                  data-related-device="desktopPortrait"
                  className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter"
                  style={{ maxWidth: 1000 }}
                />
                <div className="n2-ss-showcase-slides n2-ow n2-ss-showcase-slides--ready">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 940 540"
                    className="n2-ow n2-ss-preserve-size n2-ss-slide-limiter"
                  />
                  
                  <div
                    data-first={1}
                    data-slide-duration={0}
                    data-id={40}
                    data-slide-public-id={1}
                    data-title="Slide 4"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 15px",
                      borderRadius: 15,
                      opacity: "0.5",
                      transform: "translate3d(-1980px, 0px, 0px)",
                      zIndex: 101,
                      width: 940,
                      height: 540
                    }}
                    className="n2-ss-slide n2-ss-slide-40 n2-ow"
                    aria-hidden="true"
                  >
                    <div
                      className="n2-ss-slide-background"
                      data-public-id={1}
                      data-mode="fill"
                    >
                      <div
                        className="n2-ss-slide-background-image"
                        data-blur={0}
                        data-opacity={20}
                        data-x={50}
                        data-y={50}
                        data-alt=""
                        data-title=""
                        style={{ opacity: "0.2", margin: 0, padding: 0 }}
                      >
                        <picture
                          className="skip-lazy"
                          data-skip-lazy={1}
                          style={{ filter: "blur(0px)" }}
                        >
                          <img
                            src={sce}
                            alt=""
                            title=""
                            loading="eager"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                        </picture>
                      </div>
                      <div
                        data-color="RGBA(201,219,74,1)"
                        style={{ backgroundColor: "RGBA(201,219,74,1)" }}
                        className="n2-ss-slide-background-color"
                      />
                    </div>
                    <div className="n2-ss-slide-inner">
                      <div
                        role="note"
                        className="n2-ss-slide--focus"
                        tabIndex={-1}
                      >
                        Slide 4
                      </div>
                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                        <div
                          className="n2-ss-layer n2-ow n-uc-Lun4ItEe5IxC"
                          data-sstype="slide"
                          data-pm="default"
                          style={{ perspective: 1000 }}
                        >
                          <div
                            className="n2-ss-layer n2-ow n-uc-175f368ec3aef"
                            data-pm="default"
                            data-sstype="content"
                            data-hasbackground={0}
                          >
                            <div
                              className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-175f368ec3aef-inner"
                              style={{ perspective: 1000 }}
                            >
                              <div
                                className="n2-ss-layer n2-ow n-uc-F0olfGVjlkXg"
                                data-pm="normal"
                                data-sstype="layer"
                              >
                                <div className=" n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                                  <picture
                                    className="skip-lazy"
                                    data-skip-lazy={1}
                                  >
                                    <source
                                      srcSet="/images/slider/cache/18d9a9585931d24df4ad1297ea1dcee7/bofapes1500.webp"
                                      type="image/webp"
                                      media="(max-width: 425px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet="/images/slider/cache/da4a57b4b61b7bb1525f9e41ef75fdb9/bofapes1500.webp"
                                      type="image/webp"
                                      media="(max-width: 800px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet="/images/slider/cache/4b749445d2b577290ecacf3983437d84/bofapes1500.webp"
                                      type="image/webp"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <img
                                      id="n2-ss-25item1"
                                      alt=""
                                      className="skip-lazy"
                                      width={1000}
                                      height={1000}
                                      data-skip-lazy={1}
                                      src={bofapes}
                                      loading="eager"
                                    />
                                  </picture>
                                </div>
                              </div>
                              <div
                                className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-mrC81ZiHuRG1"
                                data-pm="normal"
                                data-sstype="row"
                              >
                                <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-mrC81ZiHuRG1-inner">
                                  <div
                                    className="n2-ss-layer-row-inner "
                                    style={{ perspective: 1000 }}
                                  >
                                    <div
                                      className="n2-ss-layer n2-ow n-uc-1240bcb247856"
                                      data-pm="default"
                                      data-sstype="col"
                                    >
                                      <div
                                        className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-1240bcb247856-inner"
                                        style={{ perspective: 1000 }}
                                      >
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-1ee53d81b1fc7"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-593f283c604a579b8f68059975e76e25-paragraph   ">
                                                Bank of PoA
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-aCLFEFGTqt7a"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div
                                            id="n2-ss-25item3"
                                            className="n2-font-61e92612d1cb307e33189075aa26335d-hover   n2-ss-item-content n2-ss-text n2-ow"
                                            style={{ display: "block" }}
                                          >
                                            Phase 1: Initiation
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-MsxbNphH3itF"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-a2cf29afd3b5b7926859fad9fe3457b7-paragraph   ">
                                                • Deploy the $BANK Smart
                                                Contract
                                                <br /> • Release the $BANK
                                                website
                                                <br /> • Establish social media
                                                presence
                                                <br /> • Release the lockers
                                                DApp for PoA chain
                                                <br /> • Get listed on the
                                                common listing sites whenever
                                                possible
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="n2-ss-showcase-overlay n2-ow" />
                  </div>
                  <div
                    data-slide-duration={0}
                    data-id={45}
                    data-slide-public-id={2}
                    data-title="Slide 4"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 15px",
                      borderRadius: 15,
                      opacity: "0.5",
                      transform: "translate3d(-990px, 0px, 0px)",
                      zIndex: 102,
                      width: 940,
                      height: 540
                    }}
                    className="n2-ss-slide n2-ss-slide-45 n2-ow"
                    aria-hidden="true"
                  >
                    <div
                      className="n2-ss-slide-background"
                      data-public-id={2}
                      data-mode="fill"
                    >
                      <div
                        className="n2-ss-slide-background-image"
                        data-blur={0}
                        data-opacity={100}
                        data-x={50}
                        data-y={50}
                        data-alt=""
                        data-title=""
                        style={{ margin: 0, padding: 0 }}
                      >
                        <picture
                          className="skip-lazy"
                          data-skip-lazy={1}
                          style={{ filter: "blur(0px)" }}
                        >
                          <source
                            srcSet={bg3a}
                            type="image/webp"
                            media="(max-width: 500px)"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                          <source
                            srcSet={bg3a}
                            type="image/webp"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                          <img
                            src={bg3a}
                            alt=""
                            title=""
                            loading="eager"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                        </picture>
                      </div>
                      <div
                        data-color="RGBA(255,255,255,0)"
                        style={{ backgroundColor: "RGBA(255,255,255,0)" }}
                        className="n2-ss-slide-background-color"
                      />
                    </div>
                    <div className="n2-ss-slide-inner">
                      <div
                        role="note"
                        className="n2-ss-slide--focus"
                        tabIndex={-1}
                      >
                        Slide 4
                      </div>
                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                        <div
                          className="n2-ss-layer n2-ow n-uc-EF41GvrCzO9A"
                          data-sstype="slide"
                          data-pm="default"
                          style={{ perspective: 1000 }}
                        >
                          <div
                            className="n2-ss-layer n2-ow n-uc-0AesP2HHPAeh"
                            data-pm="default"
                            data-sstype="content"
                            data-hasbackground={0}
                          >
                            <div
                              className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-0AesP2HHPAeh-inner"
                              style={{ perspective: 1000 }}
                            >
                              <div
                                className="n2-ss-layer n2-ow n-uc-hsiXoRf169LF"
                                data-pm="normal"
                                data-sstype="layer"
                              >
                                <div className=" n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                                  <picture
                                    className="skip-lazy"
                                    data-skip-lazy={1}
                                  >
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      media="(max-width: 425px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      media="(max-width: 800px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <img
                                      id="n2-ss-25item5"
                                      alt=""
                                      className="skip-lazy"
                                      loading="eager"
                                      width={1000}
                                      height={1000}
                                      data-skip-lazy={1}
                                      src={bofapes}
                                    />
                                  </picture>
                                </div>
                              </div>


                              <div
                                className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-7xuPTpiHvACo"
                                data-pm="normal"
                                data-sstype="row"
                              >
                                <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-7xuPTpiHvACo-inner">
                                  <div
                                    className="n2-ss-layer-row-inner "
                                    style={{ perspective: 1000 }}
                                  >
                                    <div
                                      className="n2-ss-layer n2-ow n-uc-GUjaN6o8rT8X"
                                      data-pm="default"
                                      data-sstype="col"
                                    >
                                      <div
                                        className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-GUjaN6o8rT8X-inner"
                                        style={{ perspective: 1000 }}
                                      >
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-16e385c3be242"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-593f283c604a579b8f68059975e76e25-paragraph   ">
                                                Bank of PoA
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-8DQw1ED4E11p"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div
                                            id="n2-ss-25item7"
                                            className="n2-font-61e92612d1cb307e33189075aa26335d-hover   n2-ss-item-content n2-ss-text n2-ow"
                                            style={{ display: "block" }}
                                          >
                                            Phase 2: Sustained Growth
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-W1Z5UnGbYJA5"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-a2cf29afd3b5b7926859fad9fe3457b7-paragraph   ">
                                                • Extend $BANK locker support to
                                                all major chains
                                                <br /> • Reveal three new
                                                services
                                                <br /> • Achieve 10,000
                                                followers across all social
                                                media channels
                                                <br /> • Establish a wide
                                                variety of partnerships
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="n2-ss-showcase-overlay n2-ow" />
                  </div>

                  <div
                    data-slide-duration={0}
                    data-id={46}
                    data-slide-public-id={3}
                    data-title="Slide 4"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 15px",
                      borderRadius: 15,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      zIndex: 103,
                      width: 940,
                      height: 540
                    }}
                    className="n2-ss-slide n2-ss-slide-46 n2-ow n2-ss-slide-active"
                  >
                    <div
                      className="n2-ss-slide-background"
                      data-public-id={3}
                      data-mode="fill"
                    >
                      <div
                        className="n2-ss-slide-background-image"
                        data-blur={0}
                        data-opacity={12}
                        data-x={50}
                        data-y={50}
                        data-alt=""
                        data-title=""
                        style={{ opacity: "0.12", margin: 0, padding: 0 }}
                      >
                        <picture
                          className="skip-lazy"
                          data-skip-lazy={1}
                          style={{ filter: "blur(0px)" }}
                        >
                          <source
                            srcSet={leaves}
                            type="image/webp"
                            media="(max-width: 500px)"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                          <source
                            srcSet={leaves}
                            type="image/webp"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                          <img
                            src={leaves}
                            alt=""
                            title=""
                            loading="eager"
                            className="skip-lazy"
                            data-skip-lazy={1}
                          />
                        </picture>
                      </div>
                      <div
                        data-color="RGBA(201,219,74,1)"
                        style={{ backgroundColor: "RGBA(201,219,74,1)" }}
                        className="n2-ss-slide-background-color"
                      />
                    </div>
                    <div className="n2-ss-slide-inner">
                      <div
                        role="note"
                        className="n2-ss-slide--focus"
                        tabIndex={-1}
                      >
                        Slide 4
                      </div>
                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                        <div
                          className="n2-ss-layer n2-ow n-uc-u7vnFYjc7Y1b"
                          data-sstype="slide"
                          data-pm="default"
                          style={{ perspective: 1000 }}
                        >
                          <div
                            className="n2-ss-layer n2-ow n-uc-sjsTW4ppsu95"
                            data-pm="default"
                            data-sstype="content"
                            data-hasbackground={0}
                          >
                            <div
                              className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-sjsTW4ppsu95-inner"
                              style={{ perspective: 1000 }}
                            >
                              <div
                                className="n2-ss-layer n2-ow n-uc-YjeXg3mJKSob"
                                data-pm="normal"
                                data-sstype="layer"
                              >
                                <div className=" n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                                  <picture
                                    className="skip-lazy"
                                    data-skip-lazy={1}
                                  >
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      media="(max-width: 425px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      media="(max-width: 800px)"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <source
                                      srcSet={bofapes}
                                      type="image/webp"
                                      className="skip-lazy"
                                      data-skip-lazy={1}
                                    />
                                    <img
                                      id="n2-ss-25item9"
                                      alt=""
                                      className="skip-lazy"
                                      loading="eager"
                                      width={1000}
                                      height={1000}
                                      data-skip-lazy={1}
                                      src={bofapes}
                                    />
                                  </picture>
                                </div>
                              </div>
                              <div
                                className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-l3RcrnrBFBV8"
                                data-pm="normal"
                                data-sstype="row"
                              >
                                <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-l3RcrnrBFBV8-inner">
                                  <div
                                    className="n2-ss-layer-row-inner "
                                    style={{ perspective: 1000 }}
                                  >
                                    <div
                                      className="n2-ss-layer n2-ow n-uc-Fb9vL7rKrtwP"
                                      data-pm="default"
                                      data-sstype="col"
                                    >
                                      <div
                                        className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-Fb9vL7rKrtwP-inner"
                                        style={{ perspective: 1000 }}
                                      >
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-rr50uufTMd0t"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-593f283c604a579b8f68059975e76e25-paragraph   ">
                                                Bank of PoA
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-Itn8hc7GUGi5"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div
                                            id="n2-ss-25item11"
                                            className="n2-font-61e92612d1cb307e33189075aa26335d-hover   n2-ss-item-content n2-ss-text n2-ow"
                                            style={{ display: "block" }}
                                          >
                                            Phase 3: Maturity
                                            <br />
                                          </div>
                                        </div>
                                        <div
                                          className="n2-ss-layer n2-ow n-uc-NahcPllorNw0"
                                          data-pm="normal"
                                          data-sstype="layer"
                                        >
                                          <div className="n2-ss-item-content n2-ss-text n2-ow-all">
                                            <div className="">
                                              <p className="n2-font-a2cf29afd3b5b7926859fad9fe3457b7-paragraph   ">
                                                • Distribute the revenue streams
                                                to all $BANK holders according
                                                to their holdings
                                                <br /> • Continuously search for
                                                expansion venues
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="n2-ss-showcase-overlay n2-ow" />
                  </div>
                   
                </div>


              </div>
              <div
                id="n2-ss-25-shape-divider-bottom"
                className="n2-ss-shape-divider n2-ss-shape-divider-bottom"
                data-ss-sd-animate={0}
                data-ss-sd-scroll={0}
                data-ss-sd-speed={100}
                data-ss-sd-side="bottom"
              >
                <div className="n2-ss-shape-divider-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1920 144"
                    preserveAspectRatio="none"
                    data-yoyo={1}
                  >
                    {" "}
                    <path
                      fill="RGBA(201,219,74,1)"
                      ease="easeInOutSine"
                      duration={5}
                      d="M0,24C710,-68,1020,214,1920,74L1920,146L0,146L0,39z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-center-bottom">
            <div
              style={{ widgetOffset: 10 }}
              className="n2-ss-widget n2-ss-control-bullet n2-ow-all n2-ss-control-bullet-horizontal"
            >
              <div className="n2-style-c188aef50c2412c0b74168ea981fe92e-simple  nextend-bullet-bar n2-bar-justify-content-center">
                <div>
                  <div
                    className="n2-bullet n2-style-d9fcd1b44c8c5d6a26e77cf04e0845fb-dot"
                    role="button"
                    aria-label="Slide 4"
                    tabIndex={0}
                  />
                </div>
                <div>
                  <div
                    className="n2-bullet n2-style-d9fcd1b44c8c5d6a26e77cf04e0845fb-dot"
                    role="button"
                    aria-label="Slide 4"
                    tabIndex={0}
                  />
                </div>
                <div>
                  <div
                    className="n2-bullet n2-style-d9fcd1b44c8c5d6a26e77cf04e0845fb-dot n2-active"
                    role="button"
                    aria-label="Slide 4"
                    aria-current="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ss3-loader />
    </div>
  </div>
  <div className="n2_clear" />
</div>

  )
}
