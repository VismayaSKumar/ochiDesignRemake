import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full font-['Century_Gothic'] flex  rounded-2xl overflow-hidden whitespace-nowrap text-white font-bold bg-[#004D43] ">
        <motion.h1

            animate={{
                x:"-100%",
            }}
            transition={{
                repeat:Infinity,
                duration: 6,
                ease: 'linear'
            }}
            className='text-[54vh] leading-none tracking-tighter '><span> This is ochi-</span></motion.h1>
        <motion.h1

            animate={{
                x:"-100%",
            }}
            transition={{
                repeat:Infinity,
                duration: 6,
                ease:'linear'
            }}
            className='text-[54vh] leading-none tracking-tighter '><span> This is ochi-</span></motion.h1>
            
    </div>
  )
}

export default Marquee