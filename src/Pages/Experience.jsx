import React from 'react'
import ExperienceRow from './ExperienceRow'
import Atropos from 'atropos/react';

const Experience = () => {
  return (
    <>

      <div className='flex gap-x-4 gap-y-6 flex-wrap justify-evenly items-stretch px-6 md:px-0 '>

        {/* <div className='w-full hidden md:flex justify-center items-center md:w-[40%]'>
        <img  draggable="false"src="./exp.png" alt="" srcset="" className='image hover:scale-105 drop-shadow-2xl transition-all duration-300 hover:transform hover:scale-x-[0.7] hover:skew-y-3'/>
      </div> */}

        {/* <div className='w-full flex flex-col gap-4 '> */}
        {/* <Atropos> */}
        <ExperienceRow
          image={'./zeqoon.png'}
          // title={'Zeqon Enterprises'}
          post={"Zeqon Enterprises"}
          desc={'Developed College and Universities websites'}
          skill={"Freelance"}
          fDate={"April '22"}
          tDate={"July '22"} />
        {/* </Atropos> */}

        {/* <Atropos> */}
        <ExperienceRow
          image={'./aadrika.png'}
          // title={'Aadrika Enterprises'}
          post={"Aadrika Enterprises"}
          desc={'Worked on the development of a browser and mobile based application for E-Governance projects'}
          skill={"Full Time"}
          fDate={"Aug '22"}
          tDate={"Dec '23"}
        />

        <ExperienceRow
          image={'./framework.png'}
          // title={'Aadrika Enterprises'}
          post={"Framework Futuristic"}
          desc={'Worked on the development of a browser and mobile based application for News Channel'}
          skill={"Freelance"}
          fDate={"Oct '23"}
          tDate={"Dec '23"}
        />

        <ExperienceRow
          image={'./gtropy.png'}
          // title={'Gtropy (MapmyIndia)'}
          post={"GTROPY ( Mapmyindia )"}
          desc={'Working on the development of a browser and mobile based application.'}
          skill={"Full Time"}
          fDate={"Jan '24"}
          tDate={"till"}
        />

        {/* </Atropos> */}
        {/* </div> */}

      </div>

    </>
  )
}

export default Experience