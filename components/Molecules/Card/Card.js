import { useState } from 'react'
import s from './Card.module.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export const Card = ({
  index,
  message,
  currentIndex,
  changeIndexTo,
  children,
  isLast,
}) => {
  return (
    <div className={`keen-slider__slide  flex flex-col `}>
      <div
        className={` w-[400px] h-[400px] ${
          currentIndex === index ? 'bg-green-400' : 'bg-black'
        } text-white cursor-pointer  `}
        onClick={() => {
          if (!isLast) {
            changeIndexTo(index)
            return
          }
          changeIndexTo(0)
        }}
      >
        {index}

        {children}
      </div>
      <div
        className={`${currentIndex === index ? 'flex' : 'hidden'} text-black`}
      >
        {message}
      </div>
    </div>
  )
}
