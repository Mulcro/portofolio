import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style';
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import SectionWrapper from './hoc/SectionWrapper'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right",0.8 *index, 0.75)}
        className="w-full bg-gradient-to-b from-[#01B3CC] to-indigo-700 via-50% p-1 rounded-[20px] shadow-card"
        >
        <div 
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-3xl leading-[30px]"
      >
        Hey! I'm Mulero and this website is not only a showcase of my work and skills, but will also eventually be an extention of everything related to me! I have a passion for software engineering and with time I'll also showcase all my other hobies and interests here. Anyways below are some of my main services and interests

        <br />
        <br/>
        <span className="text-transparent hover:text-secondary">ps - I'm also a huge fan of the color indigo, so you'll see a lot of it here!</span>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=> (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")