import { Fragment } from 'react'
import { FiCodesandbox } from 'react-icons/fi'
import { FaDoorOpen, FaPeopleGroup } from 'react-icons/fa6'
import NavLink from '@/Theme/Components/NavLink/NavLink'

export default function AuthenticatedNavigations({ user }) {
  const team_slug = user.current_team.slug
  return (
    <Fragment>
      {/* dashboard */}
      <NavLink
        navRoute={route('dashboard.index', team_slug)}
        components={['dashboard.index']}
        label="Dashboard"
        icon={<FiCodesandbox />}
      />

      {/* customer-master */}
      <NavLink
        navRoute={route('customer-master.index', team_slug)}
        components={['customer-master.index']}
        label="Customer"
        icon={<FaPeopleGroup />}
      />

      {/* LOGOUT */}
      <NavLink
        navRoute={route('logout')}
        components={['logout']}
        label="Logout"
        method="post"
        as="button"
        icon={<FaDoorOpen />}
      />
    </Fragment>
  )
}
