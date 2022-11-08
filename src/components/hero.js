import { Link } from 'gatsby'
import * as React from 'react'
import badge from "../images/store-badge.svg"
import { StaticImage } from "gatsby-plugin-image"

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
      <span className="sr-only">MADIE</span>
        <StaticImage 
          src="../images/mockup.png"
          alt="Images de l'application" 
          placeholder="blurred"  
        />
      </div>
      <div className="lg:w-full flex justify-center  mt-5">
        <Link to='https://apps.apple.com/us/app/madie/id1591237213'>
          <img 
          src={badge} 
          className="object-fit" 
          width={192}
          height={60}
          alt="Boutons de telechargement de l'application ios" 
          />
        </Link>
    </div>
  </div>
  )
}

export default Hero