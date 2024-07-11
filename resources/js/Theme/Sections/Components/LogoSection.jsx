import IdoMemberLogo from '@/Theme/Components/IdoMemberLogo'
import Logo from '@/Theme/Components/Logo'
import { usePage } from '@inertiajs/react'

export default function LogoSection({ place = 'header' }) {
  const { app, auth } = usePage().props

  return (
    <div className={`${place == 'header' ? 'hidden lg:flex mt-2' : 'md:flex'}`}>
      {auth?.user && <IdoMemberLogo />}
      {/* {auth?.user ? <Logo subname={app.subname} /> : <IdoMemberLogo />} */}
    </div>
  )
}
