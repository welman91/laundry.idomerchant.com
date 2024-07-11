import { fCurrency } from '@/Helpers/helper'
import { Fragment } from 'react'
import dayjs from 'dayjs'
import {
  TableContainerWrapper,
  TableWrapper,
  TbodyRowTdCell,
  TbodyRowWrapper,
  TbodySubtotalRowTemplate,
  TbodyWrapper,
  TheadRowWrapper,
  TheadWrapper,
} from './ReportTableTemplate'

export default function ReportTableWithGrouping({
  collection,
  columns,
  selectable = false,
  onSelect,
  withBorder = false,
  tableFooter,
}) {
  return (
    <TableContainerWrapper>
      <TableWrapper>
        <TheadWrapper>
          <TheadRowWrapper columns={columns} withBorder={withBorder} />
        </TheadWrapper>
        <TbodyWrapper>
          {collection.map((group, i) => (
            <Fragment key={i}>
              {group.items.map((item, ix) => (
                <TbodyRowWrapper
                  key={ix}
                  item={item}
                  selectable={selectable}
                  onSelect={onSelect}
                >
                  <TbodyRowTdCell item={item} columns={columns} rowIndex={ix} />
                </TbodyRowWrapper>
              ))}
              <tr className="bg-blue-100 dark:bg-blue-900 dark:text-white">
                <TbodySubtotalRowTemplate colSpan={4}>
                  Total For Date {dayjs(group.date).format('DD-MM-YYYY')}
                </TbodySubtotalRowTemplate>
                <TbodySubtotalRowTemplate>{group.qty}</TbodySubtotalRowTemplate>
                <TbodySubtotalRowTemplate>
                  {fCurrency(group.total)}
                </TbodySubtotalRowTemplate>
              </tr>
            </Fragment>
          ))}
        </TbodyWrapper>
        {tableFooter}
      </TableWrapper>
    </TableContainerWrapper>
  )
}
