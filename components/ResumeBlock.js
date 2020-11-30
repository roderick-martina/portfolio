import React from 'react'
import {motion} from 'framer-motion'
import Stroke from './Stroke'

const ResumeBlock = ({title, width, color, list, children}) => {
  return (
    <div className="w-full sm:w-1/2">
      <div>
        <h4 className="font-bold text-3xl leading-none">{title}</h4>
        <div className="-mt-1">
          <Stroke width={width} color={color} />
        </div>
        <ul className="mt-10 space-y-10">
          {list.map(item => (
            <li className="w-full sm:w-1/2">
              <motion.a
                whileHover={{x: '4px', y: '-4px'}}
                href={item.link}
                target="_blank"
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center">
                  <h5 className="text-2xl font-semibold mr-2">{item.title}</h5>
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </div>

                <p className="text-lg font-semibold">{item.job}</p>
                <p className="text-lg">{item.period}</p>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumeBlock
