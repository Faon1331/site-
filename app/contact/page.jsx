"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+7 771 129 5610",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dimov.konstantin.06@gmail.com",
  },
  {
    icon: <FaTelegram />,
    title: "Telegram",
    description: "@Faon1337",
  }
]

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6 bg-[#0B0C10]" // Изменено: добавлен bg-[#0B0C10]
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center xl:flex-row gap-[30px]">
          {/* info */}
          <div className="xl:w-[54%] text-center"> 
            <div className="p-10 bg-[#232329] rounded-xl"> {/* Изменено: bg-[#27272c] на bg-[#232329] */}
              <h3 className="text-4xl text-[#42AAFF] mb-4">Let's work together</h3> {/* Изменено: text-accent на text-[#42AAFF] */}
              <p className="text-[#F5F5F5]/60 mb-10"> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
              I offer unique solutions for your business. Contact me to discuss collaboration and bringing your ideas to life!
              </p>
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232329] text-[#42AAFF] rounded-md flex items-center justify-center"> {/* Изменено: bg-[#27272c] на bg-[#232329], text-accent на text-[#42AAFF] */}
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[#F5F5F5]/60">{item.title}</p> {/* Изменено: text-white/60 на text-[#F5F5F5]/60 */}
                        <h3 className="text-xl text-[#F5F5F5]">{item.description}</h3> {/* Изменено: добавлен text-[#F5F5F5] */}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;