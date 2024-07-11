import Modal from '@/Theme/Components/Modal'
import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import { Fragment, useState } from 'react'
import { FaSort } from 'react-icons/fa'
import { router, usePage } from '@inertiajs/react'
import TeamDataTable from './TeamDataTable'
import { getMaxWidth } from '@/Helpers/helper'

export default function TeamSwitcherButton() {
  const [visible, setVisible] = useState(false)

  const props = usePage().props

  const current_route = props.app.current_route

  const { user } = props.auth

  const { current_team, personal_team } = user

  function canChangeTeam() {
    // if (personal_team.type !== 'hosting') return false
    // if (!['adm', 'ict', 'noc'].includes(user.user_department)) return false
    // return true
    return false
  }

  const onClick = () => {
    if (!canChangeTeam()) return
    setVisible(true)
  }

  const submit = (e) => {
    e.preventDefault()
  }

  const onSelectTeam = (row) => {
    if (current_team.id === row.id) return

    router.patch(
      route('change-team.update', [current_team.slug, row.id]),
      {
        team_id: row.id,
        current_route: current_route,
      },
      {
        onSuccess: (res) => {
          setVisible(false)
        },
      },
    )
  }

  return (
    <Fragment>
      <button
        type="button"
        className="hiddexn lg:flex flex-center gap-2 rounded-full focus:ring-transparent appearance-none py-1 px-4 mr-0 sm:mr-4 truncate
       font-semibold border-2 border-gray-200 dark:border-gray-700 focus:dark:border-blue-500  bg-white dark:bg-black/40 placeholder-slate-600 dark:placeholder-slate-400 text-gray-700 dark:text-white"
        onClick={() => onClick()}
      >
        {canChangeTeam() && <FaSort />}
        <p
          className="whitespace-nowrap sm:max-w-full truncate"
          style={{ maxWidth: getMaxWidth(window.innerWidth) }}
        >
          {current_team.name}
        </p>
      </button>

      <Modal
        visible={visible}
        setVisible={setVisible}
        width="w-full lg:min-w-[1010px] lg:max-w-fit"
      >
        <StandardFormModalTemplate
          title="Change Team"
          closeForm={() => setVisible(false)}
          processing={false}
          submit={submit}
          withoutActions
        >
          <TeamDataTable onSelectTeam={onSelectTeam} />
        </StandardFormModalTemplate>
      </Modal>
    </Fragment>
  )
}
