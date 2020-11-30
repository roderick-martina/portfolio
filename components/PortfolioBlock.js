import React from 'react'
import propTypes from 'prop-types'
import Image from 'next/image'

const PortfolioBlock = ({item, color}) => {
  const style = {
    backgroundColor: color,
  }
  return (
    <div className="w-full md:w-1/2 flex  rounded">
      <div className="w-full flex flex-col md:flex-row py-2 px-4" style={style}>
        <div className="w-full md:w-1/2">
          <Image
            src={item.img}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="rounded pt-2"
            priority={true}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col px-1 md:px-12">
          <p className="mt-6 md:mt-12 text-3xl font-bold">{item.title}</p>
          <p className="mt-2 text-xl">{item.shortDescription}</p>
          <a
            href={item.link}
            className="w-full mt-4 mb-2 md:mb-0 md:mt-10 bg-black rounded px-4 py-3 text-white"
            target="_blank"
          >
            Bezoek
          </a>
        </div>
      </div>
    </div>
  )
}

PortfolioBlock.propTypes = {
  item: propTypes.object.isRequired,
  color: propTypes.string.isRequired,
}

export default PortfolioBlock
