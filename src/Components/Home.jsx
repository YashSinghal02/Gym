import React from "react";
import Home1 from "./Home1";
import GymTimetableWithStyles from "./GymTimetableWithStyles ";
import WhoAre from "./WhoAre";
import HomeClass from "./HomeClass";
import Homemax from "./Homemax";
import HCoaches from "./HCoaches";
import HTestimonial from "./HTestimonial";
import HBlogs from "./HBlogs";
import HDownload from "./HDownload";
import HTraining from "./HTraining";
import CombineBmi from "./CombineBmi";
import Pricing from "./Pricing";
import Brand from "./Brand";
import Branddtestimoinal from "./Branddtestimoinal";

export default function Home() {
  return (
    <div>
      <Home1 />
      <HTraining />
      <WhoAre />
      <HomeClass />
      <Homemax />
      <GymTimetableWithStyles />
      <HTestimonial />
      <HCoaches />
      <Pricing />
      <HDownload />
      <CombineBmi />
      <HBlogs />
      {/* <Brand/> */}
      <Branddtestimoinal />
    </div>
  );
}
