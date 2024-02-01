import React from 'react'
import Carousel from '../components/carousel'

import img1 from '../assets/questions/1.jpg'
import img2 from '../assets/questions/2.jpg'
import img3 from '../assets/questions/3.jpg'
import img4 from '../assets/questions/4.jpg'

export default function C1() {
  return (
    <>
      <h1>learn c1</h1>
      <Carousel  
        img1={img1} img2={img2} img3={img3} img4={img4}
      />
    </>
  )
}
