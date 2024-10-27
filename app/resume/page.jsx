"use client";

import {FaHtml5, FaCss3, FaJs, } from "react-icons/fa";
import { SiBlender, SiUnrealengine, SiAutodeskmaya, SiUnity} from "react-icons/si";
//about  me
const about ={
  title: "About me",
  description: "Essential information about me and my competencies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dimov Konstantin"
    },
    {
      fieldName: "Phone",
      fieldValue: "+7 771 129 5610"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year"
    },
    {
      fieldName: "Telegram",
      fieldValue: "@Faon1337"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bulgarian"
    },
    {
      fieldName: "Email",
      fieldValue: "dimov.konstantin.06@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Russian, English"
    },
  ]
};
//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Work experience in 3D graphics and development accumulated over recent years. ",
  items: [
    {
      company: "Jurgiz",
      position: "3D Artist",
      duration: "summer 2024",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance 3D Artist",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "The education that has shaped my professional foundation. ",
  items: [
    {
      institution: "Geron Expert2",
      degree: "Blender, Java, Android Studio",
      duration: "2022-2023",
    },
    {
      institution: "Geron Expert3",
      degree: "C#, Unity, Unity VR",
      duration: "2023-2024",
    },
    {
      institution: "AstanaHub 3D",
      degree: "Blender, Substance Painter ",
      duration: "2023-2024",
    },

  ],
};

//skills data
const skills = {
  title: "My skills",
  description: "Key skills and tools I am proficient in.",
  skillLisk: [
    {
      icon: <SiBlender />,
      name: "Blender" 
    },
    {
      icon: <SiUnrealengine />,
      name: "Unreal Engine 5" 
    },
    {
      icon: <SiAutodeskmaya />,
      name: "Maya" 
    },
    {
      icon: <FaHtml5 />,
      name: "html 5" 
    },
    {
      icon: <FaCss3 />,
      name: "css 3" 
    },
    {
      icon: <FaJs />,
      name: "JS" 
    },
    {
    icon: <SiUnity />,
    name: "Unity" 
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-[#0B0C10]" // Изменено: добавлен bg-[#0B0C10]
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#F5F5F5]">{experience.title}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                <p className="max-w-[600px] text-[#F5F5F5]/60 mx-auto xl:mx-0"> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[#42AAFF]">{item.duration}</span> {/* Изменено: text-accent на text-[#42AAFF] */}
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-[#F5F5F5]">{item.position}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[#42AAFF]"></span> {/* Изменено: bg-accent на bg-[#42AAFF] */}
                          <p className="text-[#F5F5F5]/60">{item.company}</p> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#F5F5F5]">{education.title}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                <p className="max-w-[600px] text-[#F5F5F5]/60 mx-auto xl:mx-0"> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[#42AAFF]">{item.duration}</span> {/* Изменено: text-accent на text-[#42AAFF] */}
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-[#F5F5F5]">{item.degree}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[#42AAFF]"></span> {/* Изменено: bg-accent на bg-[#42AAFF] */}
                          <p className="text-[#F5F5F5]/60">{item.institution}</p> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[#F5F5F5]">{skills.title}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                  <p className="max-w-[600px] text-[#F5F5F5]/60 mx-auto xl:mx-0">{skills.description}</p> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillLisk.map((skill, index)=> {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-[#42AAFF] transition-all duration-300 text-[#F5F5F5]">{skill.icon}</div> {/* Изменено: text-accent на text-[#42AAFF], добавлен text-[#F5F5F5] */}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-[#F5F5F5]">{skill.name}</p> {/* Изменено: добавлен text-[#F5F5F5] */}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-[#F5F5F5]">{about.title}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                <p className="max-w-[600px] text-[#F5F5F5]/60 mx-auto xl:mx-0"> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-[#F5F5F5]/60">{item.fieldName}</span> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                      <span className="text-xl text-[#F5F5F5]">{item.fieldValue}</span> {/* Изменено: добавлен text-[#F5F5F5] */}
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;