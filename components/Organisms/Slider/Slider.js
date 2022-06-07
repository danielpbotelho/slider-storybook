import { useState } from 'react'
import s from './Slider.module.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Card } from '../../Molecules/Card/Card'

export const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      loop: true,
      duration: 700,

      mode: 'snap',
      slides: {
        perView: 3.4,
        origin: 'center',
        spacing: 18,
      },

      slideChanged(e) {
        setSelectedIndex(e.track.details.rel)
      },
    },
    []
  )

  function changeIndex(newIndex) {
    slider.current.moveToIdx(newIndex)
    setSelectedIndex(newIndex)
  }

  return (
    <div className=" mt-20">
      <h1 className="  w-full text-center ">
        Don’t trust us, trust our clients
      </h1>
      <div ref={refCallback} className="keen-slider ">
        <Card
          index={1}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>

        <Card
          index={2}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={3}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>

        <Card
          index={4}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={5}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
        <Card
          index={0}
          currentIndex={selectedIndex}
          message={`Owning my home allowed me to
become an entrepreneur and
laid down a path to financial
freedom.`}
          changeIndexTo={changeIndex}
        ></Card>
      </div>
    </div>
  )
}
