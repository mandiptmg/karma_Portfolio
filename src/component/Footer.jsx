import { FaChevronCircleUp } from 'react-icons/fa'
import img from '../assets/logo.png'
const Footer = () => {
  const time = new Date().getFullYear()
  return (
    <div>
      <footer className='relative md:w-[80vw] mx-auto md-[90vw]  mt-16 md:mt-0 '>
        <div className=' w-full mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              data-aos='fade-right'
              href='#home'
              className='flex items-center mb-4 sm:mb-0'
            >
              <img src={img} className='h-12 mr-3' alt='mandip Logo' />
            
            </a>
            <ul
              data-aos='fade-up'
              className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'
            >
              <li>
                <a href='#about me' className='mr-4 hover:underline md:mr-6 '>
                  About
                </a>
              </li>
              <li>
                <a href='#projects' className='mr-4 hover:underline md:mr-6 '>
                  Project
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <p className='block text-sm mx-5 md:mx-0 text-gray-500 sm:text-center dark:text-gray-400'>
          © {time}
          <a href='#home' className='hover:underline ml-1'>
            Karma
          </a>
          . All Rights Reserved.
        </p>

        <button title='Home' className='text-3xl '>
          <a href='#home'>
            <FaChevronCircleUp className='absolute bottom-10 right-14 text-indigo-600 hover:scale-105 transition-all duration-700 animate-bounce ' />
          </a>
        </button>
      </footer>
    </div>
  )
}

export default Footer
