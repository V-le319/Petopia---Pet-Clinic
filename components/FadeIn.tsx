'use client'

import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0, className= "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
        className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn