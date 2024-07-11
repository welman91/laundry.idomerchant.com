import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function PopoverButton({
  label,
  onConfirm,
  position = 'left',
  disabled = false,
  children,
}) {
  return (
    <div className="w-full flex-end">
      <Popover>
        {({ open, close }) => {
          const onClickYes = () => {
            close()
            onConfirm()
          }
          return (
            <>
              <Popover.Button
                disabled={disabled}
                className={`outline-none flex-center ${open ? '' : 'text-opacity-90'} `}
              >
                {label}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className={`absolute z-[999999999999] mt-1 px-6 ${
                    position === 'right' ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <div className="bg-gray-100">
                      <div className="p-4 pb-0">{children}</div>
                      <div className="mt-4 flex-between border-t">
                        <button
                          type="button"
                          onClick={() => close()}
                          className="w-full p-3 font-bold text-indigo-600 border-r disabled:text-gray-300"
                        >
                          No
                        </button>
                        <button
                          type="button"
                          onClick={() => onClickYes()}
                          className="w-full p-3 font-bold text-indigo-600 border-l"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )
        }}
      </Popover>
    </div>
  )
}
