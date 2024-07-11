import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'
import { useForm, usePage } from '@inertiajs/react'
import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import { customerMasterFormData } from '@/Pages/Modules/CustomerMaster/CustomerMasterFormData'
import CustomerMasterForm from '@/Pages/Modules/CustomerMaster/CustomerMasterForm'

export default function ModelForm({ action, loadData, closeForm }) {
  const { model } = loadData

  const { module, slug, routes, styles } = usePage().props.page

  function getFormData() {
    let formData
    switch (module) {
      case 'customer-master':
        formData = customerMasterFormData(action, loadData.options, model)
        break
    }
    return formData
  }

  if (!getFormData()) console.error('Error, form data not found!')

  const form = useForm(getFormData())

  // * TIDAK BISA DISATUKAN KARENA FORM HARUS DI DECLARE TERLEBIH DAHULU

  function getModuleFile() {
    let entity_no, formFile
    switch (module) {
      case 'customer-master':
        entity_no = model?.reg_no
        formFile = <CustomerMasterForm action={action} form={form} loadData={loadData} />
        break
    }

    return { entity_no, formFile }
  }

  if (!getModuleFile().formFile) console.error('Error, form file not found!')

  const submit = (e) => {
    e.preventDefault()

    // if (!getModuleFile().validation) return

    // if (!form.data.name.trim()) return alert('Nama tidak boleh kosong')

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route(routes.store, slug), {
          preserveScroll: true,
          onSuccess: (response) =>
            onSuccessFeedback(response, closeForm(), true, 'New data created'),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk update data?')) {
        return form.post(route(routes.update, [slug, model?.id]), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm(), true),
          onError: onErrorFeedback,
        })
      }
    }
  }

  function getFormTitle() {
    if (action === 'create') {
      return styles?.form_create_title_header ?? 'Add New Data'
    }
    if (action === 'update') {
      return styles?.form_update_title_header ?? 'Update Data'
    }
  }

  if (!form.wasSuccessful)
    return (
      <StandardFormModalTemplate
        title={getFormTitle()}
        closeForm={closeForm}
        processing={form.processing}
        submit={submit}
        submitBtnLabel={action === 'update' ? 'Update' : 'Submit'}
        headerBody={
          action !== 'create' && (
            <FormHeaderBody label={`No: ${getModuleFile().entity_no}`} />
          )
        }
        bodyClassName="rounded-b-xl"
        withoutActions={styles?.without_form_actions}
        withoutPadding={styles?.without_form_padding}
      >
        {getModuleFile().formFile}
      </StandardFormModalTemplate>
    )
}
