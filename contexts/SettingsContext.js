import React, { useState, createContext } from "react";

export const SettingsContext = createContext();
export const SettingsContextProvider = props => {
  // COLOR THEME
  const lightTheme = {
    name: "light",
    fontColor: "#000",
    bgColor: "#FFF",
    bgAccentColor: "#DDD",
  }
  const darkTheme = {
    name: "dark",
    fontColor: "#FFF",
    bgColor: "#000",
    bgAccentColor: "#222",
  }
  const [colorTheme, setColorTheme] = useState(darkTheme)  // or {lightTheme}  
  function toggleColorTheme(event) {
    event.preventDefault()
    setColorTheme((prev) => (prev === lightTheme) ? darkTheme : lightTheme)
  }
  
  const settingsContext = {
    colorTheme,
    toggleColorTheme,
  }
  
  return (
    <SettingsContext.Provider 
      value={settingsContext} 
      children={props.children}
    />
  )
};