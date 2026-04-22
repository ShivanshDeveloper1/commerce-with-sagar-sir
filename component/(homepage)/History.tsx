"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CheckCircle2, Star, Users2 } from 'lucide-react'

const AboutVisionary = () => {
  const stats = [
    { label: "Experience", value: "10+", icon: <Star size={16} className="text-emerald-400" /> },
    { label: "Scholars", value: "3000+", icon: <Users2 size={16} className="text-emerald-400" /> },
    { label: "Success Rate", value: "99%", icon: <CheckCircle2 size={16} className="text-emerald-400" /> },
  ]

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 bg-[#020617]">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/5 -skew-x-12 transform origin-top" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* 1. CONTENT AREA (Left) */}
        <div className="order-2 lg:order-1 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-emerald-500"></div>
              <span className="text-emerald-500 font-black tracking-[0.3em] uppercase text-xs">
                The Architect of Success
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Sagar <br />
              <span className="text-emerald-500 italic">Sir.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Quote decoration */}
            <span className="absolute -top-8 -left-4 text-emerald-500/20 text-8xl font-serif">“</span>
            <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-medium pl-6 border-l border-emerald-500/20">
              A <span className="text-white font-bold">C.A Finalist</span> with over a decade of teaching mastery. 
              Sagar Sir has redefined Accountancy education in Saharanpur, 
              turning complex numbers into career-defining milestones for thousands of students.
            </p>
          </div>

          {/* 2. STATS (Minimalist Layout) */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon}
                  <span className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest pl-6">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link href={'/contact'} 
                  className="inline-block bg-white text-slate-950 px-12 py-5 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all shadow-xl hover:shadow-emerald-500/20">
              JOIN THE ACADEMY
            </Link>
          </div>
        </div>

        {/* 3. IMAGE SECTION (Right) */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            
            {/* Background geometric shapes */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-emerald-500/10 rounded-[3rem] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10" />

            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
              <Image
                src='/siruse.png' 
                alt="Expert Faculty"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
              
              {/* Verified Badge */}
              <div className="absolute bottom-8 left-8 bg-emerald-500 text-slate-900 px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl">
                 <CheckCircle2 size={20} />
                 <span className="font-black text-xs uppercase tracking-tighter">Verified Expert</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutVisionary;