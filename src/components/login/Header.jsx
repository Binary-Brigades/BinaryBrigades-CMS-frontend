import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";

function Header() {
    const scrollYProgress = useScroll();  
    useEffect(() => {
        if (scrollYProgress > prevY) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setPrevY(scrollYProgress);
    }, [scrollYProgress]);
    const [hidden, setHidden] = useState(false);
    const [prevY, setPrevY] = useState(scrollYProgress);


    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -25 },
    };
  return (
      <div className="w-screen justify-center items-center flex flex-row ">
          <motion.div className='top-0 sticky' style={{ scaleX: scrollYProgress }} />
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="w-[90%] max-w-[780px] flex flex-row justify-between bg-blue-200 py-5 px-4 rounded-br-xl md:rounded-br-2xl md:rounded-bl-2xl rounded-bl-xl"
      >
        <div className="md:text-2xl text-xl font-semibold lg:text-3xl text-blue-500">
          Binary-Brigades CMS
        </div>
        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center ">
          <p className="hidden md:block text-lg font-semibold text-gray-500">
            Hello Maich
          </p>
          <IoMenu className="lg:text-3xl font-bold md:text-2xl text-xl hover:cursor-pointer" />
        </div>
      </motion.div>
    </div>
  );
}

export default Header