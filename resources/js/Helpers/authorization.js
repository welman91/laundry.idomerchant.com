import { usePage } from '@inertiajs/react'

export const permissions = () => {
  const arr = [
    ...usePage().props.auth.user.permissions.map((permission) => permission.name),
    'logout',
  ]
  return arr
}

export const isCurrentTeamAsHostingUser = (roles) => {
  return usePage().props.auth.user.current_team.type == 'hosting'
}

export const isSuperUser = () => {
  return usePage().props.auth.user.superuser
}

export const checkPermission = (permission) => {
  return permissions()?.some((p) => p === permission)
}

export const hasModulePermission = (module) => {
  return {
    toCreate: checkPermission(module + '.create'),
    toUpdate: checkPermission(module + '.update'),
    toDestroy: checkPermission(module + '.destroy'),
  }
}

// !############## MODULES ###########

// CUSTOMER MODULE -------
export const hasPermissionToCreateCustomer = () => {
  return permissions()?.some((p) => p === 'customer.create')
}
export const hasPermissionToUpdateCustomer = () => {
  return permissions()?.some((p) => p === 'customer.update')
}
// ------- CUSTOMER MODULE

// PRODUCT MASTER MODULE -------
export const permissionForProductMaster = () => {
  return {
    toCreate: checkPermission('product-master.create'),
    toUpdate: checkPermission('product-master.update'),
    toDestroy: checkPermission('product-master.destroy'),
  }
}
// ------- PRODUCT MASTER MODULE

// PRODUCT SELLING PRICE MODULE -------
export const permissionForProductSellingPrice = () => {
  return {
    toCreate: checkPermission('remark-defect.create'),
    toUpdate: checkPermission('remark-defect.update'),
    toDestroy: checkPermission('remark-defect.destroy'),
  }
}

// export const hasPermissionToCreateProductSellingPrice = () => {
//   return permissions()?.some((p) => p === 'product-selling-price.create')
// }
// export const hasPermissionToUpdateProductSellingPrice = () => {
//   return permissions()?.some((p) => p === 'product-selling-price.update')
// }
// export const hasPermissionToDestroyProductSellingPrice = () => {
//   return permissions()?.some((p) => p === 'product-selling-price.destroy')
// }
// ------- PRODUCT SELLING PRICE MODULE

// REMARK CATALOG : BRAND MODULE -------
export const hasPermissionToCreateRemarkBrand = () => {
  return permissions()?.some((p) => p === 'remark-brand.create')
}
export const hasPermissionToUpdateRemarkBrand = () => {
  return permissions()?.some((p) => p === 'remark-brand.update')
}
export const hasPermissionToDestroyRemarkBrand = () => {
  return permissions()?.some((p) => p === 'remark-brand.destroy')
}
// ------- REMARK CATALOG : BRAND MODULE

// REMARK CATALOG : SIZE MODULE -------
export const hasPermissionToCreateRemarkSize = () => {
  return permissions()?.some((p) => p === 'remark-size.create')
}
export const hasPermissionToUpdateRemarkSize = () => {
  return permissions()?.some((p) => p === 'remark-size.update')
}
export const hasPermissionToDestroyRemarkSize = () => {
  return permissions()?.some((p) => p === 'remark-size.destroy')
}
// ------- REMARK CATALOG : SIZE MODULE

// REMARK CATALOG : PATTERN MODULE -------
export const hasPermissionToCreateRemarkPattern = () => {
  return permissions()?.some((p) => p === 'remark-pattern.create')
}
export const hasPermissionToUpdateRemarkPattern = () => {
  return permissions()?.some((p) => p === 'remark-pattern.update')
}
export const hasPermissionToDestroyRemarkPattern = () => {
  return permissions()?.some((p) => p === 'remark-pattern.destroy')
}
// ------- REMARK CATALOG : PATTERN MODULE

// REMARK CATALOG : COLOR MODULE -------
export const hasPermissionToCreateRemarkColor = () => {
  return permissions()?.some((p) => p === 'remark-color.create')
}
export const hasPermissionToUpdateRemarkColor = () => {
  return permissions()?.some((p) => p === 'remark-color.update')
}
export const hasPermissionToDestroyRemarkColor = () => {
  return permissions()?.some((p) => p === 'remark-color.destroy')
}
// ------- REMARK CATALOG : COLOR MODULE

// REMARK DEFECT MODULE -------
export const permissionForRemarkDefect = (module) => {
  return {
    toCreate: checkPermission(module + '.create'),
    toUpdate: checkPermission(module + '.update'),
    toDestroy: checkPermission(module + '.destroy'),
  }
}

export const hasPermissionToCreateRemarkDefect = () => {
  return permissions()?.some((p) => p === 'remark-defect.create')
}
export const hasPermissionToUpdateRemarkDefect = () => {
  return permissions()?.some((p) => p === 'remark-defect.update')
}
export const hasPermissionToDestroyRemarkDefect = () => {
  return permissions()?.some((p) => p === 'remark-defect.destroy')
}
// ------- REMARK DEFECT MODULE

// !############## MODULES ###########

// // SUBSCRIPTION MODULE -------
// export const hasPermissionToCreateSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.create')
// }
// export const hasPermissionToUpdateSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.update')
// }
// export const hasPermissionToConfirmSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.confirm')
// }
// export const hasPermissionToAdjustSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.adjustment')
// }
// export const hasPermissionToCancelSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.cancel')
// }
// export const hasPermissionToTerminateSubscription = () => {
//   return permissions()?.some((p) => p === 'subscription.terminate')
// }
// // ------- SUBSCRIPTION MODULE

// // INVOICE MODULE -------
// export const hasPermissionToPayInvoice = () => {
//   return permissions()?.some((p) => p === 'invoice.pay')
// }
// export const hasPermissionToGenerateNextInvoice = () => {
//   return permissions()?.some((p) => p === 'invoice.generate')
// }
// export const hasPermissionToVoidInvoice = () => {
//   return permissions()?.some((p) => p === 'invoice.void')
// }
// // ------- INVOICE MODULE

// // PAYMENT MODULE -------
// export const hasPermissionToCancelPayment = () => {
//   return permissions()?.some((p) => p === 'invoice-payment.cancel')
// }
// // ------- PAYMENT MODULE

// USER MODULE -------
export const hasPermissionToCreateUser = () => {
  return permissions()?.some((p) => p === 'user.create')
}
export const hasPermissionToUpdateUser = () => {
  return permissions()?.some((p) => p === 'user.update')
}
// ------- USER MODULE

// PERMISSION MODULE -------
export const hasPermissionToCreatePermission = () => {
  return permissions()?.some((p) => p === 'permission.create')
}
export const hasPermissionToUpdatePermission = () => {
  return permissions()?.some((p) => p === 'permission.update')
}
// ------- PERMISSION MODULE

// // HELPDESK MODULE -------
// export const hasPermissionToCreateHelpdeskTicket = () => {
//   return permissions()?.some((p) => p === 'ticket-management.create')
// }
// export const hasPermissionToUpdateHelpdeskTicket = () => {
//   return permissions()?.some((p) => p === 'ticket-management.update')
// }
// // ------- HELPDESK MODULE

// FEE MODULE -------
export const hasPermissionToCreateFee = () => {
  return permissions()?.some((p) => p === 'fee.create')
}
export const hasPermissionToUpdateFee = () => {
  return permissions()?.some((p) => p === 'fee.update')
}
// ------- FEE MODULE

// // ------- DEVIME MANAGEMENT MODULE
// export const hasPermissionToCreateDevice = () => {
//   return permissions()?.some((p) => p === 'device.create')
// }

// export const hasPermissionToUpdateDevice = () => {
//   return permissions()?.some((p) => p === 'device.update')
// }

// export const hasPermissionToDeleteDevice = () => {
//   return permissions()?.some((p) => p === 'device.delete')
// }
// // ------- DEVIME MANAGEMENT MODULE

// // CUSTOMER DEVICE MODULE -------
// export const hasPermissionToCreateCustomerDevice = () => {
//   return permissions()?.some((p) => p === 'customer-device.create')
// }
// export const hasPermissionToUpdateCustomerDevice = () => {
//   return permissions()?.some((p) => p === 'customer-device.update')
// }
// export const hasPermissionToReplaceCustomerDevice = () => {
//   return permissions()?.some((p) => p === 'customer-device.replace')
// }
// export const hasPermissionToRemoveCustomerDevice = () => {
//   return permissions()?.some((p) => p === 'customer-device.remove')
// }
// // ------- CUSTOMER DEVICE MODULE

// // CUSTOMER ACTIVATION MODULE -------
// export const hasPermissionToCreateCustomerActivation = () => {
//   return permissions()?.some((p) => p === 'customer-activation.create')
// }
// export const hasPermissionToUpdateCustomerActivation = () => {
//   return permissions()?.some((p) => p === 'customer-activation.update')
// }
// // ------- CUSTOMER ACTIVATION MODULE

// // CREDIT NOTE MODULE -------
// export const hasPermissionToCreateCreditNote = () => {
//   return permissions()?.some((p) => p === 'credit-note.create')
// }
// export const hasPermissionToUpdateCreditNote = () => {
//   return permissions()?.some((p) => p === 'credit-note.update')
// }
// export const hasPermissionToDeleteCreditNote = () => {
//   return permissions()?.some((p) => p === 'credit-note.delete')
// }
// // ------- CREDIT NOTE MODULE

// // DEBIT NOTE MODULE -------
// export const hasPermissionToCreateDebitNote = () => {
//   return permissions()?.some((p) => p === 'debit-note.create')
// }
// export const hasPermissionToUpdateDebitNote = () => {
//   return permissions()?.some((p) => p === 'debit-note.update')
// }
// export const hasPermissionToDeleteDebitNote = () => {
//   return permissions()?.some((p) => p === 'debit-note.delete')
// }
// // ------- DEBIT NOTE MODULE

// // RECEIPT VOUCHER MODULE -------
// export const hasPermissionToCreateReceiptVoucher = () => {
//   return permissions()?.some((p) => p === 'receipt-voucher.create')
// }
// export const hasPermissionToUpdateReceiptVoucher = () => {
//   return permissions()?.some((p) => p === 'receipt-voucher.update')
// }
// // ------- RECEIPT VOUCHER MODULE

// // TAGIHAN LO MODULE -------
// export const hasPermissionToUpdateBatchPaymentMerchantInvoice = () => {
//   return permissions()?.some((p) => p === 'batch-payment-merchant-invoice.create')
// }
// // ------- TAGIHAN LO MODULE

// TEAM MANAGEMENT MODULE -------
export const hasPermissionToCreateTeam = () => {
  return permissions()?.some((p) => p === 'team-management.create')
}
export const hasPermissionToUpdateTeam = () => {
  return permissions()?.some((p) => p === 'team-management.update')
}
// ------- TEAM MANAGEMENT MODULE

// !############## MODULES ###########
