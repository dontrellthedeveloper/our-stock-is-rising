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
      {/* <Services/> */}
      {/* <Media/>
      <Team/>
      <AddServices/> */}
    </>
  );
};

export default Homepage;
