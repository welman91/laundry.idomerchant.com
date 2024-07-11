import { useRef } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

export default function SearchBox({
  search,
  setSearch,
  searchField,
  searchFields,
  onSelectSearchField,
  autoFocus,
}) {
  const ref = useRef(null)

  function onFocus(e) {
    ref.current?.classList.add('border-primary-700')
    ref.current?.classList.add('dark:border-primary-700')
  }
  function onBlur(e) {
    ref.current?.classList.remove('border-primary-700')
    ref.current?.classList.remove('dark:border-primary-700')
    ref.current?.classList.add('border-gray-300')
    ref.current?.classList.add('dark:border-gray-700')
  }

  return (
    <div
      ref={ref}
      className="w-full text-sm flex-start rounded-full appearxance-none border-2 px-4 border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
    >
      {/*  */}
      <div className="flex-start">
        <FiSearch className="txext-sm text-gray-700 dark:text-white" />
        <select
          className="text-sm border-none font-bold focus:border-none focus:ring-0 bg-trxansparent 
          bg-white dark:bg-black text-gray-700 dark:text-white cursor-pointer"
          value={searchField}
          onChange={onSelectSearchField}
        >
          {searchFields?.map((item, i) => {
            return (
              <option key={i} value={item.field}>
                {item.header}
              </option>
            )
          })}
        </select>
      </div>

      <p className="text-xl text-gray-300 dark:text-gray-600">|</p>
      <div className="w-full flex-between">
        <DebounceInput
          type="search"
          name="searchbar"
          className="w-full text-sm bg-transparent dark:bg-transparent border-none focus:border-none focus:ring-0 text-gray-700 dark:text-white"
          placeholder="Search..."
          spellCheck={false}
          minLength={1}
          debounceTimeout={500}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
        />
        {search && (
          <button
            type="button"
            className="text-gray-500 dark:text-white"
            onClick={() => setSearch('')}
          >
            <FaRegTimesCircle />
          </button>
        )}
      </div>
      {/*  */}
    </div>
  )
}
