import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function Projects() {
    const wave={
        initial:{
            opacity:0,
            x:'-20vh'
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                staggerChildren:0.5,
            }
        }
    }
    const item={
        initial:{opacity:0,x:'-20vh'},
        animate:{opacity:1,x:0,transition:{type:'spring',bounce:0.3,duration:1.5}}
    }
    const router=useRouter()
  return (
    <div className='flex flex-col justify-center items-center relative' id='projects'>
        <h1 className='text-[30px] lg:text-[40px] font-extrabold text-center tracking-wide lg:mb-16 mb-6'>
                <span className='text-primary'>My</span> Projects
        </h1>

        <motion.div className='flex lg:flex-row flex-col justify-center items-center lg:gap-28 gap-10 mx-3 lg:mx-0'
            variants={wave}
            initial='initial'
            whileInView='animate'
            viewport={{once:true,amount:0.8}}        
        >

            <motion.div variants={item} id='project-card' className='w-full md:w-2/4 lg:w-1/4 h-auto rounded-[20px] flex flex-col bg-gradient-to-br from-[#313131] to-[#000000] border-[1px] border-[#535353]'>
                <div className='px-5 py-5'>
                    <Image src='/fitme.png' width={500} height={300} className='rounded-[20px]' alt=''/>
                </div>
                
                <div className='px-5'>
                    <h1 className='font-bold text-[20px] py-3'>FITME</h1>
                    <p className='text-[15px] py-1 pb-6'>A web app that delivers smart fitness experience for everyone. Follow your own fitness journey with training programs including cardio & crossfit, strength training, yoga & stretching.</p>
                </div>

                <div className='px-5 pb-5 flex justify-start gap-10'>
                    <button className='bg-gradient-to-r from-primary to-secondary text-gray-900 px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://github.com/praveenzsp/FitMe')}>Github</button>
                    <button className='border-[1px] border-primary text-primary px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://fit-me-sigma.vercel.app/')}>Live</button>
                </div>
            </motion.div>


            <motion.div variants={item} id='project-card' className='w-full md:w-2/4 lg:w-1/4 h-auto rounded-[20px] flex flex-col bg-gradient-to-br from-[#313131] to-[#000000] border-[1px] border-[#535353]'>
                <div className='px-5 py-5'>
                    <Image src='/kryptocloud.png' width={500} height={300} className='rounded-[20px]' alt=''/>
                </div>
                
                <div className='px-5'>
                    <h1 className='font-bold text-[20px] py-3'>KRYPTOCLOUD</h1>
                    <p className='text-[15px] py-1 pb-6'>Designed using Figma & Developed using Next.js, tailwind CSS, Axios. An interactive platform to Discover, Collect & Mint NFTs and evaluate the prices of cryptocurrencies</p>
                </div>

                <div className='px-5 pb-5 flex justify-start gap-10'>
                    <button className='bg-gradient-to-r from-primary to-secondary text-gray-900 px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://github.com/praveenzsp/kryptocloud')}>Github</button>
                    <button className='border-[1px] border-primary text-primary px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://kryptocloud.vercel.app/')}>Live</button>
                </div>
            </motion.div>


            <motion.div variants={item} id='project-card' className='w-full md:w-2/4 lg:w-1/4 h-auto rounded-[20px] flex flex-col bg-gradient-to-br from-[#313131] to-[#000000] border-[1px] border-[#535353]'>
                <div className='px-5 py-5'>
                    <Image src='/dsa-tracker.png' width={500} height={300} className='rounded-[20px]' alt=''/>
                </div>
                
                <div className='px-5'>
                    <h1 className='font-bold text-[20px] py-3'>DSA-TRACKER</h1>
                    <p className='text-[15px] py-1 pb-6'>A web application which helps in learning Data structures and algorithms in an interactive way by providing all the required learning resources. Built using MERN stack.</p>
                </div>

                <div className='px-5 pb-5 flex justify-start gap-10'>
                    <button className='bg-gradient-to-r from-primary to-secondary text-gray-900 px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://github.com/praveenzsp/DSA-eTracker')}>Github</button>
                    <button className='border-[1px] border-primary text-primary px-5 py-2 rounded-[10px]' onClick={e=>router.push('https://dsa-tracker.cyclic.app/')}>Live</button>
                </div>
            </motion.div>
        </motion.div>

        <div className='my-16'>
            <button className='border-[1px] border-primary text-primary rounded-[20px] px-4 py-2' onClick={e=>router.push('https://github.com/praveenzsp')}>See more</button>
        </div>

    </div>
  )
}

export default Projects