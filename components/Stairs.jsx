import { animate, delay, motion } from "framer-motion"

// variants
const stairAnimation = {
  intial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate
const reverseIndex = (index)=> {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
    {/* render */}
        {[...Array(6)].map((_, index)=> {
        return (  
          <motion.div
            key={index}
            variants={stairAnimation}
            intial="initial" 
            animate="animate"
            exit="exit"
            transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1, 
          }} 
          className="h-full w-full bg-white relative"
        />
        );
      })}
    </>
  );
};

export default Stairs