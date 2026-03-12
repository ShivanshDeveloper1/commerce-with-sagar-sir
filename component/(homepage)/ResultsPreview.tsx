"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import results from "@/data/results.json";

export default function ResultsPreview() {
  const [selected, setSelected] = useState<{ id: number; image: string } | null>(null);

  // We only show the first 4 or 8 results for the homepage preview
  const previewResults = results.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-mono text-sm tracking-[4px] uppercase block mb-2">
              ✦ Academic Excellence ✦
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our <span className="text-blue-600">Achievers</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md">
            Celebrating the hard work and success of our top-performing students in the 2025 batch.
          </p>
        </div>

        {/* Results Grid - Limited to 4 for clean UI */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewResults.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-50 border-2 border-slate-100 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={item.image}
                alt={`Result ${item.id}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Red Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-mono tracking-widest uppercase">
                  Rank #{item.id}
                </span>
                <div className="w-8 h-1 bg-white mt-1 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="/results">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-red-200 hover:bg-blue-700 transition-colors"
            >
              View All Results
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Reusable Lightbox Logic */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-[420px] w-full border-2 border-blue-600 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} alt="Result" className="w-full h-auto" />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full text-2xl font-bold flex items-center justify-center"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}