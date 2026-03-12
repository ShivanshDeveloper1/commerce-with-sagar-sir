"use client"
import React from 'react'
import {motion, scale, stagger} from 'framer-motion'

const container = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren: 0.4, // Time gap between each element (0.2 seconds)

        }
    }
}


const item ={
    hidden:{opacity:0 , y:20,},
    show:{opacity:1 , y:0 , transition:{duration:0.5 , ease:'easeOut'}}
}


// Image container

const imageVariants = {
    hidden: { 
        opacity: 0.1, 
        scale: 0.8, // Start slightly smaller
        y: 50 
    },
    show: {
        opacity: 1,
        scale: 1, // 1 means 100% size
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] // A smooth "Professional" ease
        }
    }
}


export const AnimateContainer = ({children}: { children: React.ReactNode })=> (
   <motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true , amount:0.1}} className="w-full flex flex-col items-center"   >
    {children}
  </motion.div>

)

export const AnimateItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={item}>
    {children}
  </motion.div>
);


export const AnimateImageContainer = ({children}: { children: React.ReactNode })=> (
   <motion.div variants={imageVariants} initial="hidden" whileInView="show" viewport={{once:true , amount:0.3}} className=""   >
    {children}
  </motion.div>

)

// History.tsx

export const sentenceVariants = {
    hidden:{opacity:1},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.1 //speed between words
        }
    }
}

export const wordVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)", scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }
  }
}

export const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
}