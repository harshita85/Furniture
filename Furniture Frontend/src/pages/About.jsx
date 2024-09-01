import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero"
import FooterSection from "../Component/FooterSection"
import WhyChooseUs from "../Component/WhyChooseUs"
import OurTeam from "../Component/OurTeam"
import Testimonial from "./Components/Testimonial";

function About() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "about" }} />
      <Hero two={{ title: "About us" }} />
      {/* <h1>about</h1> */}
      <WhyChooseUs />
      <OurTeam />
      <Testimonial />
      {/* footer */}
      <FooterSection />
    </>
  );
}

export default About;
