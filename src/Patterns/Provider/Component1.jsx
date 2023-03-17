import React, { useContext } from 'react'
import { DataContext } from './DataContext'

export default function Component1() {
  const { handleAbout } = useContext(DataContext)

  const handleChange = (e) => {
    handleAbout(e.target.value)
  }

  return (
    <div>
      <p>Componente 1</p>
      <input type="text" required name='about' placeholder="Sobre" onChange={handleChange} />
    </div>
  )
}