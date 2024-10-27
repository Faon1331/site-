"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsBehance } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Blender Art",
    title: "project 1",
    description: "Creating an interactive 3D scene using Blender. The work includes modeling, texturing, and animating objects.",
    stack: [{name: "Blender"}],
    image: "/assets/work/blender1.png",
    artstation: "https://www.artstation.com/dimov_konstantin",
    behance: "https://www.behance.net/gallery/175137847/heavenly-city",
  },
  {
    num: "02",
    category: "Blender Interior",
    title: "project 2",
    description: "Creating an interactive 3D scene using Blender. The work includes modeling, texturing, and animating objects.",
    stack: [{name: "Blender"}],
    image: "/assets/work/blender2.png",
    artstation: "https://www.artstation.com/dimov_konstantin",
    behance: "https://www.behance.net/gallery/175132487/3d-render-and-modeling-interiors",
  },
  {
    num: "03",
    category: "Blender Art",
    title: "project 3",
    description: "Creating an interactive 3D scene using Blender. The work includes modeling, texturing, and animating objects.",
    stack: [{name: "Blender"}],
    image: "/assets/work/blender3.png",
    artstation: "https://www.artstation.com/dimov_konstantin",
    behance: "https://www.behance.net/gallery/210056209/exterior-of-an-old-gas-station",
  },
  {
    num: "04",
    category: "Blender Interior",
    title: "project 4",
    description: "Creating an interactive 3D scene using Blender. The work includes modeling, texturing, and animating objects.",
    stack: [{name: "Blender"}],
    image: "/assets/work/blender4.png",
    artstation: "https://www.artstation.com/dimov_konstantin",
    behance: "https://www.behance.net/gallery/210056321/the-interior-of-the-room",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section 
    initial={{ opacity: 0}}
    animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-[#0B0C10]" // Изменено: добавлен bg-[#0B0C10]
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-[#F5F5F5]"> {/* Изменено: добавлен text-[#F5F5F5] */}
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-[#F5F5F5] group-hover:text-[#42AAFF] transition-all duration-500 capitalize"> {/* Изменено: text-white на text-[#F5F5F5], text-accent на text-[#42AAFF] */}
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-[#F5F5F5]/60">{project.description}</p> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=> {
                  return (
                  <li key={index} className="text-xl text-[#42AAFF]"> {/* Изменено: text-accent на text-[#42AAFF] */}
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length -1 && ","}
                  </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-[#F5F5F5]/20"></div> {/* Изменено: border-white/20 на border-[#F5F5F5]/20 */}
              {/* bottons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.artstation}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#F5F5F5]/5 flex justify-center items-center group "> {/* Изменено: bg-white/5 на bg-[#F5F5F5]/5 */}
                        <FaArtstation className="text-[#F5F5F5] text-3xl group-hover:text-[#42AAFF] " /> {/* Изменено: text-white на text-[#F5F5F5], text-accent на text-[#42AAFF] */}
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#232329] text-[#F5F5F5]">
                        <p className="text-[#F5F5F5]">ArtStation</p> {/* Изменено: добавлен text-[#F5F5F5] */}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Behance project button */}
                <Link href={project.behance}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#F5F5F5]/5 flex justify-center items-center group "> {/* Изменено: bg-white/5 на bg-[#F5F5F5]/5 */}
                        <BsBehance className="text-[#F5F5F5] text-3xl group-hover:text-[#42AAFF] " /> {/* Изменено: text-white на text-[#F5F5F5], text-accent на text-[#42AAFF] */}
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#232329] text-[#F5F5F5]">
                        <p className="text-[#F5F5F5]">Behance</p> {/* Изменено: добавлен text-[#F5F5F5] */}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"> {/* Изменено: bg-pink-50/20 - это placeholder, замените на нужный цвет */}
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        alt=""
                        fill
                        className="object-cover" 
                      />
                    </div>
                  </div>
                </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-[#42AAFF] hover:bg-[#5DADE2] text-[#F5F5F5] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" /> {/* Изменено: bg-accent на bg-[#42AAFF], hover:bg-accent-hover на hover:bg-[#5DADE2], text-primary на text-[#F5F5F5] */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;