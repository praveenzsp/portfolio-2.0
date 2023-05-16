import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Work() {
  return (
    <div className='relative' id='work'>
        <h1 className='text-[30px] lg:text-[40px] font-extrabold text-center tracking-wide lg:my-16 my-6'>
                <span className='text-primary'>My</span> Experience
        </h1>

        <div className='flex justify-center lg:gap-1 items-center flex-col lg:flex-row'>

            <Image src='/My project.png' width={700} height={1000} alt=''/>

            <motion.div id='exp-card' className='lg:w-1/4 bg-gradient-to-br from-[#313131] to-[#000000] border-[1px] border-[#535353] rounded-[20px] lg:max-h-[300px] mx-5'
                whileHover={{scale:1.1,rotateZ:[0,-5,-5,0]}}
                transition={{type:'spring',bounce:0.5}}
            >

                <div className='flex gap-6 m-5 border-b-[1px] border-gray-600'>
                    <Image src='/accenture.jpg' width={50} height={50} className='rounded-[10px] mb-3' alt=''/>
                    <div className='mb-3'>
                        <h1 className='font-bold text-[20px] tracking-wide'>Accenture</h1>
                        <h4 className='text-[15px] text-gray-400 tracking-wide'>October 2022 - present</h4>
                    </div>
                </div>
                <div className='m-5'>
                    <p className='text-gray-400 tracking-wide'>I am currently working as a React developer and my daily tasks include creating stateful components while maintaining clean user interfaces.</p>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Work