import React from 'react'

function Footer() {
  return (
    <div className='relative bg-gray-950'>
    <div className='w-full flex lg:justify-between flex-col items-center lg:flex-row'>
        <div className='lg:px-52 lg:py-10 text-center py-10'>
          <h1 className='lg:text-[40px] font-bold tracking-wide text-[25px]'>Let's grab a boba </h1>
          <p className='tracking-wide text-[12px] lg:text-[15px] text-start'>Shoot me an email at <span className='text-primary text-[12px]'>psai6645@gmail.com</span></p>
        </div>
        <div className='lg:pr-52 lg:p-10 pb-6'>
          <ul>
            <li className='hover:text-primary'><a href='#about'>About</a></li>
            <li className='hover:text-primary'><a href='#skills'>Skills</a></li>
            <li className='hover:text-primary'><a href='#projects'>Projects</a></li>
            <li className='hover:text-primary'><a href='#work'>Experience</a></li>
            <li className='hover:text-primary'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
    </div>
    <p className='tracking-wide lg:text-[15px] text-center text-primary pb-3 text-[10px]'>Designed and Developed by Sai Praveen</p>
    </div>
  )
}

export default Footer