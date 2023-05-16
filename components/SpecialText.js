import React from 'react'
import { motion } from 'framer-motion'

function SpecialText({spText}) {
  return (
    <div className='text-white font-extrabold lg:text-[80px] font-pop tracking-wide text-[50px] text-center lg:text-start py-1 lg:py-0 leading-tight lg:leading-normal'>
        <div className='flex lg:gap-2 justify-center lg:justify-start gap-1'>
            {
                spText.split('').map((letter,index)=>{
                    return (
                        <motion.p whileHover={{scale:1.4,rotateZ:[0,50,50,0]}} transition={{type:'spring',bounce:0.5}} className='lg:text-[80px] text-[50px] lg:text-start text-center font-extrabold' key={index} >{letter}</motion.p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SpecialText