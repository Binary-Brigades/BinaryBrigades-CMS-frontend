import React, { lazy, useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
   const variants = {
    hidden: { y: "-100%" },
     visible: { y: 0 },
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
});
  return (
    <motion.nav
      animate={hidden ? "hidden" : "visible"}
      variants={variants}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-screen sticky top-0 justify-center items-center flex flex-row "
    >
      <div className="w-[90%]   max-w-[780px] flex flex-row justify-between bg-blue-200 py-5 px-4 rounded-br-xl md:rounded-br-2xl md:rounded-bl-2xl rounded-bl-xl">
        <div className="md:text-2xl text-xl font-semibold lg:text-3xl text-blue-500">
          Binary-Brigades CMS
        </div>
        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center ">
          <p className="hidden md:block text-lg font-semibold text-gray-500">
            Hello Maich
          </p>
          <IoMenu className="lg:text-3xl font-bold md:text-2xl text-xl hover:cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Header