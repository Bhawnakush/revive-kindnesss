"use client";

import { brands } from "@/data/brands";
import { numberItems2 } from "@/data/facts";
import { testimonials5 } from "@/data/testimonials";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Team from "../home-10/Team";

export default function Testimonials() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.layout();
    });
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Section Text */}
        <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
          <div className="w-100">
            <h2
              className="section-caption-fancy mb-20 mb-xs-10"
              style={{ color: "#FB9533" }}
            >
              Testimonials
            </h2>
            <h3 className="section-title-small mb-30">
              The mindfulness practices we learned through Revive Kindness
              transformed the way our team communicates and connects. We've
              built a culture of understanding and support.
            </h3>
            <p className="section-descr mb-30">
            We've
            built a culture of understanding and support.
            </p>
            {/* Numbers */}
            <div className="row">
              {numberItems2.map((item, index) => (
                <div
                  key={index}
                  className={`col-md-6 number-1-item ${
                    !index ? "mb-sm-10" : ""
                  }`} 
                >
                  <div className="number-1-title "  style={{ color: "#FB9533" }} >{item.title}</div>
                  <div className="number-1-descr">{item.description}</div>
                </div>
              ))}
            </div>
            {/* End Numbers */}
          </div>
        </div>
        {/* End Section Text */}
        {/* Testimonials Grid */}
      {/* Testimonials Grid */}
<div className="col-xl-8 offset-xl-6 d-flex align-items-center justify-content-end">
  <div className="w-100 position-relative">
    {/* Decoration Dots */}
    <div className="col-xl-8">
      <Team />
    </div>
  </div>
</div>


        </div>
        {/* Testimonials Grid */}
      
      {/* Logotypes */}
      <div className="page-section pb-0 text-center">
        <h3 className="section-title-tiny">Trusted by Leading Companies</h3>
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          watchSlidesProgress
          modules={[Autoplay]}
          breakpoints={{
            1199: {
              slidesPerView: 6, // When window width is <= 1199px
            },

            768: {
              slidesPerView: 4, // When window width is <= 768px
            },
            480: {
              slidesPerView: 3, // When window width is <= 480px
            },

            0: {
              slidesPerView: 2,
            },
          }}
          autoplay
          resizeObserver
          className="small-item-carousel black owl-carousel mb-0 owl-theme overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {brands.map((elm, i) => (
            <SwiperSlide className="owl-item" key={i}>
              <div className="logo-item">
                <Image src={elm} width={215} height={75} alt="Company Name" />
              </div>
            </SwiperSlide>
          ))}

          {/* End Team item */}
        </Swiper>
      </div>
      {/* End Logotypes */}
    </div>
  );
}
          