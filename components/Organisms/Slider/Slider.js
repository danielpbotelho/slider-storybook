import { useState } from 'react'
import s from './Slider.module.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Card } from '../../Molecules/Card/Card'
import { ArrowIcon } from '../../Atoms/Icons/Icons'

export const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      loop: true,
      duration: 1000,

      mode: 'snap',
      slides: {
        perView: 1.4,
        spacing: 24,
      },

      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            perView: 3.4,
            origin: 'center',
            spacing: 18,
          },
        },
      },

      slideChanged(e) {
        setSelectedIndex(e.track.details.rel + 1)
      },
    },
    []
  )

  function changeIndex(newIndex) {
    if (newIndex === 0) {
      newIndex = slider.current.slides.length
    }
    slider.current.moveToIdx(newIndex - 1)
  }

  return (
    <div className="w-full flex relative">
      <div ref={refCallback} className="keen-slider">
        <Card
          index={1}
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>

        <Card
          index={2}
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={3}
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>

        <Card
          index={4}
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={5}
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={6}
          isLast
          currentIndex={selectedIndex}
          detail={`Client in Atlanta`}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
      </div>
      <ButtonPanel
        nextIndex={selectedIndex + 1}
        prevIndex={selectedIndex - 1}
        changeIndex={changeIndex}
      />
    </div>
  )
}

const ButtonPanel = ({ nextIndex, prevIndex, changeIndex }) => {
  return (
    <div className="grid grid-cols-2 gap-[7px] items-center absolute  bottom-0 sm:bottom-[5px]   sm:left-[22%]  right-[24px]  sm:right-0 sm:mx-auto select-none ">
      <div
        className="cursor-pointer"
        onClick={() => {
          changeIndex(prevIndex)
        }}
      >
        <ArrowIcon isReversed />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          changeIndex(nextIndex)
        }}
      >
        <ArrowIcon />
      </div>
    </div>
  )
}
