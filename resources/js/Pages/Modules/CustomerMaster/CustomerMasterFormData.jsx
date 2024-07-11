export const customerMasterFormData = (action, options, model = null) => {
  const { statuses, countrycodes } = options

  return {
    __form_type: action,
    name: model?.name ?? '',
    address: model?.address ?? '',
    cust_status: model?.cust_status ?? statuses[0].id,
    country_code_id: model?.country_code_id ?? countrycodes.find((c) => c.id === 62).id,
    mobile: model?.mobile ?? '',
  }
}
