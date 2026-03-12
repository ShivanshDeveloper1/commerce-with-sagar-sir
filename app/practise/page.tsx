"use client"
import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const page = () => {
    const {scrollYProgress} = useScroll()

 const background =useTransform(
        scrollYProgress,
        [0,1],
        ["#FFFFF", "#00000"]
    )
  return (
    <section className='min-h-screen'>

  
    <motion.div style={{ scaleX:scrollYProgress ,  x:"-50%" , y:"-50%" , background}} className='fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500'>

      
    </motion.div>
      </section>
  )
}

export default page
