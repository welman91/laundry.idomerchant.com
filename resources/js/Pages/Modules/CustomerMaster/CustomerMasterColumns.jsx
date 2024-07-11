import { fDate } from '@/Helpers/helper'
import ModelActions from '@/Pages/Template/Components/DataTable/ModelActions'
import ContactNumberTemplate from '@/Theme/Components/DataTable/CellTemplates/ContactNumberTemplate'
import Pill from '@/Theme/Components/Pill'

// ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE
export const customerMasterColumns = [
  {
    header: '',
    field: '__actions',
    sortable: false,
    searchable: false,
    bodyAlignment: 'center',
    render: (row) => <ModelActions row={row} />,
  },
  {
    header: 'No.',
    field: 'reg_no',
  },
  {
    header: 'Name',
    field: 'name',
  },
  {
    header: 'Contact',
    field: 'mobile',
    render: (row) => <ContactNumberTemplate row={row} />,
  },
  {
    header: 'Address',
    field: 'address',
  },
  {
    header: 'Reg. Date',
    field: 'reg_date',
    render: (row) => <p>{fDate(row.reg_date)}</p>,
    searchable: false,
  },
  {
    header: 'Status',
    field: 'cust_status',
    render: (row) => <Pill css={row.status.css} name={row.status.name} />,
    searchable: false,
  },
  {
    header: '',
    field: 'deleted_at',
    render: (row) =>
      row.deleted_at && <p className="text-red-800 dark:text-red-300">Deleted</p>,
    sortable: false,
    searchable: false,
  },
]
