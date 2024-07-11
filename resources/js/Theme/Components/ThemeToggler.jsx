import ThemeContext from '@/Context/ThemeContext'
import { appThemeKey } from '@/Helpers/helper'
import { useContext, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggler({ withLabel = false }) {
  const currentTheme = JSON.parse(localStorage.getItem(appThemeKey))

  const swap = (mode) => {
    if (mode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    // document.documentElement.classList.add('dark')
    if (currentTheme) swap(currentTheme.darkMode)
  }, [])

  const { theme, updateTheme } = useContext(ThemeContext)

  function changeTheme(mode) {
    swap(mode)
    updateTheme({
      ...theme,
      darkMode: mode,
    })
  }

  return theme.darkMode ? (
    <button
      type="button"
      onClick={() => changeTheme(false)}
      className="flex-start gap-2 rounded-lg text-sm p-2.5 text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
    >
      <FiMoon />
      {withLabel && 'Dark Mode'}
    </button>
  ) : (
    <button
      type="button"
      onClick={() => changeTheme(true)}
      className="flex-start gap-2 rounded-lg text-sm p-2.5 text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
    >
      <FiSun />
      {withLabel && 'Light Mode'}
    </button>
  )
}
