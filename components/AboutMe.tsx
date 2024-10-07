'use client'

import { useState } from "react"
import { AnimatedTooltip } from "./ui/AnimatedTooltips"
import { stacks } from "@/constants" 
import { motion } from "framer-motion"
import Link from "next/link"

const AboutMe = () => {
  const [textOpen, setTextOpen] = useState(false)

  const handleTextOpen = () => {
    setTextOpen(prev => !prev)
  }
  return (
    <div className='' id="aboutme">
      {!textOpen &&
        <div className="flex-col h-screen w-full bg-red-700 flex justify-center items-center pr-12">
          <button
            onClick={handleTextOpen}
            className="font-extrabold text-yellow-50 lg:text-[250px] sm:text[180px] text-[120px]">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{duration:0.2}}
              className="flex flex-col leading-tight">
            <div className="">About Me</div>
              <p className="text-red-500 text-sm lg:text-[18px] font-light">and flip me</p>
            </motion.div>
          </button>
          {/* <motion.button
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ duration: 2 }}
            onClick={handleTextOpen}
            className="text-red-500 text-sm lg:text-[18px] font-light">and flip me</motion.button> */}
        </div>}
      


      {textOpen && (
        <div className="h-auto py-12 lg:h-screen w-full flex justify-center items-center flex-col bg-yellow-50">
          <motion.div
            initial={{ scale: 1.01 }}
            whileInView={{ scale: 1 }}
            transition={{duration:0.2}}
            className="flex flex-col justify-center items-center pr-14">
            
            
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">
              {/* EXPERIENCE */}
          <button
            className="w-[350px] text-red-700 sm:w-[400px] md:w-[450px] pl-6 font-bold text-start text-lg lg:w-[320px] hover:scale-110 duration-500 ease-in-out"
            onClick={handleTextOpen}
            >
              <div className="text-3xl md:text-4xl font-black mb-2">My Experience</div>
              <p className="text-sm font-light md:text-md md:font-normal">
              I am an interior designer with 10 years of experience, specializing in both residential and commercial projects. Throughout my career, I’ve not only honed my design and drafting skills but also developed abilities in client relations, project organization, and communication with contractors—surpassing my original expectations. Seeking further growth, I dedicated the past year to studying programming, a completely new field to me, with the hope of integrating my previous experience into my future career.
              </p>
            </button>
            
              {/* JOURNEY */}
          <button
            className="w-[350px] text-red-700 sm:w-[400px] md:w-[450px] pl-6 font-bold text-start text-lg lg:w-[320px] hover:scale-110 duration-500 ease-in-out"
            onClick={handleTextOpen}
            >
              <div className="text-3xl md:text-4xl font-black mb-2">My Journey</div>
              <p className="text-sm font-light md:text-md md:font-normal">
                  I&apos;ve focused on structured learning, using platforms like YouTube and tutorials, and dedicating time to hands-on practice by building my own projects. I also try to approach programming with the same mindset I used in design: breaking down complex problems into smaller, manageable tasks.
                  <br />
                  Now, I've become more proficient in using Next.js and have developed a solid understanding of different programming languages.
              </p>
            </button>

            {/* FUTURE */}
            <button
            className="w-[350px] text-red-700 sm:w-[400px] md:w-[450px] pl-6 font-bold text-start text-lg lg:w-[320px] hover:scale-110 duration-500 ease-in-out"
            onClick={handleTextOpen}
            >
              <div className="text-3xl md:text-4xl font-black mb-2">Now & Future</div>
              <p className="text-sm font-light md:text-md md:font-normal ">
              Even though I have a basic understanding of building websites, there is still much room for improvement. In addition to advancing my software engineering skills, I have developed an interest in other areas such as AWS. During this time, I will not only continue practicing my full-stack development skills but also explore new ones. I believe that continuous learning is the key to personal growth and progress.
              </p>
              </button>
              </div>

            <div className="flex flex-col justify-center items-center gap-6 flexco mt-10">
              <div className="text-2xl md:text-3xl font-black text-red-700">Stacks</div>
              <div className="flex flex-row"><AnimatedTooltip items={stacks} /></div>
            
            </div>

            <Link href="/" download target="_blank" className="font-black bg-red-700 py-2 px-4 rounded-full text-yellow-50 hover:scale-105 duration-200 mt-12">
              Download my CV
            </Link>
            </motion.div>
        </div>
      )}
    </div>
  )
}

export default AboutMe