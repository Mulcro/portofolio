import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

import {styles} from '../style'
import {EarthCanvas} from './canvas'
import SectionWrapper from './hoc/SectionWrapper';
import {slideIn} from '../utils/motion'
import {contacts} from '../constants'
import {SphereCanvas} from './canvas'

const Contact = () => {
  const formRef = useRef();

  const handleRedirect = (url) => {
    window.open(url,'_blank')
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        varients={slideIn("left","tween",0.2,1)}
        className='xl:flex-1 flex[0.5] p-10'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>

        <div className='grid grid-cols-2 ml-[-8rem] mt-10'>
          {contacts.map((contact,index) => (
            <div className="w-40 h-28 hover:cursor-pointer mx-20 flex flex-col justify-center items-center">
              <p className={`[${contact.color}]-text-gradient tracking-wide font-bold`}>{contact.title}</p>
              <SphereCanvas
                handleRedirect={() => {
                  if(!contact.isEmail){
                    window.open(contact.value,'_black')
                  }
                  else{
                    window.location.href = `mailto:${contact.value}`
                  }
                }} 
                key={index} 
                icon={contact.icon} 
                color={contact.color}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        varients={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")