import { fetchErrorCatch } from '@/Helpers/helper'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const openPaymentForm = (
  form,
  slug,
  orders,
  customer,
  setLoadData,
  setProcessing,
  setShowPaymentForm,
) => {
  if (!orders || orders?.length == 0) {
    return Swal.fire({
      text: 'Belum ada transaksi!',
      icon: 'error',
      confirmButtonText: 'OK',
    })
  }

  if (!customer) {
    return Swal.fire({
      text: 'Mohon pilih pelanggan terlebih dahulu!',
      icon: 'error',
      confirmButtonText: 'OK',
    })
  }

  if (!form.data.total_weight || form.data.total_weight < 1) {
    return Swal.fire({
      text: 'Mohon sertakan total berat terlebih dahulu!',
      icon: 'error',
      confirmButtonText: 'OK',
    })
  }

  setProcessing(true)

  const url = route('transaction.get-payment-methods', slug)

  axios
    .get(url)
    .then((response) => {
      setLoadData(response.data)
      setProcessing(false)
      setShowPaymentForm(true)
    })
    .catch((error) => fetchErrorCatch(error, setProcessing(false)))
}
