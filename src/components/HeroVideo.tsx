import { section } from "framer-motion/client";
import React from "react";
const HeroVideo = () => {
  return (
    <section className="relative overflow-hidden bg-primary pb-28 pt-20 sm:py-32">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Video Example</h1>
        <video controls width="640" height="360">
          <source src="../images/turntable.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroVideo;
