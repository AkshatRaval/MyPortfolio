import React, { useState } from 'react'
import SkillCard from '../components/SkillCard'


const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, catagory: "frontend" },
  { name: "JavaScript", level: 90, catagory: "frontend" },
  { name: "React", level: 85, catagory: "frontend" },
  { name: "Tailwind CSS", level: 92, catagory: "frontend" },
  { name: "Android", level: 76, catagory: "frontend" },
  //Backend
  { name: "Node.js", level: 73, catagory: "backend" },
  { name: "Express", level: 83, catagory: "backend" },
  { name: "Java", level: 78, catagory: "backend" },
  { name: "Python", level: 75, catagory: "backend" },
  { name: "PostgreSQL", level: 80, catagory: "backend" },
  //Tools
  { name: "VS Code", level: 98, catagory: "tools" },
  { name: "Git/Github", level: 90, catagory: "tools" },
  { name: "Figma", level: 80, catagory: "tools" },
  { name: "Adobe XD", level: 75, catagory: "tools" },
  { name: "Adobe Photoshop", level: 78, catagory: "tools" },
]

const catagories = ["all", "frontend", "backend", "tools"]

const Skills = () => {
  const [activeCatogory, setAvtiveCatagory] = useState("all")


  return (
    <section id='skills' className='c-space section-spacing'>
      <h2 className='text-heading text-center'>My <span className='text-[#00ffff]'>Skills</span></h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className='flex flex-wrap justify-center gap-4 mt-10'>
        {catagories.map((catagory, key) => (
          <button
            key={key}
            className={
              `capitalize cursor-pointer text-[18px] border border-purple-500/50 rounded-full px-7 py-1 transition-colors duration-200 ` +
              (activeCatogory === catagory
                ? 'bg-purple-500 text-white'
                : 'bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white')
            }
            onClick={() => setAvtiveCatagory(catagory)}
          >
            {catagory}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {skills
          .filter(skill => activeCatogory === "all" || skill.catagory === activeCatogory)
          .map((skill, idx) => (
            <SkillCard key={skill.name + idx} skillName={skill.name} percent={skill.level} />
          ))}
      </div>
    </section>
  )
}

export default Skills