import React from "react";
import './Container.css'

export default function ExChildren({ dogs }) {
  return dogs.map((dog, i) => <img className='container-img' src={dog} key={i} alt="Dog" />);
}