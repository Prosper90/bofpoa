import React from 'react';
import asset from "../../img/Asset11500.png";
import videoplay from "../../img/blgr.mp4";


export default function Sectionfive() {
  return (
<div
  className="n2-section-smartslider fitvidsignore n2_clear"
  data-ssid={24}
  tabIndex={0}
  role="region"
  aria-label="Slider"
>
  <div id="n2-ss-24-align" className="n2-ss-align n2-ss-align-visible">
    <div className="n2-padding">
      <div
        id="n2-ss-24"
        data-creator="Smart Slider 3"
        data-responsive="auto"
        className="n2-ss-slider n2-ow n2-has-hover n2-ss-tabletPortrait n2-ss-loaded"
        data-device-mode="tabletPortrait"
      >
        <div className="n2-ss-slider-1 n2-ow">
          <div className="n2-ss-slider-2 n2-ow">
            <div className="n2-ss-slide-backgrounds n2-ow-all">
              <div
                className="n2-ss-slide-background"
                data-public-id={1}
                data-mode="fill"
              >
                <video
                  className="n2-ss-slide-background-video intrinsic-ignore data-tf-not-load"
                  style={{ opacity: 1 }}
                  data-mode="fill"
                  playsInline="playsinline"
                  webkit-playsinline="webkit-playsinline"
                  onloadstart="this.n2LoadStarted=1;"
                  data-keepplaying={1}
                  preload="none"
                  muted="muted"
                  loop="loop"
                  data-reset-slide-change={1}
                  autoPlay
                >
                  <source src={videoplay} type="video/mp4" />
                </video>
                <div
                  data-gradient="vertical"
                  data-color-start="RGBA(27,27,27,0)"
                  data-color-end="RGBA(27,27,27,1)"
                  style={{
                    background:
                      "linear-gradient(to bottom, RGBA(27,27,27,0) 0%,RGBA(27,27,27,1) 100%)"
                  }}
                  className="n2-ss-slide-background-color"
                  data-overlay={1}
                />
              </div>
            </div>{" "}
            <div className="n2-ss-slider-3 n2-ow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1000"
                data-related-device="desktopPortrait"
                className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter"
              />
              <div
                data-first={1}
                data-slide-duration={0}
                data-id={39}
                data-slide-public-id={1}
                data-title="Slide 3"
                className="n2-ss-slide n2-ow n2-ss-slide-39 n2-ss-slide-active"
                style={{ height: "870.828px" }}
              >
                <div role="note" className="n2-ss-slide--focus" tabIndex={-1}>
                  Slide 3
                </div>
                <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                  <div
                    className="n2-ss-layer n2-ow n-uc-CBvRsP2py47T"
                    data-sstype="slide"
                    data-pm="default"
                    style={{ perspective: 1000 }}
                  >
                    <div
                      className="n2-ss-layer n2-ow n-uc-iIE2sFzhQf1v"
                      data-pm="default"
                      data-sstype="content"
                      data-hasbackground={0}
                    >
                      <div
                        className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-iIE2sFzhQf1v-inner"
                        style={{ perspective: 1000 }}
                      >
                        <div
                          className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-g4jK3INfoDA3"
                          data-pm="normal"
                          data-sstype="row"
                        >
                          <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-g4jK3INfoDA3-inner">
                            <div
                              className="n2-ss-layer-row-inner "
                              style={{ perspective: 1000 }}
                            >
                              <div
                                className="n2-ss-layer n2-ow n-uc-HRuZmf4iRvnv"
                                data-pm="default"
                                data-sstype="col"
                              >
                                <div
                                  className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-HRuZmf4iRvnv-inner"
                                  style={{ perspective: 1000 }}
                                >
                                  <div
                                    className="n2-ss-layer n2-ow n-uc-NM3CPXau0LgM"
                                    data-pm="normal"
                                    data-animv2='{"basic":{"in":{"type":"basic","name":"Downscale","keyFrames":[{"opacity":0,"scaleX":2,"scaleY":2}]},"loop":{"type":"basic","name":"Pulse","keyFrames":[{"duration":2,"ease":"easeInOutSine","scaleX":1.05,"scaleY":1.05}]}}}'
                                    data-sstype="layer"
                                    style={{
                                      transformOrigin: "50% 50% 0px",
                                      transform: "scale(1.0494, 1.0494)",
                                      opacity: 1
                                    }}
                                  >
                                    <div className=" n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                                      <picture
                                        className="skip-lazy"
                                        data-skip-lazy={1}
                                      >
                                        <source
                                          src={asset}
                                          type="image/webp"
                                          media="(max-width: 425px)"
                                          className="skip-lazy"
                                          data-skip-lazy={1}
                                        />
                                        <source
                                          src={asset}
                                          type="image/webp"
                                          media="(max-width: 800px)"
                                          className="skip-lazy"
                                          data-skip-lazy={1}
                                        />
                                        <source
                                          src={asset}
                                          type="image/webp"
                                          className="skip-lazy"
                                          data-skip-lazy={1}
                                        />
                                        <img
                                          id="n2-ss-24item1"
                                          alt=""
                                          className="skip-lazy"
                                          width={1500}
                                          height={1345}
                                          data-skip-lazy={1}
                                          src={asset}
                                          loading="eager"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="n2-ss-layer n2-ow n-uc-nlpDkA2Bq6eV"
                                data-pm="default"
                                data-sstype="col"
                              >
                                <div
                                  className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-nlpDkA2Bq6eV-inner"
                                  style={{ perspective: 1000 }}
                                >
                                  <div
                                    className="n2-ss-layer n2-ow n-uc-BwPUWg14yXz7"
                                    data-pm="normal"
                                    data-sstype="layer"
                                  >
                                    <div
                                      id="n2-ss-24item2"
                                      className="n2-font-4b56cd2cc699001bb7fb3f8bb8b859cc-hover   n2-ss-item-content n2-ss-text n2-ow"
                                      style={{ display: "block" }}
                                    >
                                      $Bank
                                    </div>
                                  </div>
                                  <div
                                    className="n2-ss-layer n2-ow n-uc-CL7dtlJ6trzC"
                                    data-pm="normal"
                                    data-sstype="layer"
                                  >
                                    <div
                                      id="n2-ss-24item3"
                                      className="n2-font-a686e3e07b60de440c088a15ed5812ff-hover   n2-ss-item-content n2-ss-text n2-ow"
                                      style={{ display: "block" }}
                                    >
                                      Incubation
                                    </div>
                                  </div>
                                  <div
                                    className="n2-ss-layer n2-ow n-uc-fYsVDPXZG7zd"
                                    data-pm="normal"
                                    data-sstype="layer"
                                  >
                                    <div
                                      id="n2-ss-24item4"
                                      className="n2-font-c869ac70c1988f91da80e52db19eae50-hover   n2-ss-item-content n2-ss-text n2-ow"
                                      style={{ display: "block" }}
                                    >
                                      $BANK provides incubation services for
                                      prominent projects across all chains.
                                      Incubated projects will be required to
                                      deploy through the $BANK deployer and
                                      strict vetting will be applied to ensure
                                      the safety of investors.
                                    </div>
                                  </div>
                                  <div
                                    className="n2-ss-layer n2-ow n-uc-175df01e6eff5"
                                    data-pm="normal"
                                    data-animv2='{"basic":{"in":{"type":"basic","name":"Blur","keyFrames":[{"delay":1,"opacity":0,"n2blur":10}]}}}'
                                    data-sstype="layer"
                                    style={{
                                      transformOrigin: "50% 50% 0px",
                                      filter: "none",
                                      opacity: 1
                                    }}
                                  >
                                    <div className="n2-ss-button-container n2-ss-item-content n2-ow n2-font-ba5ca255ca313fbd089eaa0091c40c9a-link  n2-ss-nowrap">
                                      <a
                                        className="n2-style-f78e58d88287be6b486ecf9d95013587-heading  n2-ow "
                                        href="https://t.me/heisenman"
                                        tabIndex={0}
                                      >
                                        <div>
                                          <div>Incubation Inquiries</div>
                                        </div>
                                      </a>
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
              </div>{" "}
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
