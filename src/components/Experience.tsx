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
                        company='Google'
                        companyLink='https://www.google.com'
                        time='2022-Present'
                        address='Mountain View, CA'
                        work='Worked on a team responsible for developing new features for Google&apos;s 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization.'/>

                    <Details
                        position='Intern'
                        company='Facebook'
                        companyLink='https://www.facebook.com'
                        time='Summer 2021'
                        address='Menlo Park, CA.'
                        work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature.'/>

                    <Details
                        position='Software Developer'
                        company='Amazon'
                        companyLink='https://www.amazon.com'
                        time='2020-2021'
                        address='Seattle, WA.'
                        work='Worked on a team responsible for developing Amazon&apos;s mobile app, including implementing new features such 
                        as product recommendations and user reviews, and optimizing the app&apos;s performance and reliability.'/>

                    <Details
                        position='Software Developer Intern'
                        company='Microsoft'
                        companyLink='https://www.microsoft.com'
                        time='Summer 2019'
                        address='Redmond, WA.'
                        work='Worked on a team responsible for developing new features for Microsoft&apos;s Windows operating system, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        a core system component.'/>

                    <Details
                        position='Teaching Assistant'
                        company='MIT'
                        companyLink='https://www.mit.edu'
                        time='Fall 2018'
                        address='Massachusetts Ave, Cambridge, MA.'
                        work='Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                        and graded exams and assignments.'/>
                </ul>
            </div>
        </div>
    )
}

export default Experience