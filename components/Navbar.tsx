import Link from 'next/link'
import { socialMedia } from '@/constants'
import Image from 'next/image'
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {

  return (
    <nav className='bg-yellow-500 w-14 h-screen fixed right-0 '>
      <div className="my-20 flex flex-col justify-between items-center gap-20 font-light">
      <Link href="#aboutme" className="text-white rotate-90 mb-4 text-2xl hover:text-red-700 hover:scale-105 ease-in-out duration-200">About</Link>
        <Link href="#projects" className="text-white rotate-90 mb-6 text-2xl hover:text-[#481f7e]  hover:scale-105 ease-in-out duration-200">Projects</Link>
        <Link href="#contact" className="text-white rotate-90 mb-6 text-2xl hover:text-orange-600 hover:scale-105 ease-in-out duration-200">Contact</Link>
      </div>
      <div className=" flex flex-col justify-center items-center  gap-8 py-6">
      <Link href="https://wa.me/447826182904" target="_blank">
             <IoLogoWhatsapp style={{height: 32, width:32, color: "white"}} />
        </Link>
      {socialMedia.map(item => (
          <Link href={item.url} key={item.media} target="_blank">
            <Image
              src={item.img}
              alt={item.media}
              width={30}
              height={30}
            />
          </Link>
      ))}
       
      </div>
    </nav>
  )
}

export default Navbar