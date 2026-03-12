"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import resultsData from '@/data/results.json';

const Result = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        
        {/* Header with Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
            The Gold Standard of Saharanpur
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-blue-900 leading-none tracking-tighter">
            Hall of <span className="text-blue-600">Fame</span>
          </h2>
        </motion.div>

        {/* The Animated Stack */}
        <div className="flex flex-col space-y-24 md:space-y-40">
          {resultsData.map((item, index) => (
            <ResultCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for individual card logic
const ResultCard = ({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom bouncy ease
        delay: 0.1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full group"
    >
      {/* Dynamic Topper Badge */}
      <motion.div 
        animate={{ 
          y: [0, -12, 0],
          rotate: [6, 8, 6] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut" 
        }}
        className="absolute -top-8 -right-2 md:right-8 z-30 bg-blue-600 text-white font-black px-8 py-3 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] border-4 border-white text-sm md:text-xl uppercase italic tracking-tighter"
      >
        Rank #1
      </motion.div>

      {/* Main Image Wrapper with Hover Lift */}
      <motion.div 
        whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
        }}
        className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-blue-50 group-hover:shadow-blue-900/10 transition-shadow duration-500"
      >
        {/* Glow Effect behind the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <Image
          src={item.image}
          alt="Sagar Sir Commerce Result Saharanpur"
          width={1400}
          height={900}
          className="w-full h-auto object-contain block relative z-10" 
          priority={index < 2}
        />

        {/* Shine Overlay Effect on Hover */}
        <motion.div 
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />
      </motion.div>

      {/* Decorative background element for depth */}
      <div className="absolute -inset-4 bg-blue-50/50 rounded-[5rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-700" />
    </motion.div>
  );
};

export default Result;