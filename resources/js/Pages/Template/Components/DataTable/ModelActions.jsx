import MenuDropdown from '@/Components/MenuDropdown'
import MenuItemButtonDropdown from '@/Components/MenuItemButtonDropdown'
import { Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Modal from '@/Theme/Components/Modal'
import { BiMessageSquareEdit } from 'react-icons/bi'
import axios from 'axios'
import { useForm, usePage } from '@inertiajs/react'
import ProcessingLoader from '@/Theme/Components/ProcessingLoader'
import { FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import ModelForm from '../Forms/ModelForm'

export default function ModelActions({
  row,
  withUpdate = true,
  withDelete = true,
  withRestore = true,
}) {
  const { page, permissions } = usePage().props
  const { module, slug, routes } = page

  const [formAction, setFormAction] = useState('update')
  const [processing, setProcessing] = useState(false)
  const [loadData, setLoadData] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const form = useForm({
    id: row.id,
  })

  const openForm = () => {
    setProcessing(true)
    const url = route(routes.edit, [slug, row.id])
    const params = {
      form_action: formAction,
    }
    axios
      .get(url, { params })
      .then((response) => {
        setLoadData(response.data)
        setProcessing(false)
        setShowForm(true)
      })
      .catch((error) => {
        setProcessing(false)
        return error.response.status == 422
          ? alert(error.response.data.msg)
          : alert('Terjadi masalah, tidak dapat membuka form')
      })
  }

  function deleteData() {
    Swal.fire({
      title: 'Do you want to delete this data?',
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Yes, Delete!`,
      icon: 'warning',
    }).then((result) => {
      if (result.isDenied) {
        form.delete(route(routes.destroy, [slug, row.id]), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, () => {}, true),
          onError: onErrorFeedback,
        })
      }
    })
  }

  function restoreData() {
    Swal.fire({
      title: 'Do you want to restore this data?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes, Restore`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        form.post(route(routes.restore, [slug, row.id]), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, () => {}, true),
          onError: onErrorFeedback,
        })
      }
    })
  }

  return (
    <Fragment>
      <MenuDropdown>
        {/* Update */}
        {withUpdate && !row.deleted_at && (
          <Menu.Item>
            {({ active }) => (
              <MenuItemButtonDropdown
                icon={<BiMessageSquareEdit size={20} />}
                label="Update Data"
                onClick={() => {
                  setFormAction('update')
                  openForm()
                }}
                disabled={!permissions.canUpdate}
              />
            )}
          </Menu.Item>
        )}

        {/* Delete */}
        {withDelete && !row.deleted_at && (
          <Menu.Item>
            {({ active }) => (
              <MenuItemButtonDropdown
                icon={<FaTimes size={20} />}
                label="Delete Data"
                onClick={() => deleteData()}
                disabled={!permissions.canDestroy}
              />
            )}
          </Menu.Item>
        )}

        {/* Restore */}
        {withRestore && row.deleted_at && (
          <Menu.Item>
            {({ active }) => (
              <MenuItemButtonDropdown
                icon={<FaArrowRotateLeft size={20} />}
                label="Restore Data"
                onClick={() => restoreData()}
                disabled={!permissions.canUpdate}
              />
            )}
          </Menu.Item>
        )}
      </MenuDropdown>

      <Modal visible={processing} setVisible={setProcessing} noescape>
        <ProcessingLoader visible={processing} />
      </Modal>

      <Modal visible={showForm} setVisible={setShowForm} noescape>
        <ModelForm
          action={formAction}
          loadData={loadData}
          closeForm={() => setShowForm(false)}
        />
      </Modal>
    </Fragment>
  )
}
