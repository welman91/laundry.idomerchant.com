import { appTheme, appThemeKey } from '@/Helpers/helper'
import IdoMerchantLogo from '@/Theme/Components/IdoMerchantLogo'
import { useEffect } from 'react'

export default function Guest({ children }) {
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

  return (
    <div
      className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-[#0A1727]"
      style={{
        backgroundImage: `url('/images/background.webp')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <IdoMerchantLogo />

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-[#091019] shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}
