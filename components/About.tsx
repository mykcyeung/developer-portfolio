import React from 'react'

const About = () => {
  return (
    <div className='h-screen flex justify-start items-center' id='about'>
      <div className="w-[150px] md:w-1/3 bg-red-700 h-full flex justify-center items-center">
      <div className="-rotate-90 md:rotate-0 text-3xl font-extrabold text-white md:text-5xl">About me</div>
      </div>
      <div className="w-[250px] sm:w-[400px] md:w-[550px] pl-6 font-bold text-lg ">As an experienced interior designer with nearly 10 years of working experience in commercial and residential projects. Throughout my career, I have developed a deep passion for creating functional spaces that enhance the lives of individuals and businesses. Passionate about continuous learning and professional growth, currently expanding skills in programming and new design technologies.</div>
    </div>
  )
}

export default About