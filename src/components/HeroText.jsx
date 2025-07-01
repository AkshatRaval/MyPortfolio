import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'


const HeroText = () => {

    const words = ["Scalable", "AI-Integrated", "Visually Stunning", "Fast-Loading", "Adaptive", "Secure"]
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <h1 className='text-4xl font-medium fadein-animation-delay-1'>Hi, I'm Akshat Raval</h1>
                <div className='flex flex-col items-start'>
                    <p className='text-5xl font-medium text-neutral-300 fadein-animation-delay-2'>
                        A Web Developer <br />Dedicated to Crafting
                    </p>
                    <div className='text-7xl font-black text-[#00ffff] fadein-animation-delay-3'><FlipWords words={words} /></div>
                    <p className='text-4xl font-medium text-neutral-300 fadein-animation-delay-4'>
                        Web Solutions
                    </p>
                </div>
            </div>


            {/* Mobile View */}

            <div className='flex flex-col space-y-6 md:hidden mt-20'>
                <h1 className='text-3xl font-medium fadein-animation-delay-1'>Hi, I'm Akshat Raval</h1>
                <p className='text-4xl font-medium text-neutral-300 m-0 fadein-animation-delay-2'>
                    A Web Developer <br />Dedicated to Crafting
                </p>
                <div className='text-[40px] font-black text-[#fff] m-2 fadein-animation-delay-3'><FlipWords words={words} /></div>
                <p className='text-3xl font-medium text-neutral-300 fadein-animation-delay-4'>
                    Web Solutions
                </p>
            </div>
        </div>
    )
}

export default HeroText