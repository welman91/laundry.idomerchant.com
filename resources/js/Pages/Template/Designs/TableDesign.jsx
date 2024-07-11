import ThemeLayout from '@/Theme/ThemeLayout'
import Modal from '@/Theme/Components/Modal'
import { Fragment, useState } from 'react'
import { usePage } from '@inertiajs/react'
import { fetchErrorCatch } from '@/Helpers/helper'
import ContentCard from '@/Theme/Components/ContentCard'
import ProcessingLoader from '@/Theme/Components/ProcessingLoader'
import axios from 'axios'
import ModelFilter from '../Components/DataTable/ModelFilter'
import ModelDataTable from '../Components/DataTable/ModelDataTable'
import ModelForm from '../Components/Forms/ModelForm'

export default function TableDesign() {
  const { page, collection } = usePage().props
  const { title, module, slug, routes, styles } = page

  const [processing, setProcessing] = useState(false)
  const [loadData, setLoadData] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  function onClickNew() {
    setProcessing(true)

    const url = route(routes.create, slug)

    axios
      .get(url)
      .then((response) => {
        setLoadData(response.data)
        setProcessing(false)
        setShowCreateForm(true)
      })
      .catch((error) => fetchErrorCatch(error, setProcessing(false)))
  }

  function renderFilter() {
    return <ModelFilter />
  }

  function renderForm() {
    return (
      <ModelForm
        action="create"
        loadData={loadData}
        closeForm={() => setShowCreateForm(false)}
      />
    )
  }

  return (
    <ThemeLayout title={title}>
      <ContentCard title={title}>{renderFilter()}</ContentCard>

      <ModelDataTable collection={collection} onClickNew={onClickNew} />

      <Fragment>
        <Modal visible={processing} setVisible={setProcessing}>
          <ProcessingLoader visible={processing} />
        </Modal>

        <Modal
          visible={showCreateForm}
          setVisible={setShowCreateForm}
          noescape
          width={styles?.form_modal_classname ?? 'w-full lg:w-fit'}
        >
          {renderForm()}
          {/* {module === 'transaction' ? (
            <TransactionForm
              action="create"
              loadData={loadData}
              closeForm={() => setShowCreateForm(false)}
            />
          ) : (
            <ModelForm
              action="create"
              loadData={loadData}
              closeForm={() => setShowCreateForm(false)}
            />
          )} */}
        </Modal>
      </Fragment>
    </ThemeLayout>
  )
}
