'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { initialize } from "next/dist/server/lib/render-server";

const textVariant = {
  hidden: {
    opacity: 0,
    y: 40
  },
  texthidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0
  },
}

const Hero = () => {
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 200, 400], [1, 0.6, 0.1])
  return (
    <motion.div
      style={{opacity: textScale}}
      className="h-screen pl-4  
       flex justify-end items-start flex-col text-blue-50 pb-28 "
      id='/'>
      
      {/* <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        className="flex flex-col line-clamp-2 justify-center items-start text-7xl md:text-7xl lg:text-8xl  pt-96  text-blue-50 font-bold "
      >
        Hello There
      </motion.div>
      <motion.p
        variants={textVariant}
        initial="texthidden"
        animate="visible"
        transition={{ duration: 4 }}
        
        className="sm:w-[500px] w-[350px] text-blue-100"
      >
        this is Jay's Portfolio, a Developer based in London. 
      </motion.p> */}

      <FlipText
        title="Hello There"
      />
      <p className="max-w-[75vw] font-extralight md:text-lg">it&apos;s me, Jay Yeung, a new developer based in <span className="font-black">London</span>.</p>
      </motion.div>
  )
}

const DURATION = 0.8;
const STAGGER = 0.08;

const FlipText = ({ title, text, href }: { title: string; href?: string; text?:string }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="hovered"
      className="relative block overflow-hidden whitespace-nowrap ">
      <div className="inline-block font-black text-6xl md:text-9xl">
        {title.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: {y: "-100%"}
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            key={index}
          className="inline-block "
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 font-black text-6xl md:text-9xl">
        {title.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: {y: 0}
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            key={index}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="">{text}</div>
    </motion.div>
  )
}

export default Hero