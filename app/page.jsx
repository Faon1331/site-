import { Button } from "@/components/ui/button"; 
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full bg-[#0B0C10] mt-[50px]"> {/* поднимаем секцию выше с отрицательным отступом */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center min-h-[75vh] py-4"> {/* уменьшили min-h и py */}
          {/* text */}
          <div className="text-center max-w-[900px] mx-auto"> {/* еще выше подняли блок с текстом */}
            <span className="text-2xl md:text-3xl text-[#F5F5F5] mb-4 block">
              3D Artist & Level Designer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#F5F5F5]">
              Hello I'm <br /> 
              <span className="text-[#42AAFF]">Konstantin Dimov</span>
            </h1>
            <p className="text-[#F5F5F5]/80 mb-8 text-xl md:text-2xl leading-relaxed max-w-[700px] mx-auto"> {/* уменьшили mb */}
              I specialize in creating impressive 3D art and level design, as well as 3D promotional videos for products. I am proficient in multiple technologies for 3D modeling and level design, which allows me to create unique and captivating projects. 
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-6"> {/* уменьшили gap */}
              <Button 
                variant="outline" 
                className="uppercase flex items-center gap-3 text-[#42AAFF] border-[#42AAFF] hover:bg-[#42AAFF] hover:text-[#0B0C10] transition-all duration-300 text-xl py-6 px-8"
              >
                <span>Download CV</span>
                <FiDownload className="text-2xl" />
              </Button> 
              <div>
                <Social 
                  containerStyles="flex gap-8" 
                  iconStyles="w-12 h-12 border-2 border-[#42AAFF] rounded-full flex justify-center items-center text-[#42AAFF] text-xl hover:bg-[#42AAFF] hover:text-[#0B0C10] hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats section */}
      <div className="bg-[#0B0C10]/90 mt-[30px]"> {/* подняли секцию Stats выше */}
        <Stats />
      </div>
    </section>
  )
}

export default Home;
