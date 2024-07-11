import DataTable from '@/Theme/Components/DataTable/DataTable'
import { usePage } from '@inertiajs/react'
import { Fragment } from 'react'
import { BiPlus } from 'react-icons/bi'
import { customerMasterColumns } from '@/Pages/Modules/CustomerMaster/CustomerMasterColumns'
import PrimaryButton from '@/Theme/Components/Buttons/PrimaryButton'

export default function ModelDataTable({ onClickNew }) {
  const { page, collection, permissions } = usePage().props
  const { module, slug, routes } = page

  function getColumns() {
    let columns
    switch (module) {
      case 'customer-master':
        columns = customerMasterColumns
        break
    }

    return columns
  }

  if (!getColumns()) return console.error('Error, columns not found!')

  return (
    <DataTable
      collection={collection}
      columns={getColumns()}
      ActionsButton={permissions.canCreate && <ActionsButton onClickNew={onClickNew} />}
      withSearch
      withPagination
      resetRouteRedirect={route(routes.index, slug)}
    />
  )
}

const ActionsButton = ({ onClickNew }) => {
  return (
    <Fragment>
      <PrimaryButton onClick={onClickNew}>
        <BiPlus />
        New
      </PrimaryButton>
    </Fragment>
  )
}
