"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Hero1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* End Background Shape */}
      <div className="container position-relative min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-30">
              <div className="w-100 text-center text-lg-start">
                <h2
                  className="section-caption-fancy mb-30 mb-xs-20 wow fadeInUp "
                  data-wow-duration="1.2s"
                  style={{ color: "#FB9533" }}
                >
                  Resonance Web Studi
                </h2>
                <h1 className="hs-title-10 mb-30">
                  <span
                    className="wow charsAnimIn"
                    data-splitting="chars"
                    style={{ fontSize: "50px" }}
                  >
                    Fostering Mindfulness, Reviving Empathy, and Spreading
                    Kindness—One Act at a Time.
                  </span>
                </h1>
                <p
                  className="section-descr mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  Empowering individuals and teams to cultivate mindfulness,
                  empathy, kindness, and authentic connections.
                </p>
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                >
                  <a
                    //onClick={() => setOpen(true)}
                    className="btn btn-mod btn-border-c btn-white-c btn-large btn-round mb-xs-10 lightbox mfp-iframe"
                    data-btn-animate="y"
                    style={{ color: "#FB9533" }}
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        <i
                          className="icon-play size-13 me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        How we work?
                      </span>
                      <span className="btn-animate-y-2"  style={{ color: "#FB9533" }} aria-hidden="true">
                        <i
                          className="icon-play size-13 me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        How we work?
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Image */}
            <div className="col-lg-6 col-xl-7 d-flex align-items-center">
              <div className="w-100 wow fadeInLeft" data-wow-delay="0.7s">
                <div className="position-relative mt-40 mb-20">
                  <Image
                    src="/assets/images/demo-fancy/hs-image.png"
                    width={1200}
                    height={678}
                    alt="Image Description"
                    className="w-100"
                  />
                  {/* Decorative Waves */}
                  <div
                    className="decoration-5 d-none d-sm-block"
                    data-rellax-y=""
                    data-rellax-speed="-0.7"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      src="/assets/images/demo-fancy/decoration-1.svg"
                      width={159}
                      height={74}
                      alt=""
                    />
                  </div>
                  {/* End Decorative Waves */}
                </div>
               
              </div>
            </div>
            {/* End Image */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container text-center text-lg-start">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
    </>
  );
}