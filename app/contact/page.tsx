"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ExternalLink, 
  Share2, 
  Send 
} from "lucide-react";

const ContactSection = () => {
  // Added selectedTiming to the state
  const [formData, setFormData] = useState({ name: "", selectedClass: "", selectedTiming: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // Get current URL safely in Next.js client component
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const phoneNumber = "918218615688";

  const handleEnroll = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Added Batch Timing to the WhatsApp message
    const message = `Hello Sagar Sir, I would like to enroll.%0A%0A*Name:* ${formData.name}%0A*Class:* ${formData.selectedClass}%0A*Batch Timing:* ${formData.selectedTiming}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  // Share Logic
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent("Check out these Accountancy classes: " + shareUrl)}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent("Recommended: 2026 Accountancy Batch")}&body=${encodeURIComponent("I found this helpful: " + shareUrl)}`;

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 bg-transparent">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: Enrollment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors duration-700" />

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Enroll Now</h2>
            <p className="text-blue-100/60 font-medium">Join the 2026 Batch and master Accountancy.</p>
          </div>

          <form onSubmit={handleEnroll} className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/80 font-bold text-sm ml-1 uppercase tracking-wider">Student Name</label>
              <input
                type="text"
                suppressHydrationWarning
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="Ex: Shivansh Singh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 font-bold text-sm ml-1 uppercase tracking-wider">Class Preference</label>
              <select
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer transition-all"
                value={formData.selectedClass}
                // Also reset the timing whenever they change their class
                onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value, selectedTiming: "" })}
              >
                <option value="" className="bg-slate-900">Select your class</option>
                <option value="Class 11th Accountancy" className="bg-slate-900">Class 11th Accountancy</option>
                <option value="Class 12th Accountancy" className="bg-slate-900">Class 12th Accountancy</option>
              </select>
            </div>

            {/* NEW BATCH TIMING DROPDOWN: Only shows if a class is selected */}
            {formData.selectedClass && (
              <div className="space-y-2">
                <label className="text-white/80 font-bold text-sm ml-1 uppercase tracking-wider">Batch Timing</label>
                <select
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer transition-all"
                  value={formData.selectedTiming}
                  onChange={(e) => setFormData({ ...formData, selectedTiming: e.target.value })}
                >
                  <option value="" className="bg-slate-900">Select batch timing</option>
                  
                  {/* Timings for Class 11th */}
                  {formData.selectedClass === "Class 11th Accountancy" && (
                    <>
                      <option value="3:00 PM to 4:00 PM" className="bg-slate-900">Batch 1: 3:00 PM - 4:00 PM</option>
                      <option value="4:00 PM to 5:00 PM" className="bg-slate-900">Batch 2: 4:00 PM - 5:00 PM</option>
                    </>
                  )}

                  {/* Timings for Class 12th */}
                  {formData.selectedClass === "Class 12th Accountancy" && (
                    <>
                      <option value="1:45 PM to 2:45 PM" className="bg-slate-900">Batch 1: 1:45 PM - 2:45 PM</option>
                      <option value="5:15 PM to 6:15 PM" className="bg-slate-900">Batch 2: 5:15 PM - 6:15 PM</option>
                    </>
                  )}
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 ${
                isSubmitting ? 'bg-red-800 opacity-70' : 'bg-red-600 hover:bg-red-500 shadow-red-600/30'
              } text-white`}
            >
              <MessageCircle size={22} className={isSubmitting ? "animate-bounce" : ""} />
              {isSubmitting ? "Opening WhatsApp..." : "Enroll via WhatsApp"}
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Details & Sharing */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[3rem]"
          >
            <h2 className="text-3xl font-black text-white mb-8">Direct Contact</h2>

            <div className="space-y-8">
              <ContactLink icon={<Phone size={20} />} label="Call Us" value="+91 8218615688" href="tel:+918218615688" />
              <ContactLink icon={<Mail size={20} />} label="Email Us" value="sagarchanna22@gmail.com" href="mailto:sagarchanna22@gmail.com" />
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Share this page</p>
                <div className="flex gap-4">
                  {/* WhatsApp Share Button */}
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600/20 border border-green-500/30 hover:bg-green-600 transition-all py-3 rounded-2xl text-green-400 hover:text-white font-bold"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </motion.a>

                  {/* Email Share Button */}
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={emailShareUrl}
                    aria-label="Share via Email"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 transition-all py-3 rounded-2xl text-blue-400 hover:text-white font-bold"
                  >
                    <Send size={18} />
                    <span>Email</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[250px]"
          >
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.4502422176497!2d77.53819283!3d29.95355893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb1873339f4b%3A0x3e0764a79afcbd77!2sCommerce%20with%20Sagar%20Sir!5e1!3m2!1sen!2sin!4v1777206445733!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
            >
              VIEW ON GOOGLE MAPS <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }) => (
  <a href={href} className="flex items-center gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
      <p className="text-white font-bold group-hover:text-red-400 transition-colors">{value}</p>
    </div>
  </a>
);

export default ContactSection;












