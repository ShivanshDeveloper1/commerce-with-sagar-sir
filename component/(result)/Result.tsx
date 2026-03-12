"use client"
import Image from "next/image"
import React, { useRef } from "react"
import Results from "@/data/results.json"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

interface ResultItem {
  image: string
  name: string
  age: number
  programs: string[]
  duration: string
  achievements: string[]
  cta: string
}

const ResultCard = ({
  item,
  index,
  total,
  progress,
}: {
  item: ResultItem
  index: number
  total: number
  progress: MotionValue<number>
}) => {
  // Scroll timeline slicing
  const segmentStart = index / total
  const segmentEnd = (index + 1) / total

  // Animations
  const y = useTransform(progress, [segmentStart, segmentEnd], ["110%", "0%"])
  const scale = useTransform(progress, [segmentStart, segmentEnd], [0.92, 1])
  const opacity = useTransform(progress, [segmentStart, segmentStart + 0.05], [0, 1])

  return (
    <motion.section
      style={{
        y,
        scale,
        opacity,
        zIndex: index,
        top: index * 32, // Slightly increased offset so stacked edges are more visible
      }}
      className="absolute w-full bg-white shadow-2xl shadow-black/10 border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row gap-10 rounded-3xl"
    >
      {/* Image Container */}
      <div className="relative w-full md:w-[400px] h-[300px] md:h-[450px] flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="rounded-2xl object-cover shadow-inner"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {item.name}, <span className="text-gray-500 font-medium">{item.age} y.o.</span>
          </h3>
          <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase mt-2">
            {item.programs.join(" • ")}
          </p>
        </div>

        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-blue-700 w-fit">
          ⏱ {item.duration}
        </span>

        {/* Achievements Highlight Box */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <p className="text-lg font-bold text-gray-900 mb-3">What Achieved:</p>
          <ul className="space-y-2">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start text-gray-700 text-base">
                <span className="mr-3 text-green-500 font-bold">✓</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <button className="text-left text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors w-fit group">
          {item.cta} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.section>
  )
}

const Result = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const total = Results.length

  return (
    <main ref={containerRef} style={{ minHeight: `${total * 100 + 100}vh` }} className="relative py-20  bg-gray-50/50 ">
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">Real Results</h2>
        <p className="text-center text-lg text-gray-600">
          At HerStrength, every win matters. Here's how our members are transforming their lives.
        </p>
      </div>

      {/* Increased height to 650px to accommodate the taller, more premium cards */}
      <div className="sticky top-20 max-w-6xl mx-auto h-[650px] px-4 overflow-hidden">
        {Results.map((it, index) => (
          <ResultCard
            key={index}
            item={it}
            index={index}
            total={total}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </main>
  )
}

export default Result