import React from "react";
import functionHOC from "./FunctionHOC";
import './Container.css'

function DogImages({ data }) {
  const imgs = data.message
  return (
    <div>
      {imgs &&
        imgs.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} className='container-img' />
        ))
      }
    </div>


  )
}

export default functionHOC(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);