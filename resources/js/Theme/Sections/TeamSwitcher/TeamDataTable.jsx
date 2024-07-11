import Table from '@/Theme/Components/DataTable/Table'
import { team } from '@/Helpers/getTeamSlug'
import { BsPatchCheck } from 'react-icons/bs'

export default function TeamDataTable({ search = '', onSelectTeam }) {
  // ALL COLUMNS BY DEFAULT 'sortable' IS TRUE & 'searchable' IS TRUE

  const team_id = team().id

  const columns = [
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Type',
      field: 'type',
      render: (row) => (
        <p
          className={`w-fit px-2 rounded-sm uppercase text-xs text-center text-white ${
            team_id === row.id ? 'bg-primary' : 'bg-orange-700'
          }`}
        >
          {row.type}
        </p>
      ),
    },
    {
      header: '',
      field: '__actions',
      sortable: false,
      searchable: false,
      bodyAlignment: 'center',
      render: Choosen,
    },
  ]

  function Choosen(row) {
    if (team_id === row.id) return <BsPatchCheck />
  }

  return (
    <Table
      fetchRoute={route('change-team.datatable', team().slug)}
      // app\Modules\TeamManagement\Table\ChangeTeamDataTable.php
      columns={columns}
      search={search}
      pagination
      rowSelection
      onSelectRow={onSelectTeam}
    />
  )
}
