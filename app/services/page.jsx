"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Level Design",
    description: "Creating game levels that balance visuals with gameplay.",
    href: "/contact"
  },
  {
    num: "02",
    title: "3D Prop Creation",
    description: "Modeling simple and quality 3D objects for games and films.",
    href: "/contact"
  },
  {
    num: "03",
    title: "3D Commercials Creation",
    description: "Making 3D animations for ads that help highlight the product.",
    href: "/contact"
  },
  {
    num: "04",
    title: "3D Art Creation",
    description: "Developing 3D art with attention to detail and visual appeal.",
    href: "/contact"
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-[#0B0C10]"> {/* Добавлен основной фон */}
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-col justify-between gap-6 group h-full">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#42AAFF] transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-[#F5F5F5] group-hover:text-[#42AAFF] transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })} 
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
