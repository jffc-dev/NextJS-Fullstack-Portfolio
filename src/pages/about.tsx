import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'

interface AnimatedNumbersProps{
    value: number
}

const AnimatedNumbers = ({value}: AnimatedNumbersProps) => {

    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        duration: 3000
    })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
      if(isInView){
        motionValue.set(value)
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest: number) => {
            if(ref.current && parseInt(latest.toFixed(0)) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
      }, [springValue, value])
    

    return (
        <span ref={ref}></span>
    )
}


const About = () => {
  return (
    <>
        <Head>
            <title>JFFC | About page</title>
            <meta name='description' content='Javier Flores'/>
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col item-center justify-center
                    dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'></AnimatedText>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='mb-2'>
                            Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                            new and innovative ways to bring my clients&apos; visions to life.
                        </p>
                        <p className='mb-2'>
                            I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
                            creating intuitive, enjoyable experiences for users. 
                        </p>
                        <p className='mb-2'>
                            Whether I&apos;m working on a website, mobile app, or 
                            other digital product, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4
                                dark:bg-dark dark:border-light md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                        <Image src={profilePic} alt='JFFC' className='w-full h-auto rounded-2xl'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
                            priority={true}/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>Satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={2}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>Projects completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={5}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>Years of experience</h2>
                        </div>
                    </div>
                </div>
                <Experience></Experience>
                <Education></Education>
                <Skills></Skills>
            </Layout>
        </main>
    </>
  )
}

export default About