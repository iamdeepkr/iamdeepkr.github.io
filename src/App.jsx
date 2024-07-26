import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import 'animate.css'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import Fade from 'react-awesome-reveal'
import { BiSolidUpArrow } from 'react-icons/bi'
import Heading from './Pages/Heading'
import 'atropos/css'
import Atropos from 'atropos/react';
import { Toaster } from 'react-hot-toast'

function App() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the top of the page (Y position is 0)
      setIsVisible(window.scrollY > 0);
    };

    // Add the event listener to detect scrolling
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            userSelect: 'none'
          },
          error: {
            duration: 3000,
            style: {
              border: '1px solid rgba(255,0,0,0.10)',
              background: 'rgba(120, 0, 0, 0.25)',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500
            },
          },
          success: {
            duration: 3000,
            style: {
              border: '1px solid rgba(0,255,0,0.10)',
              background: 'rgba(0, 120, 0, 0.25)',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500
            },
          },
        }}
      />

      <div className='relative noto'>


          <ul class="background dark:bg-[#0a0a0a] bg-gray-100">
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
          </ul>

        <div id='home' className=' h-full p-4 md:p-8 dark:bg-[#16171d] bg-[#f9f9f9]'>
          <Navbar />
          <Fade duration={300} bottom >
            <Home />
          </Fade>
        </div>

        <Fade duration={300} bottom>
          <div id='experience' className='center-tag h-full md:h-max bg-transparent backdrop-blur-lg border-t border-b border-gray-400 dark:border-gray-200 relative'>
            <div className='max-width'>
              <div className=' p-4 md:pb-20 md:pt-10 z-50'>
                <Heading title={'Work Experience'} logo={'./experienceLogo.webp'} />
                <Experience />
              </div>
            </div>
          </div>
        </Fade>

        <Fade fraction={0} duration={300} bottom>
          {/* <div id='skills' className='center-tag overflow-clip h-full md:h-max relative bg-transparent bg-gradient-to-t from-[#061a3681] via-[#203b7081] to-[#1d668881] dark:from-[#2b58976a] dark:via-[#1849aa6a] dark:to-[#1126306a] border-t border-b border-gray-400 dark:border-gray-200'> */}
            <div id='skills' className='center-tag overflow-clip h-full md:h-max relative bg-transparent border-t border-b border-gray-400 dark:border-gray-200'>
            <div className='max-width'>
              <div className='md:pt-10 pt-10 z-50'>
                <div className='z-50 w-full flex flex-col items-center justify-center gap-4 cursor-default group transition-all ease-in-out duration-1000 mb-28'>
                  <div className='satisfy text-3xl md:text-4xl text-center font-bold tracking-wide uppercase  bg-gradient-to-r dark:from-neonFade dark:to-purple-800 from-neonDark to-purple-800 dark:bg-white bg-clip-text text-transparent noto'>Skills</div>
                  <div className='bg-gray-500 dark:bg-white h-[0.3vh] w-[50vw] md:w-[20vw] group-hover:w-[60vw] md:group-hover:w-[30vw] transition-all ease-in-out duration-500'></div>
                </div>
                <Skills />
              </div>
            </div>
          </div>
        </Fade>

        <Fade fraction={0} duration={300} bottom>
          <div id='Contact' className='center-tag h-full md:h-max backdrop-blur-lg border-t border-b border-gray-400 dark:border-gray-200 relative'>
            <div className='max-width'>
              <div className=' p-4 z-50'>
                <Heading title={"Drop a message"} logo={'./experienceLogo.webp'} />
                <Contact />
              </div>
            </div>
          </div>
          <div className='z-50 dark:bg-black/80 bg-white/50 text-center tracking-wider dark:text-white border-t text-black/80 2xl:text-sm text-xs py-2'>
            Designed By @ R U Bharti
          </div>
        </Fade>

        {
          isVisible &&
          <div onClick={handleBackToTop} className='bg-neon w-max md:p-4 p-2 hover:animate-bounce md:text-base 2xl:text-xl text-md rounded-full fixed bottom-4 right-2 md:bottom-2 md:right-2 hover:bg-neonDark hover:shadow-md hover:shadow-neon border border-neonDark hover:border-neonFade transition-all duration-300 cursor-pointer group'>
            <a className='transform group-hover:translate-y-6 text-white '><BiSolidUpArrow /></a>
          </div>
        }


      </div>
    </>
  )
}

export default App
