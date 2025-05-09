import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from "motion/react";
import device_mock from '../../assets/device_mock.png';
import { FaAndroid } from 'react-icons/fa';

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 2.25]);

  return (
    <div className='min-h-screen flex justify-center items-center bg-[#f9fafb] px-4'>
      <div className='flex flex-col justify-center items-center text-center gap-6'>

        {/* Optional: Earth animation background */}
        {/* <motion.img style={{ scale }} src={earth} alt="earth" className='-z-10 absolute top-0 opacity-20' /> */}

        <h1 className='text-6xl md:text-7xl font-bold text-violet-700 drop-shadow-sm'>
          IET CONNECT
        </h1>

        <p className='text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl'>
          Your all-in-one college companion for IET DAVV.
        </p>

        <motion.h3
          className='text-3xl md:text-4xl max-w-3xl text-zinc-600 font-semibold'
          animate={{ y: [0, -1, 0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
        >
          Stay Connected, Stay Informed.
        </motion.h3>

        <div className='grid md:grid-cols-3 gap-4 mt-4 text-md text-gray-600 font-medium'>
          <span>📚 Access resources instantly</span>
          <span>📅 View schedules & events</span>
          <span>🤖 Get help via smart chatbot</span>
        </div>

        <a
          target='_blank'
          href="https://drive.google.com/file/d/1o0a3nyKOScx712ibTfkdqwkdhrbsJ9_B/view?usp=sharing"
          className='flex items-center gap-2 text-white bg-violet-500 px-6 py-3 text-lg rounded-md shadow-md
            hover:bg-red-400 hover:shadow-lg transition-all duration-300 ease-in-out mt-6'
        >
          <FaAndroid size={22} /> Download App Now
        </a>

        <motion.img
          style={{ scale }}
          src={device_mock}
          alt="App preview"
          className='h-[350px] z-10 mt-6 drop-shadow-lg'
        />
      </div>
    </div>
  );
};

export default Hero;
