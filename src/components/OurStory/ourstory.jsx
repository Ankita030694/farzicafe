import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import story from '../../assets/story2.png'
import location from "../../assets/about/ourstory.jpg"
import ourstory from "../../assets/ourstory.mp4"
import telephone from "../../assets/telephone.jpeg"
import vidfar from "../../assets/vidfar.mp4"



const OurStory = () => {
  const titleVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statCardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };


  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  


  return (
    <div className="w-full py-16 px-8 bg-[#ffffff] relative">
      
     
   
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left side - Title */}
        <motion.div 
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          {/* <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={ourstory} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src={telephone} alt="" />
        </motion.div>

        {/* Right side - Content */}
        <div className="md:w-2/3 flex flex-col gap-8 text-center">
        <h2 className="text-[#000000] text-6xl font-bold">
            OUR STORY
          </h2>
          {/* Description */}
          <motion.p 
            className="text-lg leading-relaxed text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
          >
          Farzi Café is a popular modern-Indian bistro known for its creative take on traditional Indian cuisine. The brand reimagines classic dishes by blending them with global flavours, inventive techniques, and contemporary presentation. Farzi Café focuses on giving diners a fun, experimental, and memorable experience by presenting familiar Indian dishes in a stylish, gourmet way.

Its menu features innovative fusion dishes such as Dal Chawal Arancini, Tempura Fried Prawns, Vada Pav Farzified, and unique chaats with modern twists. The restaurant is also known for its artistic plating and occasional use of molecular gastronomy, making the dining experience both visually appealing and flavour-forward. Along with food, Farzi Café offers a vibrant selection of cocktails and beverages crafted to match its bold and modern culinary style.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {/* Modern Indian Fusion */}
            <motion.div 
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.10)",
                borderColor: "#e07e90"
              }}
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000] transition-all duration-200 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              <div className="text-xl text-center text-[#000000]">
                Modern Indian Fusion
              </div>
            </motion.div>

            {/* Creative Presentation */}
            <motion.div 
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.10)",
                borderColor: "#e07e90"
              }}
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000] transition-all duration-200 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              <div className="text-xl text-center text-[#000000]">
                Creative Presentation
              </div>
            </motion.div>

            {/* Vibrant Ambience */}
            <motion.div 
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.10)",
                borderColor: "#e07e90"
              }}
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000] transition-all duration-200 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              <div className="text-xl text-center text-[#000000]">
                Vibrant Ambience
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;