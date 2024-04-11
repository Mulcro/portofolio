import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import SectionWrapper from './hoc/SectionWrapper'
import {webb} from '../assets'
import {fadeIn, slideIn, textVariant} from '../utils/motion'
import {projects} from '../constants'
import Tilt from 'react-parallax-tilt'

const ProjectCard = ({project,index}) => {
  return (
    <motion.div>
      <Tilt 
        className="w-[340px] bg-gradient-to-b from-[#01B3CC] to-indigo-700 via-50% p-[3px] rounded-[20px] shadow-card"
        options={{
          max:45,
          scale:1,
          speed:450
        }}
      >
        <div className=" relative bg-tertiary rounded-2xl p-5 min-w-[320px] flex flex-wrap items-center flex-col">
          <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl'/>

          <div className="absolute top-0  flex jusifty-end m-3 card-img_hover">    
            {/* <div 
              onClick={() => window.open(project.source_code_link,"_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1'  
            >
              <img src={github} alt="link to github reop" className='w-1/2 h-1/2 object-contain'/>
            </div> */}
            {/**For Live Site**/}
            <div 
              onClick={() => window.open(project.source_code_link,"_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  mx-1'  
            >
              <img src={webb} alt="link to website" className='w-2/3 h-2/3 object-contain'/>
            </div>
          </div>        

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
          </div>        
          
          <div className='mt-5 flex flex-wrap gap-2'>
            {project.tags.map((tag,index) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects bellow are some of the projects I have worked on. Some of them are personal projects, while others are projects I have worked on with a team. I have experience working with a variety of technologies, including React, Node.js, Express, MongoDB, and more. I am always looking for new projects to work on, so if you have a project you would like to work on, feel free to reach out to me.

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap items-center gap-6">
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")