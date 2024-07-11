import ThemeContext from '@/Context/ThemeContext'
import { useContext } from 'react'
import { CgArrowsHAlt } from 'react-icons/cg'

export default function FluidToggler() {
  const { theme, updateTheme } = useContext(ThemeContext)

  const toggleFluid = () => {
    updateTheme({
      ...theme,
      fluidMode: !theme.fluidMode,
    })
  }

  return (
    <button
      type="button"
      onClick={() => toggleFluid()}
      className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary"
    >
      <CgArrowsHAlt />
    </button>
  )
}
