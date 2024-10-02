import { socialMedia } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { IoLogoWhatsapp } from "react-icons/io";

const d = new Date()
const year = d.getFullYear()

const Footer = () => {
  return (
    <div className='h-32 bg-black  flex flex-col justify-center items-center pr-12 pb-4 pt-4'>
      <div className="flex flex-row justify-between items-center gap-6 mb-2">
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
        <Link href="https://wa.me/447826182904" target="_blank">
             <IoLogoWhatsapp style={{height: 32, width:32, color: "white"}} />
        </Link>
      </div>
      <div className="font-extralight text-xs text-white">Copyright ©{year} Jay Yeung</div>
    </div>
  )
}

export default Footer