import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import story from '../../assets/story2.png'
import location from "../../assets/about/ourstory.jpg"
import ourstory from "../../assets/ourstory.mp4"
import telephone from "../../assets/telephone.jpeg"
import vidfar from "../../assets/vidfar.mp4"
import farziCafe1 from "../../assets/Farzi_Cafe1.mp4"
import farziCafe2 from "../../assets/Farzi_Cafe2.mp4"
// import farziCafe3 from "../../assets/Farzi_Cafe3.mp4"
import farziCafe4 from "../../assets/Farzi_Cafe4.mp4"

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

  const videos = [farziCafe1, farziCafe2, farziCafe4, vidfar];
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  
  useEffect(() => {
    const desktopInterval = setInterval(() => {
      setDesktopIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);
    
    const mobileInterval = setInterval(() => {
      setMobileIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 4000); // Slightly longer interval for mobile
    
    return () => {
      clearInterval(desktopInterval);
      clearInterval(mobileInterval);
    };
  }, [videos.length]);

  return (
    <div className="w-full py-16 px-8 bg-[#ffffff] relative">
      
      {/* Video Carousel - desktop: shows 4, scrolls 1 at a time; mobile: shows 1, scrolls 1 */}
      <div className="max-w-7xl mx-auto mb-12 overflow-hidden">
        <div className="hidden md:block"> {/* Desktop view - hidden on mobile */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out" 
            style={{ 
              transform: `translateX(-${desktopIndex * 10}%)`,
              width: `${videos.length * 50}%`
            }}
          >
            {/* Create a combined array with duplicated videos at the end to ensure smooth looping */}
            {[...videos, ...videos, ...videos].slice(0, videos.length + 4).map((video, index) => (
              <div key={index} className="w-1/4 px-1">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="block md:hidden"> {/* Mobile view - hidden on desktop */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out" 
            style={{ 
              transform: `translateX(-${mobileIndex * 15}%)`,
              width: `${videos.length * 80}%`
            }}
          >
            {videos.concat(videos.slice(0, 1)).map((video, index) => (
              <div key={index} className="w-full px-1">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
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
           Bo Tai is a modern Thai bar and grill concept that seamlessly blends cosmopolitan Italian design with vibrant Thai elements. With its chic yet cozy ambiance, Bo Tai is crafted for the young, stylish, and socially savvy crowd. The name itself, a playful pun on "bow-tie," reflects the sophistication and bold flavors of its Oriental-inspired cuisine. Combining contemporary Thai and Italian influences, Bo Tai offers a unique culinary experience set against an international backdrop that celebrates both style and flavor.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {/* Outlets stat */}
            <motion.div 
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              {/* <div className="text-4xl font-bold mb-2">Handmade Syrups</div> */}
              <div className="text-xl text-center text-[#000000] border-[#000000]">Handmade Syrups</div>
            </motion.div>

            {/* Awards stat */}
            <motion.div 
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              {/* <div className="text-4xl font-bold mb-2">Live Sushi Bar</div> */}
              <div className="text-xl text-center text-[#000000] border-[#e07e90]" >Live Sushi Bar</div>
            </motion.div>

            {/* Additional Awards stat */}
            <motion.div 
              className="flex-1 min-w-[200px] rounded-2xl p-6 border-2 border-[#000000]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={statCardVariants}
            >
              {/* <div className="text-4xl font-bold mb-2">Infinity View</div> */}
              <div className="text-xl text-center text-[#000000] border-[#e07e90]">Infinity View</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;