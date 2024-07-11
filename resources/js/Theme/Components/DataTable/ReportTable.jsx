import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { DebounceInput } from 'react-debounce-input'
import { FaRegTimesCircle } from 'react-icons/fa'

export default function ReportTable({
  title,
  collection,
  columns,
  defaultRowsPerPage = 5,
  selectable = false,
  onSelect,
  withExtraHeader,
  tableFooter = null,
  withCopyHeaderToFooter = false,
  withBorder = false,
  withSearch = false,
  search,
  onSearch,
}) {
  const getDefaultRowsPerPage = () => {
    if (defaultRowsPerPage == 5) return [5, 10, 25, 50, 100]
    if (defaultRowsPerPage == 25) return [25, 50, 100]
  }

  const perPageView = getDefaultRowsPerPage()

  const [currentPage, setCurrentPage] = useState(1)

  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)

  const totalPages = Math.ceil(collection.length / rowsPerPage)

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = parseInt(startIndex) + parseInt(rowsPerPage)

  const from = startIndex + 1
  const to = endIndex > collection.length ? collection.length : endIndex

  function onTypeSearch(q) {
    setCurrentPage(1)
    onSearch(q)
  }

  function onChangeRowsPerPage(val) {
    setCurrentPage(1)
    setRowsPerPage(val)
  }

  console.log(collection)

  return (
    <div className="w-full p-2 rounded-lg shadow-xl bg-white dark:bg-[#232E3C]">
      {withExtraHeader}
      <header className="flex-start gap-2 pb-2 text-gray-700 dark:text-white">
        {title !== undefined && (
          <div className="w-6/12 font-bold text-lg text-left">{title}</div>
        )}
        <div className="w-full">
          {withSearch && (
            <SearchBoxForReportTable search={search} setSearch={onTypeSearch} />
          )}
        </div>
      </header>
      {/* TODO HARUS DIANTISIPASI MENU DROPDOWN JADI GAK NAMPAK KETIKA OVERFLOW AUTO */}
      <div className="overflows-x-auto overflow-autox py-2">
        <table className="w-full border-2 border-black dark:border-white text-xs whitespace-nowrap">
          <thead className="text-gray-700 dark:text-white bg-[#444444]">
            <tr>
              {columns.map((column, i) => {
                const getHeaderAlignment = () => {
                  if (!column.headerAlignment || column.headerAlignment === 'left')
                    return 'flex-start'
                  if (column.headerAlignment === 'center') return 'flex-center'
                  if (column.headerAlignment === 'right') return 'flex-end'
                }
                return (
                  <th
                    key={i}
                    className={`first:pl-4 last:pr-4 px-2 py-2 font-normal text-sm border border-white text-white ${
                      withBorder && 'border border-gray-700 dark:border-white'
                    }`}
                  >
                    <p
                      className={`font-bold not:hover:text-gray-700 dark:not:hover:text-white select-none whitespace-nowrap ${getHeaderAlignment()} `}
                    >
                      {column.renderHeader ? column.renderHeader(column) : column.header}
                    </p>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {collection?.slice(startIndex, endIndex).map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  onClick={() => (selectable ? onSelect(row) : {})}
                  className={`hover:bg-teal-200 dark:hover:bg-teal-800 odd:bg-[#E9E9ED] odd:dark:bg-[#1b1b1b] ${
                    selectable && 'cursor-pointer'
                  } ${
                    row.deleted_at &&
                    'bg-[#ffadad] dark:bg-[#410b0b] hover:bg-[#ffadad] dark:hover:bg-[#410b0b]'
                  }`}
                  style={{ backgroundColor: row.deleted_at && '#410b0b' }}
                >
                  {columns.map((col, i) => {
                    function getBodyAlignment() {
                      if (!col.bodyAlignment || col.bodyAlignment === 'left')
                        return 'text-start'
                      if (col.bodyAlignment === 'center') return 'text-center'
                      if (col.bodyAlignment === 'right') return 'text-end'
                    }
                    return (
                      <td
                        key={i}
                        align="center"
                        className={`first:pl-4 last:pr-4 px-2 py-2 text-sm border-b border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 ${
                          withBorder && 'border border-gray-700 dark:border-white'
                        } ${getBodyAlignment()}`}
                      >
                        {/* {col.rowIndex && <p>{rowIndex + 1}</p>} */}
                        {col.render ? col.render(row, rowIndex) : <p>{row[col.field]}</p>}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
          {tableFooter}
          {withCopyHeaderToFooter && (
            <tfoot className="text-white bg-[#444444]">
              <tr>
                {columns.map((column, i) => {
                  const getHeaderAlignment = () => {
                    if (!column.headerAlignment || column.headerAlignment === 'left')
                      return 'flex-start'
                    if (column.headerAlignment === 'center') return 'flex-center'
                    if (column.headerAlignment === 'right') return 'flex-end'
                  }
                  return (
                    <th
                      key={i}
                      className={`first:pl-4 last:pr-4 px-2 py-2 font-normal text-sm ${
                        withBorder && 'border border-white'
                      }`}
                    >
                      <p
                        className={`font-bold not:hover:text-gray-700 dark:not:hover:text-white select-none whitespace-nowrap ${getHeaderAlignment()} `}
                      >
                        {column.renderHeader
                          ? column.renderHeader(column)
                          : column.header}
                      </p>
                    </th>
                  )
                })}
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {collection.length > 0 && (
        <footer className="flex-between mt-2 space-y-1 text-gray-700 dark:text-white bxg-[#EDF2Fs9] dark:bg-[#232E3C] ">
          <div className="flex-start gap-1">
            <div className="w-full rounded-md text-gray-700 dark:text-white dark:bg-[#0B1727]">
              <p className="flex-center gap-1 px-4 py-2 ">Show</p>
            </div>
            <select
              className="text-sm rounded-md border-1 dark:border-0 border-gray-300 text-gray-700 dark:text-white dark:bg-[#0B1727]"
              value={rowsPerPage}
              onChange={(e) => onChangeRowsPerPage(e.target.value)}
            >
              {perPageView?.map((p, i) => {
                return (
                  <option value={p} key={p}>
                    {p}
                  </option>
                )
              })}
            </select>
          </div>
          {collection?.length > 0 && (
            <div className="flex-between gap-1">
              <PageNavButton
                onClick={prevPage}
                disabled={currentPage === 1}
                icon={<AiOutlineArrowLeft />}
              />
              <div className="w-full rounded-md text-gray-700 dark:text-white dark:bg-[#0B1727]">
                <p className="flex-center gap-1 px-4 py-2 ">
                  {`Page ${currentPage} / ${totalPages}. Item ${from}-${to} of ${collection.length}`}
                </p>
              </div>

              <PageNavButton
                onClick={nextPage}
                disabled={currentPage === totalPages}
                icon={<AiOutlineArrowRight />}
              />
            </div>
          )}
        </footer>
      )}

      {collection.length == 0 && (
        <p className="text-center py-2 text-gray-700 dark:text-white">No data found...</p>
      )}
    </div>
  )
}

const PageNavButton = ({ onClick, disabled, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="text-sm flex-center gap-1 px-4 py-2 h-[40px] rounded-md 
      text-gray-700 dark:text-white 
      dark:bg-[#0B1727] 
      disabled:text-gray-400 disabled:dark:text-gray-500
      hover:text-primary hover:dark:text-primary
      "
    >
      {icon}
    </button>
  )
}

const SearchBoxForReportTable = ({ search, setSearch }) => {
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
      className="w-full px-4 text-sm bg-white border-2 border-gray-300 rounded-lg flex-start appearance-none dark:border-gray-700 dark:bg-black"
    >
      <FiSearch className="text-gray-700 txext-sm dark:text-white" />

      <div className="w-full flex-between">
        <DebounceInput
          type="search"
          name="searchbar"
          className="w-full h-[32px] text-sm text-gray-700 bg-transparent border-none dark:bg-transparent focus:border-none focus:ring-0 dark:text-white"
          placeholder="Search..."
          spellCheck={false}
          minLength={1}
          debounceTimeout={800}
          forceNotifyByEnter={true}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
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
