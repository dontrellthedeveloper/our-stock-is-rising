import React from "react";

import {
  Header,
  About,
  Brands,
  Standards,
  Gallery,
  Services,
  Media,
  Team,
  AddServices,
  Statement,
} from "./../container";

// import { Navbar } from "../components";

const Homepage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Header />
      <About />
      <Standards />
      {/* <Brands/> */}

      <Gallery />
      <Statement/>
      {/* <Services/> */}
      {/* <Media/>
      <Team/>
      <AddServices/> */}
    </>
  );
};

export default Homepage;
