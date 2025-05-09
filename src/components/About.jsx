import React from 'react'
import ietdavv from '../assets/iet davv photo.png'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div id='about' className='h-screen flex md:flex-row flex-col justify-center items-center gap-24 px-18 mt-24'>
        <motion.img 
          src={ietdavv} 
          alt="ietdavv" 
          className='h-[400px]' 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        />
        <div className='text-zinc-600'>
            <h1 className='text-5xl mb-4 text-black'>Why IET CONNECT ?</h1>
            <p className='text-2xl' >IET CONNECT is an android app designed to simplify and enhance the daily academic life of students at IET DAVV. </p>
            <p className='text-2xl' >Tired of using multiple platforms to access college services? </p>
            <p className='text-2xl' >We were too. That's why we built one app that does it all.</p>
        </div>
    </div>
  )
}

export default About