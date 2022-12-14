import React from 'react'
import MyImage from '../assets/myImage.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl text-white sm:text-7xl font-bold'>I am a Computer Science Student</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    PLACEHOLDER FOR WHATEVER WILL GO HERE IN THE FUTURE.
                </p>

                <div className='flex md:block text-center justify-center items-center'>
                    <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'></MdOutlineKeyboardArrowRight>
                        </span>
                    </Link>
                </div>
            </div>

            <div className='sm:w-2/3'>
                <img src={MyImage} alt='broken link' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home