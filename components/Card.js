import React from 'react'
import Image from 'next/image'

const Card = ({item, children, className = ''}) => {
  return (
    <div
      className={`w-full md:w-1/2 bg-grey-lightest rounded mb-4 ${className}`}
    >
      <Image src={item.img} alt={item.alt} width={1706} height={1672} />
      <p className="font-bold text-xl uppercase mt-4">{item.title}</p>
      <p className="text-sm text-gray-900">
        {item.fictional ? 'Fictief' : 'Non fictief'}
      </p>
      <div className="mt-4 text-grey-darkest font-medium text-xl">
        {children}
      </div>
      <a href={item.link} target="_blank">
        <button className="mt-4 mr-4 focus:outline-none text-primary hover:border-b-2 hover:border-primary pb-1">
          <i className="fab fa-chrome mr-2"></i>
          Bekijk website
        </button>
      </a>
      {item.githubUrl.length > 0 && (
        <a
          href="https://github.com/roderick-martina/healthlab-api"
          target="_blank"
        >
          <button className="mt-4 focus:outline-none text-primary border-b-2 border-transparent hover:border-b-2 hover:border-primary pb-1">
            <i className="fab fa-github"></i>
            Github
          </button>
        </a>
      )}
    </div>
  )
}

export default Card
