import { Button } from "@/components/ui/button"; 
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full bg-[#0B0C10]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center min-h-[85vh] py-8">
          {/* text */}
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-xl text-[#F5F5F5] mb-4 block">
              3D Artist & Level Designer
            </span>
            <h1 className="h1 mb-8 text-[#F5F5F5]">
              Hello I'm <br /> 
              <span className="text-[#42AAFF]">Konstantin Dimov</span>
            </h1>
            <p className="text-[#F5F5F5]/80 mb-12 text-lg max-w-[600px] mx-auto">
              I specialize in creating impressive 3D art and level design, as well as 3D promotional videos for products. I am proficient in multiple technologies for 3D modeling and level design, which allows me to create unique and captivating projects. 
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2 text-[#42AAFF] border-[#42AAFF] hover:bg-[#42AAFF] hover:text-[#0B0C10] transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button> 
              <div>
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-[#42AAFF] rounded-full flex justify-center items-center text-[#42AAFF] text-base hover:bg-[#42AAFF] hover:text-[#0B0C10] hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats section */}
      <div className="bg-[#0B0C10]/90">
        <Stats />
      </div>
    </section>
  )
}

export default Home;
