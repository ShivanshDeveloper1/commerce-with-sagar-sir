import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutVisionary = () => {
  const stats = [
    { label: "YEARS", value: "10+" },
    { label: "STUDENTS", value: "5000+" },
    { label: "RESULTS", value: "99.9%" },
  ]

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-16 px-6 md:px-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch gap-0 border border-white/10 rounded-[2.5rem] overflow-hidden bg-blue-950/20 backdrop-blur-sm shadow-2xl">
        
        {/* Left Side: Image with Slanted Overlay */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/sir.jpeg" // Replace with your image path
            alt="The Visionary"
            fill
            className="object-cover object-top"
          />
          
          {/* The Blue Slanted Overlay Layer */}
          <div 
            className="absolute inset-0 bg-blue-900/40 mix-blend-multiply lg:block hidden"
            style={{ clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 70% 100%)' }}
          ></div>

          {/* Gold Medal Badge */}
          <div className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.5)] border-4 border-yellow-300 animate-pulse">
             <span className="text-3xl md:text-4xl">🏅</span>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px] -z-10"></div>

          <div className="space-y-2">
            <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
              The Visionary
            </h3>
            <h2 className="text-blue-500 text-4xl md:text-6xl font-black tracking-tighter">
              Sagar Sir
            </h2>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
        C.A Finalist with over 10 years of transformative teaching experience. Recognized as Saharanpur's most innovative Accountancy educator, having guided thousands of students to academic excellence.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-blue-900/30 border border-blue-500/20 p-4 md:p-6 rounded-2xl text-center hover:border-blue-400/50 transition-colors shadow-lg"
              >
                <div className="text-2xl md:text-4xl font-black text-blue-500 italic">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-white tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-4 flex justify-end lg:justify-start">
             <Link href={'/contact'} className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform transition hover:-translate-y-1 active:scale-95">
                ENROLL NOW
             </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutVisionary