import React, { useState, createContext } from "react";

export const SettingsContext = createContext();
export const SettingsContextProvider = props => {
  // COLOR THEME
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