import React, { createContext, useState } from "react";


export const DataContext = createContext();

export function DataProvider({ children }) {
  const [about, setAbout] = useState('')

  const handleAbout = (value) => {
    setAbout(value)
    console.log('set about', value)
  }

  const getAbout = () => {
    console.log('about', about)
    return about
  }

  return (
    <DataContext.Provider
      value={{
        handleAbout,
        getAbout
      }}
    >
      {children}
    </DataContext.Provider>
  );

}
