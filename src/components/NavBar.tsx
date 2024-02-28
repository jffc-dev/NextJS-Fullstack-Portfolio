import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

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

const NavBar = () => {

    const {mode, setMode} = useThemeSwitcher()

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center 
                        justify-between dark:text-light'>
            <nav>
                <CustomLink className='mr-4' title='Home' href="/"/>
                <CustomLink className='mx-4' title='About' href="/about"/>
                <CustomLink className='mx-4' title='Projects' href="/projects"/>
                <CustomLink className='ml-4' title='Articles' href="/articles"/>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
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
                <motion.a href="https://www.twitter.com" target='_blank'
                    className='w-6 mx-3' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
                    <PinterestIcon className=''></PinterestIcon>
                </motion.a>
                <motion.a href="https://www.twitter.com" target='_blank'
                    className='w-6 ml-3' whileHover={{y: -2}} whileTap={{scale: 0.9}}>
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
        </header>
    )
}

export default NavBar