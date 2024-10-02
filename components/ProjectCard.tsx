import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ProjectCradProps {
  img: string;
  title: string;
  description?: string;
  url: string;
}

const ProjectCard = ({img, title, description, url}: ProjectCradProps) => {
  return (
    <div className="group">
    <div className='w-[60vw] h-auto flex flex-col justify-center items-center bg-white  duration-500 p-6 group-hover:bg-black group-hover:opacity-80 rounded-sm hover:scale-105'>
      
      <Link href={url} target='_blank' className=''>
      <Image
        src={img}
        alt='portfolio'
        width={1888}
          height={770}
          className='object-contain '
        />
        </Link>
      <div className="flex flex-col justify-center items-center my-6 gap-3 group-hover:text-[#d4d1e9]">
        <div className="font-bold text-2xl md:text-3xl mt-4">{title}</div>
        <div className="text-xs md:text-md font-extralight text-center">{description}</div>
      </div>
      </div>
      </div>
  )
}

export default ProjectCard