import ThemeContext from './Context/ThemeContext'
import { useEffect, useState } from 'react'
import { appThemeKey } from './Helpers/helper'

export default function ThemeContextProvider({ currentTheme, children }) {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    return localStorage.setItem(appThemeKey, JSON.stringify(currentTheme))
  }, [])

  const updateTheme = (newValue) => {
    const newTheme = {
      ...theme,
      ...newValue,
    }
    setTheme(newTheme)
    localStorage.setItem(appThemeKey, JSON.stringify(newTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
