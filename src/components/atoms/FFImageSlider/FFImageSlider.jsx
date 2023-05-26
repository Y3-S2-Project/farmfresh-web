import React from 'react'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './slider.css'
export default function FFImageSlider({ images }) {
  const sliderImages = !Array.isArray(images) ? [images] : images
  const [activeImageNum, setCurrent] = useState(0)
  const length = sliderImages.length
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1)
  }
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1)
  }
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null
  }
  return (
    <div className="">
      <section className="image-slider">
        <div className="z-10 absolute text-black top-1/2 cursor-pointer transform -translate-y-1/2 left-0">
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        <div className="z-10 absolute text-black top-1/2 cursor-pointer transform -translate-y-1/2 right-0">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
        {sliderImages &&
          sliderImages.map((currentSlide, ind) => {
            console.log('88')
            return (
              <div
                className={
                  ind === activeImageNum
                    ? 'currentSlide active shadow-lg'
                    : 'currentSlide  shadow-sm'
                }
                key={ind}
              >
                {ind === activeImageNum && (
                  <img src={currentSlide} className="image" />
                )}
              </div>
            )
          })}
      </section>
    </div>
  )
}
