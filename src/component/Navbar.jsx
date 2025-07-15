import image from '../assets/logo.png'
// import { NavLink } from 'react-router-dom'
import 'animate.css'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
  const { active, setActive } = useGlobalContext()
  const [toogle, setToogle] = useState(false)
  const [scroll, setScroll] = useState('')

  //load dark mode local storage
  useEffect(() => {
    const storedValue = localStorage.getItem('dark-mode')
    if (storedValue === 'true') {
      setToogle(true)
      document.documentElement.classList.add('dark')
    } else {
      setToogle(false)
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll('bg-gray-100 dark:bg-slate-800 shadow-xl')
      } else {
        setScroll('')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navlink = [
    { title: 'home', href: '#home' },
    { title: 'about me', href: '#about me' },
    { title: 'Portfolio', href: '#projects' },
    { title: 'contact', href: '#contact' },
  ]
  return (
    <div className={` ${scroll} items-center  h-20 z-20 grid sticky top-0 `}>
      <div className='w-[90vw] mx-auto md:w-[80vw]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-x-2  items-center'>
            <a href='/' className='flex items-center gap-1'>
              <img
                src={image}
                alt='logo'
                className=' object-contain duration-1000 animate__slower animate__fadeInLeft animate__animated h-9 rounded-full'
              />
            
            </a>
          </div>
          <div className='hidden animate__slower 	 animate__fadeInDown animate__animated md:block'>
            <ul className='text-lg flex items-center gap-5 lg:gap-10 dark:text-white  capitalize text-gray-600 hover:text-indigo-800'>
              {navlink.map((item) => {
                const { title, href } = item
                return (
                  <li key={title}>
                    <a href={href}>{title}</a>
                  </li>
                )
              })}{' '}
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                setToogle(!toogle)
                if (toogle === true) {
                  document.documentElement.classList.remove('dark')
                  localStorage.setItem('dark-mode', !toogle)
                } else {
                  document.documentElement.classList.add('dark')
                  localStorage.setItem('dark-mode', !toogle)
                }
              }}
              title={toogle ? 'light mode on' : 'night mode on'}
              className='mr-5  md:mr-0 animate__slower 	 animate__fadeInRight animate__animated'
            >
              {toogle ? (
                <BsFillSunFill className='text-yellow-600' />
              ) : (
                <BsFillMoonStarsFill className='text-slate-800' />
              )}
            </button>

            <button
              onClick={() => setActive(!active)}
              className='md:hidden text-xl  animate__slower 	 animate__fadeInRight animate__animated'
            >
              <FaBars className='hover:rotate-90 hover:text-indigo-900  text-indigo-700  transition-all duration-300 ' />
            </button>
          </div>
        </div>
      </div>

      {/* //close and open menu */}

      <div
        className={
          active
            ? ' fixed dark:bg-slate-900 bg-white top-0 left-0 z-10 w-full h-full'
            : 'hidden'
        }
      >
        <div className='grid mt-40 place-items-center'>
          <div>
            <button
              className='absolute top-7 right-5 '
              onClick={() => setActive(false)}
            >
              <FaTimes className='text-2xl text-red-600 duration-300 transition-all hover:scale-105 hover:text-red-800 ' />
            </button>
          </div>
          <div>
            <ul className='text-4xl space-y-14 dark:text-white text-center capitalize text-gray-600 '>
              {navlink.map((item, index) => {
                const { title, href } = item
                return (
                  <li key={index} className='hover:text-indigo-600'>
                    <a href={href} onClick={() => setActive(false)}>
                      {title}
                    </a>
                  </li>
                )
              })}{' '}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
