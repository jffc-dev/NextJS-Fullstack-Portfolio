import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

interface DetailsProps {
    type: string
    time: string
    place: string
    info: string
}

const Details = ({type, time, place, info}: DetailsProps) => {

    const ref = useRef<HTMLLIElement>(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end','center start']
        }
    )

    return (
        <div className='my-64 md:my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-32 xs:text-4xl md:mb-16'>Education</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' 
                    style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type='Bachelor of Software Design and Development'
                        place='Tecsup'
                        time='2019-2021'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'/>

                    <Details
                        type='Bachelor of Systems Engineering'
                        place='Continental University'
                        time='2024-Present'
                        info='Completed a master&apos;s project on deep learning, developing a new neural network architecture for natural 
                        language understanding.'/>
                </ul>
            </div>
        </div>
    )
}

export default Education