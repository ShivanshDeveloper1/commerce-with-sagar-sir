"use client";
import Image from 'next/image'
import React from 'react'
import { TrendingUp, Award, Medal, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HomepagePartner = () => {
  const features = [
    {
      icon: <TrendingUp className="text-amber-400" size={20} />,
      title: "Conceptual Clarity",
      desc: "Rank-building logic"
    },
    {
      icon: <Award className="text-amber-400" size={20} />,
      title: "10+ Years Legacy",
      desc: "Proven Excellence"
    },
    {
      icon: <Medal className="text-amber-400" size={20} />,
      title: "C.A Finalist",
      desc: "Expert Faculty"
    }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVars = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "circOut" } }
  }

  const imageVars = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <main className='min-h-screen relative flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 bg-[#020617] overflow-hidden'>
      
      {/* 1. New Dynamic Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]" />
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <motion.section 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl'
      >
        
        {/* LEFT SIDE: The Image Layer (Positioned first on Desktop) */}
        <motion.div variants={imageVars} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto group">
            {/* Geometric Frame Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-amber-500/30 rounded-tl-3xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-indigo-500/30 rounded-br-3xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
              <Image 
                src='https://res.cloudinary.com/dkfe8naf5/image/upload/v1777207859/hosw1avwdfdglidoe22y.jpg' 
                alt='Expert Faculty' 
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 md:-right-12 bottom-12 bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 font-black">
                  99%
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Student Success</p>
                  <p className="text-slate-400 text-xs italic">Annual Average</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content (Positioned second on Desktop) */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 order-1 lg:order-2'>
          <div className="space-y-6">
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-indigo-300 text-xs font-black uppercase tracking-widest">Premium Coaching</span>
            </motion.div>

            <motion.h1 
              variants={itemVars}
              className='font-black text-5xl md:text-7xl text-white leading-[1] tracking-tighter'
            >
              Mastering <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200'>
                Accountancy
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVars}
              className='text-lg md:text-xl font-medium text-slate-400 max-w-xl'
            >
              Transforming complex financial logic into career-defining confidence. Guided by the gold standard of Saharanpur's commerce faculty.
            </motion.p>
          </div>

          {/* New Bento-Style Feature Grid */}
          <motion.div 
            variants={itemVars}
            className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'
          >
            {features.map((item, index) => (
              <div 
                key={index} 
                className='flex flex-col items-center lg:items-start p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:bg-indigo-600/10 transition-colors group'
              >
                <div className="mb-4 p-3 bg-slate-800 rounded-2xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  {item.icon}
                </div>
                <h3 className='text-white font-bold text-sm leading-tight'>{item.title}</h3>
                <p className='text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1'>{item.desc}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVars} className="pt-4">
             <Link href={'/contact'} className="group relative inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl hover:shadow-indigo-500/20 active:scale-95">
                ENROLL NOW 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>

      </motion.section>
    </main>
  )
}

export default HomepagePartner;