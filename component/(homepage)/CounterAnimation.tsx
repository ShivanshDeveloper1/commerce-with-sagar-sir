"use client"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest))

  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: duration,
      })
    }
  }, [isInView, value, motionValue, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default Counter