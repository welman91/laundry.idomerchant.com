import FormTextInput from '@/Theme/Form/FormTextInput'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormMobileInput from '@/Theme/Form/FormMobileInput'
import { Fragment } from 'react'

export default function CustomerMasterForm({ action, form, loadData }) {
  const { statuses, countrycodes } = loadData.options
  const { model } = loadData

  const handleOnChange = (event) => {
    form.setData(event.target.name, event.target.value)
  }

  return (
    <Fragment>
      <div className="w-full block space-y-4 lg:w-96 text-gray-700 dark:text-white">
        {/* Name */}
        <FormTextInput
          name="name"
          label="Name *"
          value={form.data.name}
          onChange={handleOnChange}
          error={form.errors.name}
        />

        {/* mobile */}
        <FormMobileInput
          name="mobile"
          label="Mobile No."
          options={countrycodes}
          codeValue={form.data.country_code_id}
          onChangeCode={(val) => form.setData('country_code_id', val.id)}
          value={form.data.mobile}
          onChange={handleOnChange}
          error={form.errors.mobile}
          placeholder="Mohon isi nomor aktif"
          maxLength={12}
          required
        />

        {/* Address */}
        <FormTextInput
          name="address"
          label="Address"
          value={form.data.address}
          onChange={handleOnChange}
          error={form.errors.address}
        />

        {/* Status */}
        {action == 'update' && (
          <FormSelectInput
            name="cust_status"
            label="Status"
            options={statuses}
            value={form.data.cust_status}
            onChange={(val) => form.setData('cust_status', val.id)}
            error={form.errors.cust_status}
          />
        )}
      </div>
      <p className="mt-6 text-xs text-left font-bold text-red-500">
        You must fill in fields marked with *
      </p>
    </Fragment>
  )
}
