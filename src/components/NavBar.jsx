import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center px-11 py-3 text-2xl bg-white shadow-md'>
      <h1 className='flex justify-center items-center'>
        <img src="/logo.png" alt="logo" className='h-11' /> IET CONNECT
      </h1>
      <div className='md:hidden' onClick={toggleMenu}>
        <button className='text-zinc-700 hover:text-red-500 focus:outline-none'>
          {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      <div className={`md:flex gap-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}>
        <ul className='flex flex-col md:flex-row gap-4 p-4 mx-10 md:mx-0 md:p-0'>
          <li className='text-zinc-700 hover:text-red-400 cursor-pointer'><a href='/'>Home</a></li>
          <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='#about'>About</a></li>
          <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='#contribute'>Contribute</a></li>
          <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='https://drive.google.com/file/d/1o0a3nyKOScx712ibTfkdqwkdhrbsJ9_B/view?usp=sharing' target='_blank'>Download</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;