import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Heading from '../components/Heading'
import { footwear } from '../data'
import Card from '../components/card/Card'

export default function Footwear() {

    const cardElement = footwear.map((product) => (
        <Card key={product.id} product={product} />
    ))
      return (
        <div className="Footwear">
          <Navbar />
          <Heading heading={"FOOTWEAR"} />
          <section className='cards-list'>
            {cardElement}
          </section>
        </div>
      );
}