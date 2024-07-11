import SidebarToggler from '@/Theme/Components/SidebarToggler'
import { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react'
import HeaderTogglerButtons from '@/Theme/Components/HeaderTogglerButtons'
import UserHeaderMenu from '../Components/UserHeaderMenu'
import TeamSwitcherButton from './TeamSwitcher/TeamSwitcherButton'
import LogoSection from './Components/LogoSection'

export default function Header() {
  const { app, auth } = usePage().props

  const user = auth?.user

  const [scrolled, setScrolled] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setScrolled(currentScrollPos === 0 ? false : true)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const [search, setSearch] = useState('')

  return (
    <div
      id="header"
      className={`sticky top-0 z-10 w-full pl-4 md:pl-4 lg:pl-2 pxr-4 flex-none flex-between md:gap-10 bg-[#EDF2F9] dark:bg-[#0A1727]
    ${scrolled && 'content-header-elevate'}
    `}
    >
      <div className="w-full md:w-60xxg flex-start gap-8">
        <SidebarToggler />
        <LogoSection />
        {/* <div className="hidden md:flex mt-2">{user ? <Logo /> : <IdoMemberLogo />}</div> */}

        <div className="w-1/2 md:hidden">
          {/* <SearchBox search={search} setSearch={setSearch} /> */}
        </div>
      </div>

      <div className="w-d20 md:w-fuxll flex-between py-3 pxx-4">
        <div className="hidden md:flex w-full md:w-x60">
          {/* <SearchBox search={search} setSearch={setSearch} /> */}
        </div>

        <div className="flex-end w-1s/2 gap-2xx">
          {user && <TeamSwitcherButton />}
          <HeaderTogglerButtons className="hidden md:flex" />
          {user && <UserHeaderMenu user={user} />}
        </div>
      </div>
    </div>
  )
}
