import React,{useRef,useEffect} from 'react';
import {motion} from 'framer-motion';
import {styles} from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gsp-5`}>
          <div className="flex flex-col justify-center items-center mt-5 me-6">
              <div className='w-5 h-5 rounded-full bg-[#01B3CC]'/>
              <div className="w-1 sm:h-80 h-60 bg-gradient-to-b from-[#01B3CC] from-20% via-indigo-500 via-50%"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-whtie`}>Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#01B3CC] from-20% to-indigo-500 via-50%"'>Mulero Alamou</span></h1>
            <p className={`${styles.heroSubText}`}>
              I'm a fullstack developer that loves to <br className="sm:block hidden"/> build things for the web!
            </p>
          </div>
        </div>

      <ComputersCanvas/>
      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary items-start p-2">
            <motion.div 
              animate={{y: [0, 24, 0]}}
              transition={{repeat: Infinity, duration: 2,repeatType: 'loop'}}
              className="w-3 h-3 bg-secondary rounded-full z-30"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero