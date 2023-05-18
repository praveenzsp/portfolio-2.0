import React from 'react'
import Image from 'next/image'
import { motion, useScroll,useTransform } from 'framer-motion'
import SpecialText from './SpecialText'
import { Tooltip } from '@nextui-org/react'

function Hero() {
  const {scrollY}=useScroll()
  const y=useTransform(scrollY,[0,900],['0%','50%'])
  return (
    <div id='about'>
      {/* <motion.div className='w-10 h-10 bg-red-500 z-10 relative' drag={true}> */}
        {/* <motion.img src='/astro.png' width={100} height={100} className='z-10 relative' alt='' drag={true} dragConstraints={{left:0}}/> */}
      {/* </motion.div> */}
    <motion.video src='/ceiling.mp4' autoPlay loop muted className='absolute w-full object-cover h-full' style={{y}}/>
    <div className='lg:flex lg:justify-around w-full lg:py-16 lg:items-center lg:flex-row flex-col-reverse relative'>
        <motion.div className='md:px-10'
          initial={{opacity:0,x:'-50vw'}}
          animate={{opacity:1,x:0}}
          transition={{type:'spring',duration:'1.5',bounce:0.5}}
        >
            <SpecialText spText='Hey,'/>
            <SpecialText spText="I'm Praveen"/>
            <p className='text-white font-medium text-[15px] tracking-wide text-center lg:text-start pb-10 lg:pb-0 px-2 lg:px-0'>
                Awesome <span className='decoration-[1px] underline underline-offset-2 decoration-primary'>MERN stack Developer</span> in the making - headed<br/> out (exictedly) on the road to mastery.
            </p>
        </motion.div>
        <motion.div className='text-center md:ml-28'
          initial={{opacity:0,x:'50vw'}}
          animate={{opacity:1,x:0}}
          transition={{type:'spring',duration:'1.5',bounce:0.5}}
        >
            <Image src='/Hero2.svg' width={600} height={600} alt='developer'/>
        </motion.div>
    </div>
    </div>
  )
}

export default Hero