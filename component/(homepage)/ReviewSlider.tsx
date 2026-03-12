"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Make sure lucide-react is installed

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Class 12 Student",
    review: "The accountancy classes here completely changed my approach. The concept clarity is unmatched! Highly recommended in Saharanpur.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Class 11 Student",
    review: "Best commerce coaching around. The study material is top-notch, and the regular test series gave me so much confidence.",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Class 12 Student",
    review: "Economics used to be my weakest subject, but the real-life examples used in class made it my absolute favorite.",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Alumni",
    review: "If you want to score 95%+, join the success batch. The teachers are incredibly dedicated to every single student.",
  },
  {
    id: 5,
    name: "Karan Desai",
    role: "Class 11 Student",
    review: "Business Studies is taught with such passion here. I'm truly grateful for the guidance and the supportive environment.",
  },
];

export default function ReviewSlider() {
  // Duplicating the array to create a seamless infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 overflow-hidden bg-transparent">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">What Our Students Say</h2>
        <p className="text-gray-600">Real results from our commerce batches.</p>
      </div>

      {/* The outer div masks the overflow within your layout's px-48 constraint */}
      <div className="relative flex w-full overflow-hidden mask-image-fade">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust this to make it faster or slower
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((item, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 bg-white border-t-4 border-blue-600 rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-blue-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}