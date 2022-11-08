import { Link } from 'gatsby'
import * as React from 'react'
import mockup from "../images/mockup.png"
import badge from "../images/store-badge.svg"

const Hero = () => {

  return (
    <div className="pb-8 flex flex-col lg:flex-row flex-wrap justify-between mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
      <div className="flex flex-col justify-center lg:w-1/2 sm:text-center lg:text-left mt-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Organisez efficacement vos interventions avec </span>{' '}
          <span className="block text-violet-600 xl:inline">MADIE</span>
        </h1>
      </div>
      <div className='lg:w-1/2  mt-5'>
        <img src={mockup} ></img>
      </div>
      <div className="lg:w-full flex justify-center  mt-5">
        <Link to='https://apps.apple.com/us/app/madie/id1591237213'>
          <img src={badge} className="object-fit w-48" />
        </Link>
    </div>
  </div>
  )
}

export default Hero