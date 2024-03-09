import React from 'react'
import {motion} from 'framer-motion'

interface ComingSoonProps{
    text: string
    className?: string
}


const ComingSoon = ({text, className}: ComingSoonProps) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center 
                    text-center overflow-hidden sm:p-0 h-[60vh]'>
        <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
        animate={{ y: [-10, 10, -10], transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" } }}
        >
            Coming Soon
        </motion.h1>
    </div>
  )
}

export default ComingSoon