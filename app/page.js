import React from "react";

import Banner from "@/components/home/Banner";
import Mission from "@/components/home/Mission";
import Benefits from "@/components/home/Benefits";
import Works from "@/components/home/Works";
import Slider from "@/components/home/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Mission />
      <Benefits />
      <Works />
      <Slider />
    </div>
  );
};

export default Home;
