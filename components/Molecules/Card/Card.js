import { useState } from 'react'
import s from './Card.module.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Text } from '@/components/Atoms'

export const Card = ({
  index,
  message,
  detail,
  currentIndex,
  changeIndexTo,
  children,
  isLast,
}) => {
  return (
    <div className={`keen-slider__slide sm:w-[440px]  flex flex-col `}>
      <div
        className={` aspect-square rounded-lg w-full text-center  ${
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
      <div className={`${currentIndex === index ? 'block' : 'hidden'}`}>
        <Text
          variant="paragraph"
          additionalClasses={` text-black mt-[36px] sm:mt-[48px] mb-[24px] sm:mb-[56px]`}
        >
          {message}
        </Text>

        <Text
          variant="text-detail"
          additionalClasses="pb-[10px] pr-[24px] sm:pr-0"
        >
          {detail}
        </Text>
      </div>
    </div>
  )
}
