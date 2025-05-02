import React from "react";
import location1 from "../../assets/1.svg";
import location2 from "../../assets/2.svg";
import location3 from "../../assets/3.svg";
import about1 from "../../assets/about/1.jpeg";
import about2 from "../../assets/about/2.jpeg";
import about3 from "../../assets/about/3.jpeg";
import about4 from "../../assets/about/4.jpeg";
import about5 from "../../assets/about/5.jpeg";
import about6 from "../../assets/about/6.jpeg";
import about7 from "../../assets/about/7.jpeg";
import about8 from "../../assets/about/8.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LogoSlider from "../LogoSlider/logoslider";
import farzitext from '../../assets/about1.svg'
const locations = [
  {
    city: "GOA",
    image: location1,
    description: "Modern Thai bar & Grill",
    comingSoon: true,
  },
  {
    city: "DELHI",
    image: location3,
    description: "Modern Thai bar & Grill",
    comingSoon: false,
  },
  {
    city: "BANGALORE",
    image: location2,
    description: "Modern Thai bar & Grill",
    comingSoon: true,
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const OurLocation = () => {
  return (
    <div className="w-full mx-auto px-4 bg-black m-10 align-items-center">
      {/* Header Text */}
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark">Welcome to Farzi Café</h1>
        <p className="text-lg text-dark pt-12">
          Focusing on the gourmet diner as well as the youth of India, Farzi
          Café aims to bring Indian cuisine back "in-Vogue". "Farzi" can have
          many connotations, but at Farzi Café, it has just one, "creating an
          illusion" with its cuisine. Best described as a gourmet experience, it
          amalgamates traditional global and Indian classics, with Indian
          influences, contemporary presentations, culinary styles and ambiance.
          It is a quirky, chic, modern Indian café, where guests enjoy a sensory
          experience through the finest modern Indian cuisine, with a high
          energy ambiance. Infusing a generous dose of Indian flavours, Farzi
          Café presents Indian cuisine where culinary art meets the alchemy of
          modern presentations and cooking techniques like molecular gastronomy
          to absorb the guest into the ultimate gastronomic illusion.
        </p>
      </div>

      {/* Three Images Row */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full my-12 px-4 gap-8 md:gap-4">
        <div className="  overflow-hidden">
          <img src={farzitext} alt="Location image 1" className="w-full h-full object-cover" />
        </div>
      </div>
      

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 mb-10 mt-10">
        {/* {locations.map((location, index) => (
          <div
            key={index}
            className="relative rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 w-full max-w-sm"
            style={{
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              className={`relative w-full ${
                index === 2 ? '' : 'h-full'
              }`} 
              style={{ display: 'flex', height: '100%' }}
            >
              <img
                src={location.image}
                alt={`${location.city} location`}
                className={`w-full object-cover ${
                  index === 2 ? 'h-auto' : 'h-full'
                } rounded-lg grayscale`} 
              />

              {location.comingSoon && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">COMING SOON</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))} */}
      </div>
      <Carousel 
      responsive={responsive}
      infinite={true}>
          <div className="about_carousel">
            <img src={about1} alt="" className="grayscale" />
          </div>
          <div className="about_carousel">
            <img src={about2} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about3} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about4} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about5} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about6} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about7} alt="" className="grayscale"/>
          </div>
          <div className="about_carousel">
            <img src={about8} alt="" className="grayscale"/>
          </div>
        </Carousel>
      <LogoSlider />

    </div>
  );
};

export default OurLocation;
