import React, { useState } from 'react'
import { Input, Textarea } from "@nextui-org/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


function Contact() {
  const router=useRouter()
  const [name,setName]=useState('')
  const [gmail,setGmail]=useState('')
  const [comments,setComments]=useState('')

  const handleSubmit=(e)=>{
    // console.log('form submitted',name,gmail,comments)
    // console.log(e.target)
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setName('')
          setGmail('')
          setComments('')
      }, (error) => {
          console.log(error.text);
      });
      
  }

  return (
    <div className='relative' id='contact'>
        <h1 className='text-[30px] lg:text-[40px] font-extrabold text-center tracking-wide lg:my-16 my-6'>
                Contact <span className='text-primary'>Me</span> 
        </h1>

        <div className='flex justify-center items-center flex-col-reverse lg:flex-row'>
          <form id='form' className='bg-gradient-to-br from-[#313131] to-[#000000] border-[1px] border-[#535353] lg:w-[450px] w-[300px] flex flex-col justify-center items-center lg:gap-6 gap-3 rounded-[20px] lg:p-6 lg:ml-20 p-3' onSubmit={handleSubmit}>
              <h1 className='text-3xl text-center text-semibold'>Reach out to me</h1>
              <Input  bordered label="Name" placeholder='Enter your name' color='success' className='lg:w-[400px] w-[250px]' value={name} onChange={e=>setName(e.target.value)} name='name'/>
              <Input  bordered label="Gmail" placeholder='Enter your gmail' color='success' className='lg:w-[400px] w-[250px]' value={gmail} onChange={e=>setGmail(e.target.value)} name='gmail'/>
              <Textarea label="Leave a comment" status="default" color='success'  bordered className='lg:w-[400px] w-[250px] mb-4' placeholder='Write something'  value={comments} onChange={e=>setComments(e.target.value)} name='comments'/>
              <Input type='submit' className='border-[1px] border-primary text-primary rounded-[20px] lg:px-4 lg:py-2 px-3 y-2 hover:border-[2px]' value='Submit'/>
          </form>
          <motion.div 
            initial={{x:'-10vw',opacity:0}}
            whileInView={{x:0,rotateY:[0,180],opacity:1}}
            viewport={{once:true,amount:0.8}}
            transition={{type:'spring',duration:1.2}}
          >
            <Image src='/contact.png' width={700} height={700} alt=''/>
          </motion.div> 
        </div>
        <div className='text-center mt-20'>
          <h1 className='lg:text-[40px] text-[30px] tracking-wide font-semibold lg:py-4'>Need a <span className='text-primary'>custom website</span>?</h1>
          <p className='tracking-wide lg:text-[20px] text-[12px]'>Feel free to reach out to me for Freelancing</p>
          <div className='flex justify-center lg:gap-20 gap-10 my-10 lg:pb-10'>
            <Image src='/instagram.png' width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] cursor-pointer' onClick={e=>router.push('https://www.instagram.com/praveen__zsp/')} alt=''/>
            <Image src='/twitter.png' width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] cursor-pointer' onClick={e=>router.push('https://twitter.com/Praveen_Zsp')} alt=''/>
            <Image src='/github.png' width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] cursor-pointer' onClick={e=>router.push('https://github.com/praveenzsp')} alt=''/>
            <Image src='/linkedin.png' width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] cursor-pointer ' onClick={e=>router.push('https://www.linkedin.com/in/znanam-sai-praveen-4127441b3/')} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Contact