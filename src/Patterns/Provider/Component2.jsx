import React, { useContext } from 'react'
import { DataContext } from './DataContext'

export default function Component2() {
  const { getAbout } = useContext(DataContext)

  return (
    <div>
      <br />
      <p>Componente 2</p>

      {getAbout()}
    </div >
  )
}