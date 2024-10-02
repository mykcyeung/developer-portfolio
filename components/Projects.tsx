import React from 'react'
import ProjectCard from './ProjectCard'
import WebCard from './WebCard'



const Projects = () => {
  return (
    <div className='h-auto flex flex-col justify-start items-start bg-gray-100' id='projects'>
      <div className="bg-[#481f7e] w-screen h-40 flex justify-center items-center text-[#d4d1e9] text-4xl md:text-5xl font-bold pr-16">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center w-full my-8 gap-16 pr-12 ">
        {/* <ProjectCard
          img='/interior-portfolio.png'
          title="Interior Portfolio"
          url='https://jay-interior-portfolio.vercel.app/'
          description="lorem sdjkfns, f sldfn sdfjsb jfs n,sdbf, df,jsbdfjd,nf sdn,f nsd f,d sfsjdbf s,dnf"
        /> */}

{/* <ProjectCard
          img='/photobooth.png'
          title="PhotoBooth"
          url='https://jay-photobooth.vercel.app/'
          description="Excited to share my very first website, this project is just for practice, but hey, everything has its own start!"
        /> */}
        <div className="w-[75vw] lg:w-[60vw] lg:h-[75vh] h-[80vh]">
        <WebCard
          url="https://practice-portfolio-seven.vercel.app/"
            title='Practice Developer Portfolio'
            desc="After completing the course on Udemy, I shadowing online tutorials to build this website, which not only deepened my Next.js skills but also taught me how to create more interactive components, taking my abilities to the next level."
        />
        </div>
        <div className="w-[70vw] lg:w-[60vw] lg:h-[75vh] h-[65vh]">
        <WebCard
          url="https://jay-interior-portfolio.vercel.app/"
            title='Interior Design Portfolio'
            desc="My past 10 years of experience in interior design include both residential and commercial projects."
        />
        </div>
        <div className="w-[70vw] lg:w-[60vw] lg:h-[75vh] h-[65vh]">
        <WebCard
          url="https://jay-photobooth.vercel.app/"
            title='PhotoBooth'
            desc="Excited to share my very first website, this project is just for practice, but hey, everything has its own start!"
        />
        </div>
        
        
        <div className="font-black ">and more to come</div>
      </div>
      
    </div>
  )
}

export default Projects