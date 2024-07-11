import { urlModifier } from '@/Helpers/helper'
import { router } from '@inertiajs/react'

export default function ModelFilter() {
  return (
    <div className="flex-start gap-4">
      <FilterCheckBox label="Available" field="available" />
      <FilterCheckBox label="Unavailable" field="unavailable" />
      <FilterCheckBox label="Show Deleted" field="deleted" />
    </div>
  )
}

const FilterCheckBox = ({ label, onChange, field }) => {
  function onChange(e) {
    const checked = e.target.checked
    const resetPage = urlModifier(window.location.href, 'page', 1)
    const fetchUrl = urlModifier(resetPage, field, checked)
    return router.get(fetchUrl, {}, { preserveScroll: true })
  }

  function getChecked() {
    const urlString = window.location.href
    const url = new URL(urlString)
    const params = new URLSearchParams(url.search)

    if (field === 'deleted') {
      return params.get(field) === 'true' ? true : false
    }

    return params.get(field) === 'true' || params.get(field) === null ? true : false
  }

  return (
    <div className="flex-start gap-2">
      <input
        type="checkbox"
        id={`show_deleted_checkbox_${label}`}
        className="rounded-md checkbox"
        onChange={(e) => onChange(e)}
        checked={getChecked()}
      />
      <label
        htmlFor={`show_deleted_checkbox_${label}`}
        className="cursor-pointer text-gray-700 dark:text-white"
      >
        {label}
      </label>
    </div>
  )
}
