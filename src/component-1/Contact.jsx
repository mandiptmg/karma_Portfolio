import { FaInstagram, FaWhatsapp} from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='text-gray-600 dark:text-gray-300 body-font py-28 relative'>
      <div className='px-5 mx-auto max-w-5xl'>
        {/* Header */}
        <div className='flex flex-col text-center w-full mb-12'>
          <h1
            data-aos='fade-up'
            className='sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 uppercase dark:text-white'
          >
            Let&apos;s <span className='text-indigo-600'>connect</span>
          </h1>
          <p
            data-aos='fade-up'
            className='lg:w-2/3 mx-auto text-base leading-relaxed'
          >
            Whether you&apos;re looking to collaborate on a creative project, need help with content editing or visual storytelling, or simply want to say hello — I&apos;m just a message away!
          </p>
        </div>

        {/* Contact Options */}
        <div
          data-aos='fade-up'
          className='flex items-center justify-center flex-wrap gap-6 w-full max-w-2xl mx-auto'
        >
          {/* Email */}
          <div className='flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-lg transition'>
            <MdOutlineMail className='text-red-500 text-3xl' />
            <div>
              <p className='text-sm text-gray-500'>Email</p>
              <button
                onClick={() =>
                  window.open(
                    'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHXPchjWXShWGSlnhFMcqhNzbVWJgKJqJbzctTbBMGKpNJKTfdKMPWwzNnnnVDLRPXnq'
                  )
                }
                className='font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-500'
              >
                karmamonlamsangpo@gmail.com
              </button>
            </div>
          </div>

          {/* WhatsApp */}
          <div className='flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-lg transition'>
            <FaWhatsapp className='text-green-500 text-3xl' />
            <div>
              <p className='text-sm text-gray-500'>WhatsApp</p>
              <button
                onClick={() => window.open('https://wa.me/971567835189')}
                className='font-medium text-gray-800 dark:text-gray-100 hover:text-green-500'
              >
                +971 56 783 5189
              </button>
            </div>
          </div>

          {/* Instagram */}
          <div className='flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-lg transition'>
            <FaInstagram className='text-pink-500 text-3xl' />
            <div>
              <p className='text-sm text-gray-500'>Instagram</p>
              <button
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw=='
                  )
                }
                className='font-medium text-gray-800 dark:text-gray-100 hover:text-pink-500'
              >
                @karmamonlamsangpo
              </button>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className='text-center mt-10'>
          <p className='text-gray-500 text-sm'>
            Want to work together or have something in mind?
          </p>
          <button
            onClick={() =>
              window.open(
                'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHXPchjWXShWGSlnhFMcqhNzbVWJgKJqJbzctTbBMGKpNJKTfdKMPWwzNnnnVDLRPXnq'
              )
            }
            className='mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition'
          >
            Say Hello 👋
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
