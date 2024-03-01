import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import {DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { useRouter } from 'next/router'

interface CustomLinkProps{
    href: string
    title: string
    className?: string
}

const CustomLink = ({href, title, className}: CustomLinkProps)=> {
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className='h-[1px] inline-block w-0 bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 dark:bg-light'>&nbsp;</span>
        </Link>
    )
}

interface CustomMobileLinkProps{
    href: string
    title: string
    className?: string
    toggle: any
}

const CustomMobileLink = ({href, title, className, toggle}: CustomMobileLinkProps)=> {

    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return(
        <button className={`${className} relative group text-light dark:text-dark my-2 text-lg`} onClick={handleClick}>
            {title}
            <span className='h-[1px] inline-block w-0 bg-light dark:bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const {mode, setMode} = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center 
                        justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8'>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-[0.6rem]' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav >
                    <CustomLink className='mr-4' title='Home' href="/"/>
                    <CustomLink className='mx-4' title='About' href="/about"/>
                    <CustomLink className='mx-4' title='Projects' href="/projects"/>
                    <CustomLink className='ml-4' title='Articles' href="/articles"/>
                </nav>
                
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.twitter.com" target='_blank' 
                        className='w-6 mr-3' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                        <TwitterIcon className=''></TwitterIcon>
                    </motion.a>
                    <motion.a href="https://www.twitter.com" target='_blank'
                        className='w-6 mx-3' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                        <GithubIcon className=''></GithubIcon>
                    </motion.a>
                    <motion.a href="https://www.twitter.com" target='_blank'
                        className='w-6 mx-3' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                        <LinkedInIcon className=''></LinkedInIcon>
                    </motion.a>

                    <button onClick={() => {setMode(mode === 'dark' ? 'light' : 'dark')}}
                        className={`ml-3 flex items-center justify-center rounded-full 
                                p-1 text-light bg-dark dark:text-dark dark:bg-light`}>
                        {mode === 'dark' 
                        ? <SunIcon className='fill-dark'></SunIcon> 
                        : <MoonIcon className='fill-dark'></MoonIcon>}
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}} animate={{scale:1, opacity:1}}>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink className='' title='Home' href="/" toggle={handleClick}/>
                            <CustomMobileLink className='' title='About' href="/about" toggle={handleClick}/>
                            <CustomMobileLink className='' title='Projects' href="/projects" toggle={handleClick}/>
                            <CustomMobileLink className='' title='Articles' href="/articles" toggle={handleClick}/>
                        </nav>
                        
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href="https://www.twitter.com" target='_blank' 
                                className='w-6 mr-3 sm:mx-1' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                                <TwitterIcon className=''></TwitterIcon>
                            </motion.a>
                            <motion.a href="https://www.twitter.com" target='_blank'
                                className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                                <GithubIcon className=''></GithubIcon>
                            </motion.a>
                            <motion.a href="https://www.twitter.com" target='_blank'
                                className='w-6 mx-3 sm:mx-1' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                                <LinkedInIcon className=''></LinkedInIcon>
                            </motion.a>
                            <motion.a href="https://www.twitter.com" target='_blank'
                                className='w-6 mx-3 sm:mx-1' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                                <PinterestIcon className=''></PinterestIcon>
                            </motion.a>
                            <motion.a href="https://www.twitter.com" target='_blank'
                                className='w-6 mx-3 sm:mx-1' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                                <DribbbleIcon className=''></DribbbleIcon>
                            </motion.a>

                            <button onClick={() => {setMode(mode === 'dark' ? 'light' : 'dark')}}
                                className={`ml-3 flex items-center justify-center rounded-full 
                                        p-1 text-light bg-dark dark:text-dark dark:bg-light`}>
                                {mode === 'dark' 
                                ? <SunIcon className='fill-dark'></SunIcon> 
                                : <MoonIcon className='fill-dark'></MoonIcon>}
                            </button>
                        </nav>
                    </motion.div>
                :
                null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>

        </header>
    )
}

export default NavBar