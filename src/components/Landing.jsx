import React from "react";
import About from "./About";

const Landing = () => {
  return (
    <div className="w-full h-screen relative flex justify-between bg-[#DDC5B2]">
      <img
        className="object-cover md:w-[50%] object-bottom"
        src="https://images.unsplash.com/photo-1620331309205-b5a4669ac526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ></img>
      <About />
    </div>
  );
};

export default Landing;
