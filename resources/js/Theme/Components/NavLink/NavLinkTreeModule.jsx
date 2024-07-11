import ThemeContext from '@/Context/ThemeContext'
import { permissions } from '@/Helpers/authorization'
import { Link, usePage } from '@inertiajs/react'
import { Fragment, useContext, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { FiCodesandbox } from 'react-icons/fi'

export default function NavLinkTreeModule({
  components,
  label,
  method = 'get',
  icon,
  childs,
  moduleType = false,
  ...props
}) {
  const { app, auth, page } = usePage().props

  const team_slug = auth.user.current_team.slug

  const { current_route } = app

  const { theme, updateTheme } = useContext(ThemeContext)

  function getActive() {
    if (moduleType) {
      return childs.some((c) => c.moduleName == page.module)
    } else {
      return components.includes(current_route)
    }
  }

  const isActive = getActive()

  const canAccess = components.some((c) => permissions().includes(c))

  const expanded = getActive()

  const [expand, setExpand] = useState(expanded)

  function onClickMaster() {
    setExpand(!expand)
  }

  const isDashboard = components.includes('dashboard.index')

  const isProfile = components.includes('my-profile.index')

  if (canAccess || isDashboard || isProfile)
    return (
      <Fragment>
        <button
          type="button"
          onClick={() => onClickMaster()}
          className={`relative flex-start gap-0 font-semibold text-gray-700 dark:text-white 
      ${isActive ? 'text-white' : 'hover:text-primary dark:hover:text-primary'}
      `}
        >
          <div
            className={`p-2 rounded-full z-50 ${isActive && 'text-primary text-xl'}`}
            title={label}
          >
            {icon}
            {/* <FiCodesandbox size={isActive ? 15 : 20} /> */}
          </div>
          {theme.sidebarOpen ? (
            <div
              className={`absolute z-10 flex-between w-full ml-4 px-4 rounded-full ${
                isActive && 'text-primary'
              }`}
            >
              &nbsp;&nbsp;
              {label}
              <div className="flex-end">
                {expand ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
          ) : (
            <p>&nbsp;</p>
          )}
        </button>

        {expand && (
          <div className="space-y-1">
            {childs.map((item, i) => {
              return (
                <NavChild
                  key={i}
                  child_route={item.child_route}
                  child_component={item.child_component}
                  current_route={current_route}
                  isActive={isActive}
                  theme={theme}
                  label={item.label}
                  team_slug={team_slug}
                  icon={item.icon}
                  moduleName={item.moduleName}
                  moduleType={moduleType}
                />
              )
            })}
          </div>
        )}
      </Fragment>
    )
}

const NavChild = ({
  child_route,
  child_component,
  current_route,
  theme,
  label,
  moduleType = false,
  moduleName = '',
  team_slug,
  icon,
}) => {
  const { module } = usePage().props.page

  function getActiveRoute() {
    if (moduleType) {
      return moduleName == module
    } else {
      return child_component == current_route
    }
  }

  const isActive = getActiveRoute()

  const canAccess = permissions().includes(child_component)

  const isDashboard = child_route == 'dashboard.index'

  const isProfile = child_route == 'my-profile.index'

  if (canAccess || isDashboard || isProfile)
    return (
      <Link
        href={child_route}
        className={`pl-2 flex-start gap-0 font-semibold text-gray-700 dark:text-white 
${isActive ? 'text-white' : 'hover:text-primary dark:hover:text-primary'}
`}
      >
        <div
          className={`p-2 rounded-full z-[51] ${isActive && 'shadow-md bg-primary'}`}
          title={label}
        >
          {icon}
        </div>
        {theme.sidebarOpen ? (
          <div
            className={`absolute z-50 flex-between ml-4 px-4 rounded-full ${
              isActive && 'shadow-md bg-primary'
            }`}
          >
            &nbsp;&nbsp;
            {label}
          </div>
        ) : (
          <p>&nbsp;</p>
        )}
      </Link>
    )
}
