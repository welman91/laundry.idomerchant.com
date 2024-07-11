import ThemeContext from '@/Context/ThemeContext'
import { usePage } from '@inertiajs/react'
import { Fragment, useContext } from 'react'
import AuthenticatedNavigations from './Components/AuthenticatedNavigations'
import LogoSection from './Components/LogoSection'

export default function Sidebar() {
  const { theme, updateTheme } = useContext(ThemeContext)

  const user = usePage().props.auth?.user
  return (
    <Fragment>
      <div className="z-10 hidden lg:block">
        <SidebarBigScreen theme={theme}>
          {user && <AuthenticatedNavigations user={user} />}
        </SidebarBigScreen>
      </div>
      <div className="z-10 lg:hidden">
        <SidebarSmallScreen theme={theme}>
          {user && <AuthenticatedNavigations user={user} />}
        </SidebarSmallScreen>
      </div>
    </Fragment>
  )
}

const SidebarBigScreen = ({ theme, children }) => {
  return (
    <div
      id="sidebar"
      className={`fixed h-screen overflow-y-auto pt-4 pb-20 bg-[#EDF2F9] dark:bg-[#0A1727] ${
        theme.sidebarOpen ? 'w-60' : 'w-10'
      }`}
    >
      <div className="flex flex-col space-y-4">{children}</div>
    </div>
  )
}

const SidebarSmallScreen = ({ theme, children }) => {
  return (
    <div
      id="sidebar"
      className={`fixed px-2 h-screen overflow-y-auto pt-4 pb-20 bg-[#EDF2F9] dark:bg-[#0A1727] w-60  ${
        !theme.sidebarShow && 'hidden'
      }`}
    >
      <div className="px-2 pb-4 lg:hidden">
        {/* <Logo /> */}
        <LogoSection place="sidebar" />
        {/* <Logo subname={app.subname} /> */}
      </div>
      <div className="flex flex-col space-y-4">{children}</div>
    </div>
  )
}
