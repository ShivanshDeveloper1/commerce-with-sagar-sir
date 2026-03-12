"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, ChevronDown, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const AboutAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    { title: "Conceptual Mastery", desc: "We don't just teach accounts; we build the logic behind every entry." },
    { title: "Personalized Mentorship", desc: "Sagar Sir personally monitors the progress of every single student." },
    { title: "Exam-Oriented Strategy", desc: "Special focus on CBSE/ISC board patterns and time management." },
    { title: "Proven Track Record", desc: "The highest number of 95+ scorers in Saharanpur year after year." }
  ];

  const faqs = [
    {
      question: "Which subjects are covered at the center?",
      answer: "We offer comprehensive coaching for Accountancy, Economics, and Business Studies for Class 11, 12, and professional foundation courses."
    },
    {
      question: "Is there a provision for demo classes?",
      answer: "Yes, we provide 2-day free demo sessions so students can experience Sagar Sir's unique teaching style and conceptual depth before enrolling."
    },
    {
      question: "How do you handle doubt clearing sessions?",
      answer: "We have dedicated doubt-clearing hours every weekend and a 24/7 WhatsApp support group where students can post queries directly to Sagar Sir."
    },
    {
      question: "What is the batch size for Class 12 Boards?",
      answer: "We maintain small, focused batches to ensure that every student receives personalized attention and regular performance feedback."
    }
  ];

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Part 1: Hero Intro --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm mb-4">Legacy of Excellence</h4>
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 leading-[0.9] mb-8">
              Defining the Future of <span className="text-blue-600">Commerce.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
              At <strong>Commerce with Sagar Sir</strong>, we believe that education is not the filling of a pail, but the lighting of a fire. Based in the heart of Saharanpur, we have redefined how students perceive Accountancy and Economics.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-black text-blue-600">10+</p>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-tighter">Years of Trust</p>
              </div>
              <div className="w-[1px] h-12 bg-gray-200" />
              <div>
                <p className="text-4xl font-black text-blue-600">500+</p>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-tighter">90% Scorers</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-blue-50">
              <Image 
                src="/commercecoahing.jpeg" 
                alt="Sagar Sir Classroom" 
                width={600} 
                height={700} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>
        </div>

        {/* --- Part 2: The "Why Us" Grid --- */}
        <div className="bg-blue-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden mb-32">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Why Sagar Sir is the First Choice for Toppers?</h3>
              <p className="text-blue-100 text-lg mb-8 opacity-80">
                Success in Commerce isn't just about memorizing—it's about logic. Our pedagogy is designed to make complex concepts simple and intuitive.
              </p>
              <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
                Book a Demo Class
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <CheckCircle2 className="text-blue-400 mb-4" size={28} />
                  <h5 className="font-bold text-lg mb-2">{f.title}</h5>
                  <p className="text-sm text-blue-100/70 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Part 3: Integrated FAQ Section --- */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle size={16} />
              Have Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950">Frequently Asked <span className="text-blue-600">Queries</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-100 rounded-3xl overflow-hidden bg-gray-50/50"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                >
                  <span className="font-bold text-blue-950 text-lg md:text-xl">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="text-blue-600 bg-blue-50 p-2 rounded-full"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndFAQ;