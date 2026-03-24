import React from "react";
import { AnimateImageContainer } from "./AnimateIn";

const VideoReviewContainer = () => {
  return (
    <div className="w-[100vw] relative left-1/2 -ml-[50vw] overflow-hidden mt-10 py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-600/15 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <AnimateImageContainer>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Student Reviews
            </h2>
            <p className="text-white/60 font-medium max-w-xl mx-auto">
              Hear directly from our successful students and their journey to
              mastering Accountancy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 justify-center">
            <div className="lg:col-start-1 lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-3 transition-all duration-500 hover:border-red-500/50 hover:shadow-red-600/20 w-full max-w-[320px]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] rounded-[2rem] object-cover bg-black"
                  poster="https://res.cloudinary.com/dkfe8naf5/video/upload/so_1/eg51g0vthtbrs4laimbg.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/dkfe8naf5/video/upload/v1774368324/eg51g0vthtbrs4laimbg.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-3 transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-600/20 w-full max-w-[320px]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] rounded-[2rem] object-cover bg-black"
                  poster="https://res.cloudinary.com/dkfe8naf5/video/upload/so_1/rwxlqeszgrbpihrcmtkl.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/dkfe8naf5/video/upload/v1774368335/rwxlqeszgrbpihrcmtkl.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </AnimateImageContainer>
    </div>
  );
};

export default VideoReviewContainer;