"use client";

import { Award, ChevronRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { AnimateContainer, AnimateItem } from "./AnimateIn";
import { useRouter } from "next/navigation";

const studentFaces = [
  "https://images.unsplash.com/photo-1524069290683-0457abfe42c3",
  "https://images.unsplash.com/photo-1737825101103-c35677e6bd45",
  "https://images.unsplash.com/photo-1656266724105-302774929dfd",
  "https://images.unsplash.com/photo-1604177091072-b7b677a077f6",
];

const Homepage = () => {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-[#020617] text-slate-50 overflow-hidden pt-24 md:pt-32 px-6">
      {/* 1. Mirrored Background Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Swapped positions of the glows */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[130px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[130px]"></div>
        
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <AnimateContainer>
        <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-center">
          
          {/* LEFT COLUMN: Now the Visuals (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <AnimateItem>
              <div className="relative group">
                {/* Changed the frame style: solid offset instead of border */}
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-emerald-500/10 rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                
                <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src="/student4.jpg"
                    alt="Coaching Success"
                    fill
                    className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay Tag */}
                  <div className="absolute top-6 left-6 bg-emerald-500 text-slate-900 px-4 py-1 rounded-lg font-black text-xs uppercase tracking-tighter">
                    Top Rated 2026
                  </div>
                </div>

                {/* New Floating Performance Card */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-emerald-500/20 shadow-2xl hidden md:block">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <CheckCircle size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-sm font-bold">Expert Faculty</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <CheckCircle size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-sm font-bold">Smart Curriculum</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateItem>
          </div>

          {/* RIGHT COLUMN: Now the Content (7 Cols) - Aligned Right for distinct look */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-right flex flex-col items-end">
            <AnimateItem>
              <div className="inline-flex items-center gap-3 bg-emerald-950/30 border-r-4 border-emerald-500 px-5 py-2 rounded-l-xl mb-6 shadow-lg">
                <span className="text-emerald-400 text-xs font-black tracking-[0.2em] uppercase">
                  Authorized Learning Center
                </span>
                <Award size={18} className="text-emerald-400" />
              </div>
            </AnimateItem>

            <AnimateItem>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter text-white mb-8">
                Build Your <br />
                <span className="text-emerald-400 italic">Financial</span> <br />
                Legacy.
              </h1>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 mr-0 ml-auto">
                Step into the world of elite commerce education. <span className="text-emerald-400 font-bold">Sachin Sir</span> provides the strategic edge required for Saharanpur's top achievers.
              </p>
            </AnimateItem>

            <AnimateItem>
              <div className="flex flex-row-reverse flex-wrap gap-5">
                <button
                  onClick={() => router.push("/contact")}
                  className="group bg-white text-slate-900 px-10 py-5 rounded-xl font-black text-lg transition-all flex items-center gap-3 hover:bg-emerald-400 shadow-xl"
                >
                  Get Started
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-transparent border-b-2 border-emerald-500/50 text-emerald-400 px-6 py-5 font-bold text-lg hover:border-emerald-400 transition-all">
                  View Programs
                </button>
              </div>
            </AnimateItem>
          </div>

        </div>

        {/* BOTTOM SECTION: Social Proof with Reversed Alignment */}
        <AnimateItem>
          <div className="mt-32 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row-reverse justify-between items-center gap-10 max-w-7xl mx-auto mb-20">
            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="flex -space-x-3 flex-row-reverse space-x-reverse">
                {studentFaces.map((url, i) => (
                  <div key={i} className="h-14 w-14 rounded-2xl border-4 border-[#020617] overflow-hidden rotate-3 hover:rotate-0 transition-transform">
                    <img src={url} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-lg">8,000+ Success Stories</p>
                <div className="flex justify-end gap-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />)}
                </div>
              </div>
            </div>
            
            <div className="flex gap-10 opacity-30 text-emerald-50 font-black text-xl tracking-widest italic">
              <span>CBSE</span>
              <span>ICSE</span>
              <span>ISC</span>
            </div>
          </div>
        </AnimateItem>
      </AnimateContainer>
    </main>
  );
};

export default Homepage;