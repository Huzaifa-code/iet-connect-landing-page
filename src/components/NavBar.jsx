import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-11 py-3 text-2xl'>
        <h1 className='flex justify-center items-center'> <img src="/logo.png" alt="logo" className='h-11' /> IET CONNECT</h1>
        <div>
            <ul className='flex gap-4'>
                <li className='text-zinc-700 hover:text-red-400 cursor-pointer'><a href='/'>Home</a></li>
                <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='#about'>About</a></li>
                <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='#contribute'>Contribute</a></li>
                <li className='text-zinc-700 hover:text-red-500 cursor-pointer'><a href='/'>Download</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar