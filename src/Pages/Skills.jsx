import reactJs from '../assets/logo/React JS.png'
import bootstrap from '../assets/logo/Bootstrap CSS.png'
import css from '../assets/logo/CSS 3.png'
import docker from '../assets/logo/Docker.png'
import express from '../assets/logo/Express JS.png'
import git from '../assets/logo/Git.png'
import html from '../assets/logo/HTML 5.png'
import js from '../assets/logo/Javascript.png'
import mongo from '../assets/logo/Mongo DB.png'
import next from '../assets/logo/Next JS.png'
import node from '../assets/logo/Node JS.png'
import pg from '../assets/logo/PostgreSQL.png'
import reactNative from '../assets/logo/React Native.png'
import redux from '../assets/logo/Redux.png'
import socket from '../assets/logo/Socket IO.png'
import tailwind from '../assets/logo/Taiwind CSS.png'
import firebase from '../assets/logo/firebase.png'
import skillBackground from '../assets/skillBackground.webp'
import './Skills.css'
import { useEffect, useRef, useState } from 'react'

const Skills = () => {

  const [toggle, setToggle] = useState(true)
  const [item, setItem] = useState([])
  const [item2, setItem2] = useState([])

  const [view, setView] = useState(false)

  const circleRef1 = useRef(null)
  const circleRef2 = useRef(null)

  useEffect(() => {
    if (circleRef1.current) {
      const circle = circleRef1.current;
      const radius = circle.offsetWidth / 2;
      const itemRadius = 50; // items width (100px/2) = 50
      const itemsCount = 17;
      const newItems = [];

      for (let i = 0; i < itemsCount; i++) {
        const angle = (i / itemsCount) * (2 * Math.PI);
        // const x = radius + (radius - itemRadius) * Math.cos(angle) - itemRadius;
        const x = radius + radius * Math.cos(angle);
        // const y = radius + (radius - itemRadius) * Math.sin(angle) - itemRadius;
        const y = radius + radius * Math.sin(angle);

        newItems.push({ x, y });
      }
      setItem(newItems);
    }

    if (circleRef2.current) {
      const circle = circleRef2.current;
      const radius = circle.offsetWidth / 2;
      const itemRadius = 50; // items width (100px/2) = 50
      const itemsCount = 17;
      const newItems = [];

      for (let i = 0; i < itemsCount; i++) {
        const angle = (i / itemsCount) * (2 * Math.PI);
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);

        newItems.push({ x, y });
      }
      setItem2(newItems);
    }

  }, [circleRef1.current, circleRef2.current])

  let logoList = [
    { id: 1, name: 'Javascript', image: js, position: 'top-[0%] left-[40%]' },
    { id: 2, name: 'MongoDB', image: mongo, position: 'top-[0%] left-[40%]' },
    { id: 3, name: 'Socket.io', image: socket, position: 'top-[0%] left-[40%]' },
    { id: 4, name: 'Firebase', image: firebase, position: 'top-[0%] left-[40%]' },
    { id: 4, name: 'Next.js', image: next, position: 'top-[0%] left-[40%]' },
    { id: 5, name: 'Bootstrap CSS', image: bootstrap, position: 'top-[0%] left-[40%]' },
    { id: 6, name: 'Git', image: git, position: 'top-[0%] left-[40%]' },
    { id: 7, name: 'Node.js', image: node, position: 'top-[0%] left-[40%]' },
    { id: 8, name: 'HTML 5', image: html, position: 'top-[0%] left-[40%]' },
    { id: 9, name: 'CSS 3', image: css, position: 'top-[0%] left-[40%]' },
    { id: 10, name: 'Express.js', image: express, position: 'top-[0%] left-[40%]' },
    { id: 11, name: 'React.js', image: reactJs, position: 'top-[0%] left-[40%]' },
    { id: 12, name: 'Tailwind CSS', image: tailwind, position: 'top-[0%] left-[40%]' },
    { id: 13, name: 'React Native', image: reactNative, position: 'top-[0%] left-[40%]' },
    { id: 14, name: 'Redux', image: redux, position: 'top-[0%] left-[40%]' },
    { id: 15, name: 'PostgreSQL', image: pg, position: 'top-[0%] left-[40%]' },
    { id: 16, name: 'Docker', image: docker, position: 'top-[0%] left-[40%]' },
  ]

  let logoList2 = [
    { id: 11, name: 'React.js', image: reactJs, position: 'top-[0%] left-[40%]' },
    { id: 13, name: 'Tailwind CSS', image: tailwind, position: 'top-[0%] left-[40%]' },
    { id: 12, name: 'React Native', image: reactNative, position: 'top-[0%] left-[40%]' },
    { id: 14, name: 'Redux', image: redux, position: 'top-[0%] left-[40%]' },
    { id: 7, name: 'Node.js', image: node, position: 'top-[0%] left-[40%]' },
    { id: 10, name: 'Express.js', image: express, position: 'top-[0%] left-[40%]' },
    { id: 15, name: 'PostgreSQL', image: pg, position: 'top-[0%] left-[40%]' },
    { id: 16, name: 'Docker', image: docker, position: 'top-[0%] left-[40%]' },
    { id: 6, name: 'Git', image: git, position: 'top-[0%] left-[40%]' },
    { id: 6, name: 'Firebase', image: firebase, position: 'top-[0%] left-[40%]' },
    { id: 4, name: 'Next.js', image: next, position: 'top-[0%] left-[40%]' },
    { id: 3, name: 'Socket.io', image: socket, position: 'top-[0%] left-[40%]' },
    { id: 8, name: 'HTML 5', image: html, position: 'top-[0%] left-[40%]' },
    { id: 9, name: 'CSS 3', image: css, position: 'top-[0%] left-[40%]' },
    { id: 5, name: 'Bootstrap CSS', image: bootstrap, position: 'top-[0%] left-[40%]' },
    { id: 1, name: 'Javascript', image: js, position: 'top-[0%] left-[40%]' },
    { id: 2, name: 'MongoDB', image: mongo, position: 'top-[0%] left-[40%]' },
  ]

  logoList?.sort((a, b) => a.id - b.id);

  const skillCard = 'absolute text-xs text-center px-4 py-1 text-white '

  return (
    <div className={`${!view ? 'md:h-[70vh]' : 'md:h-full'} w-auto md:pt-[19.5rem] md:pb-0 pb-10`}>

      <div className='absolute top-[15vh] md:left-10 z-50 w-full md:block hidden'>
        <div className='flex items-center h-full w-full gap-4'>
          <span>Change View:</span>
          <label class="tgl">
            <input type="checkbox" onChange={e => setView(e.target.checked)} />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div className={`${!view ? 'md:h-[70vh]' : 'md:h-full'} relative w-full flex md:items-end justify-center`}>

        <div className={`${!view ? 'md:hidden' : ''} flex flex-wrap justify-center gap-x-2 md:gap-x-16 gap-y-4 -mt-16 md:-mt-[45vh] 2xl:-mt-[35vh] md:self-start md:pb-10`}>
          {logoList2?.map((elem, index) => (
            <div className="relative animate__animated animate__zoomIn animate__faster group flex flex-col items-center w-[30%] md:w-[7%] mb-6 gap-y-4 md:gap-y-6" key={index}>
              <div className="absolute top-0 h-[21vw] w-[21vw] md:h-[100px] md:w-[100px] dark:saturate-200 dark:hover:saturate-50 group-hover:shadow-[0px_0px_20px_rgba(54,54,179,0.7)] group-hover:blur-0 rounded-xl border border-gray-400/50 dark:border-gray-500 p-6 rotate-[45deg] transition-all duration-300 object-contain dark:blur-[1px] blur-[0px] bg-[#ffffff73]/10 md:bg-[#ffffff73]/50 dark:bg-[#999]/20 md:dark:bg-[#999]/20 dark:group-hover:bg-white/80 shadow-[0px_0px_10px_rgba(255,255,255,0.3)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]" />
              <img
                className='h-[21vw] w-[21vw] md:h-[100px] md:w-[100px] saturate-150 dark:saturate-150 dark:hover:saturate-100 p-6 rounded-full object-contain bg-transparent'
                src={elem.image}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='w-full text-center font-semibold md:font-normal text-md md:text-sm'>{elem?.name}</div>
            </div>
          ))}
        </div>

        <div ref={circleRef1} onMouseEnter={() => setToggle(false)} onMouseLeave={() => setToggle(true)} className={`${toggle ? 'skillList1' : ''} ${!view ? 'md:block' : 'md:hidden'} hidden absolute w-[70vw] h-[70vw] 2xl:w-[65vw] 2xl:h-[65vw] bottom-[-9vw] 2xl:bottom-[-14vw] transition-all duration-300 ease-in-out rounded-full border border-gray-400/40 dark:border-gray-100/40`}>
          {item?.length > 0 && logoList?.map((elem, index) => (
            <>
              <div style={{ position: 'absolute', translate: '-50% -50%', left: `${item[index]?.x}px`, top: `${item[index]?.y}px` }} className={`${skillCard} animate__animated animate__zoomIn animate__faster skill_card border border-gray-300 dark:border-gray-500 rounded-full 2xl:w-[70px] 2xl:h-[70px] w-[60px] h-[60px] hover:bg-[#ffffff73] dark:hover:bg-[#999] hover:scale-125 group transition-all duration-200 flex flex-col md:items-center md:justify-end gap-2 bg-[#ffffff73]/70 dark:bg-[#999]/20  shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]`} key={index}>
                <img
                  className='2xl:w-[100px] 2xl:h-[100px] w-[70px] h-[70px] p-0.5 object-contain'
                  src={elem.image}
                  alt="Logo"
                />
                <div style={{ transform: 'translate(0%, 150%)' }} className='absolute text-center font-semibold text-md dark:text-gray-50 text-gray-800'>{elem?.name}</div>
              </div>
            </>
          ))}
        </div>

        <div ref={circleRef2} onMouseEnter={() => setToggle(false)} onMouseLeave={() => setToggle(true)} className={`${toggle ? 'skillList2' : ''} ${!view ? 'md:block' : 'md:hidden'} hidden absolute w-[55vw] h-[55vw] 2xl:w-[50vw] 2xl:h-[50vw] bottom-[-2vw] 2xl:bottom-[-7vw] transition-all duration-300 ease-in-out rounded-full border border-gray-400/40 dark:border-gray-100/40`}>
          {item2?.length > 0 && logoList?.reverse()?.map((elem, index) => (
            <>
              <div style={{ position: 'absolute', translate: '-50% -50%', left: `${item2[index]?.x}px`, top: `${item2[index]?.y}px` }} className={`${skillCard} animate__animated animate__zoomIn animate__faster skill_card border border-gray-300 dark:border-gray-500 rounded-full 2xl:w-[70px] 2xl:h-[70px] w-[60px] h-[60px] hover:bg-[#ffffff73] dark:hover:bg-[#999] hover:scale-125 group transition-all duration-200 flex flex-col md:items-center md:justify-end gap-2  bg-[#ffffff73]/70 dark:bg-[#999]/20  shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]`} key={index}>
                <img
                  className='2xl:w-[100px] 2xl:h-[100px] w-[70px] h-[70px] p-0.5 object-contain'
                  src={elem.image}
                  alt="Logo"
                />
                <div style={{ transform: 'translate(0%, 150%)' }} className='absolute text-center font-semibold text-md dark:text-gray-50 text-gray-800'>{elem?.name}</div>
              </div>
            </>
          ))}
        </div>

        <div className={`2xl:w-[35vw] md:w-[45vw] 2xl:h-[35vw] md:h-[45vw] ${!view ? 'md:block' : 'md:hidden'} hidden absolute bottom-0 border rounded-full`}>
          <img draggable="false" onMouseEnter={() => setToggle(false)} onMouseLeave={() => setToggle(true)} src={skillBackground} className='w-[45vw] 2xl:w-[40vw] h-[25vw] 2xl:h-[20vw] overflow-clip transition-all duration-300 ease-in-out transform z-10 border-t-2 border-l-2 border-r-2 border-[#ffffff4d] rounded-t-full' alt="" srcset="" />
        </div>

      </div>
    </div>
  );
};

export default Skills;
