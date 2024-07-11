import { useState, createContext, useContext, Fragment, useRef, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Transition } from '@headlessui/react'

const DropDownContext = createContext()

const Dropdown = ({ contentRef, children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  )
}

const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext)

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
    </>
  )
}

const Content = ({
  align = 'right',
  width = '48',
  contentClasses = 'py-2',
  children,
}) => {
  const { open, setOpen } = useContext(DropDownContext)

  const contentRef = useRef(null)

  let alignmentClasses = 'origin-top'

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0'
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0'
  }

  let widthClasses = ''

  if (width === '48') {
    widthClasses = 'min-w-[200px]'
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
        >
          <div
            ref={contentRef}
            className={
              `rounded-md ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-700 space-y-2 ` +
              contentClasses
            }
          >
            {children}
          </div>
        </div>
      </Transition>
    </>
  )
}

const DropdownLink = ({ className = '', children, ...props }) => {
  return (
    <Link
      {...props}
      className={
        'flex w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-white hover:bg-primary hover:text-white focus:outline-none focus:bg-primary focus:text-white transition duration-150 ease-in-out ' +
        className
      }
    >
      {children}
    </Link>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown
