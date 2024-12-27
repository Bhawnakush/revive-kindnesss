import { features3 } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src="/assets/images/demo-fancy/section-image-7.png"
                alt="Image Description"
                width={1200}
                height={658}
                className="w-100"
              />
            </div>
           
          </div>
        </div>
        {/* End Images */}
        {/* Section Text */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10" style={{color:'#FB9533'}}>
              Why Choose Us?
            </h2>
            <h3 className="section-title-small mb-30">
  We use the power of design to solve complex problems.
</h3>
<ul className="section-descr mb-30" style={{ listStyleType: "disc", color:'#FB9533' , paddingLeft: "20px" }}>
  <li>Practicing mindfulness increases self-awareness, reduces stress, and strengthens emotional intelligence.</li>
  <li>Kindness and empathy improve team collaboration, boost productivity, and foster trust in relationships.</li>
  <li>
    Studies show that schools and workplaces with high emotional intelligence and mindfulness see a 30% reduction in
    conflicts and improved overall well-being.
  </li>
</ul>

            
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
