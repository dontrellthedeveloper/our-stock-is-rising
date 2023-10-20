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
  Purpose,
  History,
  Shop,
  Testimonials
} from "./../container";

// import { Navbar } from "../components";

const Homepage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Header />
      <About />
      {/* <Shop/> */}
      <Standards />
      <Purpose/>

      {/* <Brands/> */}
      <Statement/>

      <History/>
      <Testimonials/>
      {/* <Gallery /> */}

      {/* <Services/> */}
      {/* <Media/>
      <Team/>
      <AddServices/> */}
    </>
  );
};

export default Homepage;
