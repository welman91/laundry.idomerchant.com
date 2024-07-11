const TableContainerWrapper = ({ children }) => {
  return <div className="overflows-x-auto overflow-autox py-2">{children}</div>
}

const TableWrapper = ({ children }) => {
  return (
    <table className="w-full border-2 border-black dark:border-white text-xs whitespace-nowrap">
      {children}
    </table>
  )
}

const TheadWrapper = ({ children }) => {
  return <thead className="text-gray-700 dark:text-white bg-[#444444]">{children}</thead>
}

const TheadRowWrapper = ({ columns, withBorder = false }) => {
  return (
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
  )
}

const TbodyWrapper = ({ children }) => {
  return <tbody>{children}</tbody>
}

const TbodyRowWrapper = ({ item, selectable = false, onSelect, children }) => {
  return (
    <tr
      onClick={() => (selectable ? onSelect(item) : {})}
      className={`hover:bg-teal-200 dark:hover:bg-teal-800 odd:bg-[#E9E9ED] odd:dark:bg-[#1b1b1b] ${
        selectable && 'cursor-pointer'
      } ${
        item.deleted_at &&
        'bg-[#ffadad] dark:bg-[#410b0b] hover:bg-[#ffadad] dark:hover:bg-[#410b0b]'
      }`}
      style={{ backgroundColor: item.deleted_at && '#410b0b' }}
    >
      {children}
    </tr>
  )
}

const TbodyRowTdCell = ({ item, columns, rowIndex, withBorder = false }) => {
  return columns.map((col, ic) => {
    function getBodyAlignment() {
      if (!col.bodyAlignment || col.bodyAlignment === 'left') return 'text-start'
      if (col.bodyAlignment === 'center') return 'text-center'
      if (col.bodyAlignment === 'right') return 'text-end'
    }

    function rowValue() {
      if (col.render) {
        return col.render(item, rowIndex)
      } else {
        if (col.field === 'no') {
          return <p>{rowIndex + 1}</p>
        } else {
          return <p>{item[col.field]}</p>
        }
      }
    }

    return (
      <td
        key={ic}
        align="center"
        className={`first:pl-4 last:pr-4 px-2 py-2 text-sm border-b border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 ${
          withBorder && 'border border-gray-700 dark:border-white'
        } ${getBodyAlignment()}`}
      >
        {rowValue()}
      </td>
    )
  })
}

const TbodySubtotalRowTemplate = ({ children, colSpan = 1 }) => {
  return (
    <td colSpan={colSpan} className="text-right">
      <p className="italic text-base pr-2 font-bold">{children}</p>
    </td>
  )
}

export {
  TableContainerWrapper,
  TableWrapper,
  TheadWrapper,
  TheadRowWrapper,
  TbodyWrapper,
  TbodyRowWrapper,
  TbodyRowTdCell,
  TbodySubtotalRowTemplate,
}
