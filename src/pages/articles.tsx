import Head from 'next/head'
import React, { MouseEventHandler, useRef } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import Article1Image from '../../public/images/articles/pagination component in reactjs.jpg'
import Article2Image from '../../public/images/articles/What is Redux with easy explanation.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'
import ComingSoon from '../components/ComingSoon'

interface FeaturedArticleProps {
    img: StaticImageData
    title: string
    time: string
    summary: string
    link: string
}

const FramerImage = motion(Image)

const FeaturedArticle = ({img, title, time, summary, link}: FeaturedArticleProps) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
                    dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
                            rounded-br-3xl dark:bg-dark"/>

            <Link href={link} target='_blank' className='w-full flex cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale: 1.05}} transition={{duration:0.2}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
                    priority={true}/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

interface ArticleProps {
    img: StaticImageData
    title: string
    date: string
    link: string
}

const Article = ({img, title, date, link}: ArticleProps) => {
    return(
        <motion.li initial={{y: 200}} whileInView={{y: 0, transition:{duration: 0.5, ease: 'easeInOut'}}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between \
                bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
                dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            <MovingImage title={title} img={img} link={link}></MovingImage>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:p-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

interface MovingImageProps {
    img: StaticImageData
    title: string
    link: string
}

const MovingImage = ({title, img, link}: MovingImageProps) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const imgRef = useRef<HTMLImageElement>(null)

    const handleMouse: MouseEventHandler<HTMLAnchorElement> = (event) => {
        imgRef.current!.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }

    const handleMouseLeave = (event: any) => {
        imgRef.current!.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return(
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>

            <FramerImage ref={imgRef} alt={title} src={img} 
                className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
                style={{x:x, y:y}}/>
        </Link>
    )
}

const Articles = () => {
  return (
    <>
        <Head>
            <title>JFFC | Articles page</title>
            <meta name='description' content='Javier Flores - Articles'/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>

                <ComingSoon text=''></ComingSoon>
                
                {/* <AnimatedText text='Words Can Change The World!' className='mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl'></AnimatedText>

                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                    <FeaturedArticle title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' 
                        time='9 min' link='/' img={Article1Image}></FeaturedArticle>

                    <FeaturedArticle title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' time='9 min' link='/' 
                        img={Article2Image}></FeaturedArticle>
                </ul>

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>

                <ul>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'></Article>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers'></Article>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='Creating An Efficient Modal Component In React Using Hooks And Portals'></Article>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='Build A Fabulous Todo List App With React, Redux And Framer-Motion'></Article>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='Redux Simplified: A Beginner&apos;s Guide For Web Developers'></Article>
                    <Article date='Feb 23, 2024' link='/' img={Article1Image} title='What Is Higher Order Component (Hoc) In React?'></Article>
                </ul> */}

            </Layout>
        </main>
    </>
  )
}

export default Articles

