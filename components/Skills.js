import React from 'react'
import { motion } from 'framer-motion'
function Skills() {
    const wave={
        initial:{
            opacity:0,
            y:'30vh'
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                staggerChildren:0.3,
            }
        }
    }
    const item={
        initial:{opacity:0,y:'20vh'},
        animate:{opacity:1,y:0,transition:{type:'spring',bounce:0.3,duration:1.5}}
    }
    const item1={
        initial:{opacity:0,y:'20vh'},
        animate:{opacity:1,y:0,transition:{type:'spring',bounce:0.3,duration:1.5}}
    }

  return (
    <div className='relative my-16 lg:my-0' id='skills'>
        <h1 className='lg:text-[50px] text-[30px] font-bold text-center tracking-wide'>
            Things I'm <span className='text-primary'>good</span> at
        </h1>
        <div className='flex justify-center items-center lg:pt-32 lg:pb-52 flex-col lg:flex-row'>
            <div>
                <h1 className='lg:text-[40px] font-semibold tracking-wide lg:w-2/3 w-full px-6 lg:px-0 py-6 lg:py-0'>Being a passionate <span className='text-primary lg:text-[40px] text-[20px] font-special'>Full stack developer</span>, <br/>I bring the following skills to the table</h1>
            </div>
            <motion.div className='flex justify-around lg:gap-16 gap-6 font-semibold'
                variants={wave}
                initial='initial'
                whileInView='animate'
                viewport={{once:true,amount:0.9}}
                transition={{type:'spring',duration:'1.5',bounce:0.3}}
            >
                <motion.ol>
                    <motion.li className='hover:text-primary' variants={item}>React JS</motion.li>
                    <motion.li className='hover:text-primary' variants={item}>Next JS</motion.li>
                    <motion.li className='hover:text-primary' variants={item}>MongoDB</motion.li>
                    <motion.li className='hover:text-primary' variants={item}>Express JS</motion.li>
                </motion.ol>
                <motion.ol>
                    <li className='hover:text-primary' variants={item1}>Node Js</li>
                    <li className='hover:text-primary' variants={item1}>Figma</li>
                    <li className='hover:text-primary' variants={item1}>Framer-Motion</li>
                    <li className='hover:text-primary' variants={item1}>Tailwind CSS</li>
                </motion.ol>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Skills