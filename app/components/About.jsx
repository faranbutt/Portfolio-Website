'use client'
import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants/index'
import {fadeIn, textVariant} from '../utils/motion';
import Tilt from "react-tilt";
import Image from 'next/image';
const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn('right',"spring",0.5*index,0.45)}
      className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  );
}

export default function About(){
  return (
    <>
    <motion.div variants={textVariant()} className={'mt-20'} >
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a skilled Software Engineer with experience in Typescript,Python,C++,SQL and Java.
      I hold expertise in Frameworks like React,Nodejs(Express),SpringBoot and Django.
      Futher I can work with tools like GraphQL,Docker,Kubernetes,Postman, and many more....
      I am a quick learner and collaborate closely with my clients and emplyoees.My main purpose is to create
      efficient, scalable and userfriendly solutions that solve real-world problems.Let us work togther to bring 
      your ideas to life.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

