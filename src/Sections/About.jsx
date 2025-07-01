import React, { useState } from 'react'
import MiniCard from '../components/MiniCard'
import { Globe } from '../components/Globe';
import { button } from 'motion/react-client';
import { Check, Copy } from 'lucide-react';
import { Frameworks } from '../components/Frameworks';



const CopyButton = () => {



    const [copied, setCopied] = useState(false)
    const email = "akshatraval199@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }

    return (
        <button className="relative flex px-10 py-4 rounded-full text-[17px] uppercase font-medium
    bg-primary text-white border-none font-inherit transition-all duration-200
    shadow-none hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
    active:-translate-y-[1px] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]
    overflow-hidden
    before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-primary
    before:-z-10 before:transition-all before:duration-400
    hover:before:scale-x-[1.4] hover:before:scale-y-[1.6] hover:before:opacity-0" onClick={copyToClipboard}>
            {copied ? <Check className='mr-2' /> : <Copy className='mr-2' />} {copied ? <p>Email Copied</p> : <p>Copy My Email</p>}
        </button>

    )
}
const About = () => {

    const skills = [
        { id: 1, skillName: "Effective Communication", },
        { id: 2, skillName: "Creative Thinking", },
        { id: 3, skillName: "Problem Solving", },
        { id: 4, skillName: "Attention to Detail", },
        { id: 5, skillName: "Adaptability", },
        { id: 6, skillName: "Time Management", },
        { id: 7, skillName: "Team Collaboration", },
        { id: 8, skillName: "Self-Motivation", },
        { id: 9, skillName: "Curiosity", },
        { id: 10, skillName: "Growth Mindset", }
    ];

    return (
        <section id='about' className='c-space section-spacing'>
            <h2 className='text-heading text-center'>About <span className='text-[#00ffff]'>Me</span></h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Akshat Raval</p>
                        <p className='subtext'>I'm a passionate web developer specializing in visually stunning 3D websites. While I may not have professional experience yet, I bring creativity, precision, and a strong grasp of modern web technologies to every project. I'm focused on crafting immersive digital experiences that leave a lasting impression.</p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <img src="assets/.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
                    <div className='z-10'>
                        <p className='headtext'>Soft Skills</p>
                        <div className='flex flex-wrap gap-2 gap-y-5'>
                            {skills.map((skill) => (
                                <MiniCard key={skill.id} skill={skill.skillName} />
                            ))}
                        </div>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className='headtext'>Time Zone</p>
                        <p className='subtext'>
                            From India, available for international remote roles
                        </p>
                    </div>

                    <figure className='absolute left-[30%] top-[10]'>
                        <Globe />
                    </figure>

                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Do you want to start a project together?</p>
                        <CopyButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className='z-10 w-[60%] '>
                        <p className='headtext'>Tech Stack</p>
                        <p className="subtext text-justify">
                            I specialize in using modern programming languages, frameworks, and tools to develop applications that are both robust and scalable. My approach emphasizes clean architecture, performance, and long-term maintainability, ensuring that the solutions I deliver can evolve seamlessly with changing requirements.
                        </p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About