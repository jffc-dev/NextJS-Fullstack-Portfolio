import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

interface DetailsProps {
    position: string
    company: string
    companyLink: string
    time: string
    address: string
    work: string
}

const Details = ({position, company, companyLink, time, address, work}: DetailsProps) => {

    const ref = useRef<HTMLLIElement>(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center 
            justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' 
                    className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end','center start']
        }
    )

    return (
        <div className='my-64 md:my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-32 xs:text-4xl md:mb-16'>Experience</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' 
                    style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details position='Software Engineer'
                        company='Consejeros y Corredores de Seguros'
                        companyLink='https://www.consejeros.com.pe/'
                        time='Dec 2021-Present'
                        address='Arequipa, Peru'
                        work='Worked on a team responsible for developing new features for Consejeros&apos; 
                        ratail page, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization.'/>

                    <Details
                        position='Fullstack Developer'
                        company='Sacrun'
                        companyLink='https://www.sacrun.com/'
                        time='Feb 2021-Dec 2021'
                        address='Arequipa, Peru'
                        work='Worked on a team responsible for developing new features for Sacrun&apos;s web platform, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        the web.'/>

                    <Details
                        position='Trainee Developer'
                        company='VHB Industrial'
                        companyLink='https://www.vhbindusac.com/'
                        time='Feb 2020-Mar 2020'
                        address='Arequipa, Peru'
                        work='Worked on a team responsible for developing VHB&apos;s web app, including implementing new features such 
                        as product recommendations and user reviews, and optimizing the app&apos;s performance and reliability.'/>

                </ul>
            </div>
        </div>
    )
}

export default Experience