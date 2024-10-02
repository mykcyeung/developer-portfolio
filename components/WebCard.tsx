import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6'

interface WebCardProps {
  url: string;
  title: string;
  desc?: string;
}

const WebCard = ({url, title, desc}: WebCardProps) => {
  return (
    <div className='bg-white h-full p-2 pb-3 group hover:scale-105 duration-300 hover:bg-black hover:opacity-90 rounded-md hover:text-[#d4d1e9]'>
      <div className="h-[68%] md:h-[75%]">
      <Link href={url}>
      <iframe
        src={url}
        title={title}
        style={{width:"100%", height:"100%"}}
          />
          </Link>
      <div className="flex flex-col gap-2 mt-5 justify-center items-center ">
          <Link href={url} target='_blank' className="font-bold text-xl hover:scale-105 duration-200 lg:text-3xl flex justify-center items-center gap-3">
            {title}
            <FaLocationArrow />
          </Link>
        <div className="text-xs text-center w-[70%]">{desc}</div>
        </div>
        </div>
    </div>
  )
}

export default WebCard