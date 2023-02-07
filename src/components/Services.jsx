import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "men's haircut",
    description:
      "Get a fresh, modern look with our expert men's haircuts. Our skilled stylists use the latest techniques and styles to provide you with a customized cut that fits your individual look and lifestyle.",
    image:
      "https://images.unsplash.com/photo-1599351431408-433ef72fe40b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    name: "woman's haircut",
    description:
      "Transform your hair into a stylish statement with our women's haircuts. Our experienced stylists use their artistic vision and precision cutting skills to give you a look that flatters your features and enhances your natural beauty. ",
    image:
      "https://images.unsplash.com/photo-1614609819116-eee9c271a928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80",
  },
  {
    name: "woman's hair styling",
    description:
      "Unleash your inner glamour with our women's hair styling services. From sleek and smooth to voluminous and curly, we have the skills and creativity to bring your vision to life. ",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    name: "hair dyeing",
    description:
      "Add a pop of color to your hair with our hair dyeing services. Whether you're looking for a subtle change or a bold statement, our experienced colorists will work with you to find the perfect hue.",
    image:
      "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Services = () => {
  return (
    <div className="w-screen min-h-[94vh] p-8">
      <div className="max-w-7xl min-h-[94vh] mx-auto">
        <h1 className="uppercase text-3xl md:text-5xl text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          {services.map((service) => (
            <ServiceCard
              name={service.name}
              image={service.image}
              description={service.description}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
