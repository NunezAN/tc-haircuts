import React from "react";

const About = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-6 md:gap-24 p-8">
      <h1 className="uppercase text-2xl md:text-5xl">
        Here's a little about us
      </h1>
      <p className="text-md md:text-xl lg:text-2xl">
        "Welcome to TC Haircuts, a premier hair cutting and dying salon located
        in Fort Worth. Our skilled stylists are dedicated to providing you with
        the highest level of beauty and relaxation. Our salon offers a range of
        hair services, including precision haircuts, expert color services, and
        personalized styling. Whether you're looking for a fresh new look or a
        simple touch-up, we're here to help you achieve your perfect style. With
        our commitment to using only the finest products and equipment, you can
        trust us to leave you feeling and looking your best. Book your
        appointment today and experience the ultimate in hair care and
        pampering."
      </p>
    </div>
  );
};

export default About;
