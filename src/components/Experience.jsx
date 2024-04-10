import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../style'
import {experiences} from '../constants'
import SectionWrapper from './hoc/SectionWrapper'
import {textVariant} from '../utils/motion'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid  #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center'>
          <img src={experience.icon} className={ experience.title == "Sales Associate" ?  'w-[80%] object-contain mt-5' : 'w-[80%] object-contain'} />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold '>{experience.title}</h3>
        <p>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index) => (
          <li 
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wider'
          >
              {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have Done so Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")