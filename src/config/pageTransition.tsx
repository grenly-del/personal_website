import React, { ReactNode, useEffect, useState,useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import {useLocation} from 'react-router-dom'

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()
  const [key, setKey] = useState('')
  const [active, setActive] = useState(false)
  const view = useRef(null)
  const inView = useInView(view, {once: true})
  useEffect(() => {
    setKey(location.pathname)
    console.log(inView)
    setActive(inView)
  }, [location, inView])
  
  return (
    <>
       {children}
      <motion.div
        ref={view}
        className='w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-gray-800 origin-bottom z-[99999999] text-white'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      
        
      ></motion.div>
      {active && (
      <motion.p 
      className='absolute text-white top-0 bottom-0 left-0 right-0 z-50' 
      initial={{scale: 0}} 
      animate={{scale: 0}}
      exit={{scale: 1}} 
      transition={{
        duration: 0.8
      }}
      >{(key == '/')?'Home' :(key== '/about') ? 'about' : key}</motion.p>
    
    )}
        
      <motion.div 
        
        className='w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-gray-800 origin-top z-[99999999] text-white'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0}}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      ></motion.div>

  
      
    </>
  );
};

export default PageTransition;
