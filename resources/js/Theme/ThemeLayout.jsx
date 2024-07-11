import { Fragment, useContext } from 'react'
import Sidebar from '@/Theme/Sections/Sidebar'
import SidebarOverlay from '@/Theme/Components/SidebarOverlay'
import Header from '@/Theme/Sections/Header'
import { Head } from '@inertiajs/react'
import { Toaster } from 'react-hot-toast'
import FullscreenToggler from './Components/FullscreenToggler'
import ThemeToggler from './Components/ThemeToggler'
import ThemeContext from '@/Context/ThemeContext'

export default function ThemeLayout({ title, children }) {
  const { theme, updateTheme } = useContext(ThemeContext)

  return (
    <Fragment>
      <Head title={title} />
      <Toaster />

      {theme?.fullscreen && <FullscreenToggler />}

      <div className="hidden">
        <ThemeToggler />
      </div>

      <div className="min-h-screen flex-center bg-[#EDF2F9] dark:bg-[#0A1727]">
        <div
          className={`relative min-h-screen flex flex-col w-full ${
            !theme?.fluidMode
              ? 'md:w-full lg:w-3/4 xl:px-0'
              : !theme?.fullscreen
              ? 'lg:px-4'
              : 'lg:px-0'
          }`}
        >
          {!theme?.fullscreen && <Header />}

          {/* For mobile sidebar overlaying when open */}
          <SidebarOverlay />

          {/* body */}
          <div className="flex-grow flex gap-1 overflow-auto">
            {!theme?.fullscreen && <Sidebar />}
            <div
              className={`w-full h-full p-4 space-y-4 ${
                theme?.sidebarOpen ? 'lg:ml-60' : theme?.fullscreen ? 'ml-0' : 'ml-8'
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
