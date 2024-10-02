'use client'
import { motion } from "framer-motion"
import Link from "next/link"

const textVariant = {
  initial: { y: 0 },
  hover: {y: 30}
}

const HomePage = () => {

  
  return (
    <motion.div
      variants={textVariant}
      initial="initial"
      whileHover={{y:34}}
      className="">
      <Link href="/" className=" sm:text-[110px] text-[80px] font-extrabold text-black absolute sm:-top-20 -left-2 -top-14" >
        <div className="">
          Jay Yeung
        </div>
        
      </Link>

      </motion.div>
  )
}

export default HomePage