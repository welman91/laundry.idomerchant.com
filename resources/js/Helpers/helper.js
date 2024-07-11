import { usePage } from '@inertiajs/react'
import dayjs from 'dayjs'
import 'dayjs/locale/id' // Import the desired locale

export const appThemeKey = import.meta.env.VITE_APP_NAME
export const appStateKey = import.meta.env.VITE_APP_URL

export const appTheme = JSON.parse(localStorage.getItem(appThemeKey))
export const appState = JSON.parse(localStorage.getItem(appStateKey))

export const APPTHEMELOCALSTORAGE = import.meta.env.VITE_APP_NAME + ' - THEME' || 'ERB'
export const APPSTATELOCALSTORAGE = import.meta.env.VITE_APP_NAME + ' - STATE' || 'ERB'

export const currentTeam = () => {
  return usePage().props.auth.user.current_team
}

export const currentPage = () => {
  return usePage().props.page
}

export const getParameterFromUrl = (field, current_url = null) => {
  // Get the URL of the current page
  const currentUrl = current_url ?? window.location.href
  // Create a URLSearchParams object from the query parameters of the URL
  const searchParams = new URLSearchParams(new URL(currentUrl).search)
  // Get the 'search' parameter value
  const fieldValue = searchParams.get(field)

  return fieldValue
}

export const urlModifier = (current_url, parameter, query) => {
  const url = new URL(current_url)
  const search_params = url.searchParams
  search_params.set(parameter, query)
  url.search = search_params.toString()
  return url.toString()
}

export const capitalize = (words) => {
  if (words) {
    var separateWord = words.toLowerCase().split(' ')
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1)
    }
    return separateWord.join(' ')
  } else {
    return ''
  }
}

export const uppercase = (words) => {
  if (words) {
    return words.toUpperCase()
  } else {
    return ''
  }
}

export const fDate = (date, separator = '/') => {
  return dayjs(date).format(`DD${separator}MM${separator}YYYY`)
}

export const fDateTime = (date, separator = '/') => {
  if (date) return dayjs(date).format(`DD${separator}MM${separator}YYYY HH:mm:ss`)
}

export const fInt = (integer) => {
  const total = parseInt(integer ?? 0)
  const number = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return number
}

export const fCurrency = (integer) => {
  return parseFloat(integer).toLocaleString('id-ID')
}

export const moneyFormatter = (integer) => {
  const total = parseInt(integer)
  const number = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return number
}

export const localeDate = (date) => {
  dayjs.locale('id')
  return dayjs(date).locale('id').format('dddd, D MMM YYYY')
}

export const fullDate = (date) => {
  return dayjs(date).format('dddd, D MMM YYYY HH:mm:ss')
}

export const getIdFromSelectOption = (data, array, check, fallback) => {
  return data
    ? array.find((dt) => {
        return check ? dt.id == data : dt.old_id == data
      }).id
    : fallback
}

export const countProrateDays = (start_date) => {
  const start = dayjs(start_date, 'YYYY-MM-DD')
  const end = dayjs(start_date, 'YYYY-MM-DD').endOf('month')
  const count = end.diff(start, 'days') + 1
  return count
}

export const insertFieldAfterThisField = (array, fieldToInsertAfter, newObj) => {
  const index = array.findIndex((item) => item.field === fieldToInsertAfter)
  if (index !== -1) {
    array.splice(index + 1, 0, newObj)
  }
}

export const getRecommendDateForAdjustment = (subscription) => {
  if (subscription.unpaid_invoices && subscription.unpaid_invoices.length > 0) {
    return dayjs(subscription.unpaid_invoices[0].inv_date).format('YYYY-MM-DD')
  } else if (
    subscription.finished_invoices &&
    subscription.finished_invoices.length > 0
  ) {
    const last_finished_invoice_date = dayjs(subscription.finished_invoices[0].inv_date)
    const recommend_date = last_finished_invoice_date.add(1, 'month').startOf('month')
    return dayjs(recommend_date).format('YYYY-MM-DD')
  } else {
    return null
  }
}

export const strictNumberValidation = (number) => {
  const isValidInteger = /^0$|^[1-9]\d*$/.test(number)

  if (isNaN(parseInt(number)) || !isValidInteger) {
    return false
  }
  return true
}

export const getMaxWidth = (width) => {
  // Given examples
  const A1 = 400
  const B1 = 115
  const A2 = 580
  const B2 = 280

  // Calculate the slope (m)
  const m = (B2 - B1) / (A2 - A1)

  // Calculate the y-intercept (b)
  const b = B1 - m * A1

  // Function to calculate B for a given A
  const calculateB = (A) => m * A + b

  // Test with A = 450
  const A_test = window.innerWidth
  return calculateB(A_test)
}

export const fetchErrorCatch = (error, callback = null, ajax = false) => {
  if (callback && typeof callback === 'function') {
    setProcessing(false)
  }

  if (!ajax)
    return error.response.status == 422
      ? alert(error.response.data.msg)
      : alert(import.meta.env.VITE_SYSTEM_ERROR_MESSAGE)
}

export const arrayFilter = (array, filter) => {
  const filteredArray = array.filter((item) => {
    for (const key in filter) {
      if (item[key] !== filter[key]) {
        return true
      }
    }
    return false
  })

  return filteredArray
}

export const price = (currency = 'K', price) => {
  return currency + ' ' + new Number(price).toFixed(2)
}

export const getAppState = () => {
  const appStateKey = import.meta.env.VITE_APP_URL
  const appState = JSON.parse(localStorage.getItem(appStateKey))
  return appState
}

export const generateDenominationSteps = (amount) => {
  const denominations = [100000, 50000, 20000, 15000, 14500, 14400]
  const steps = [100, 500, 1000, 5000, 10000, 20000, 50000]

  const result = [amount]

  for (let i = 0; i < steps.length; i++) {
    const nextAmount = Math.ceil(amount / steps[i]) * steps[i]
    if (nextAmount > amount && denominations.includes(nextAmount)) {
      result.push(nextAmount)
    }
  }

  return result
}

export const getSubTotal = (orders) => {
  const amount = orders?.reduce((n, p) => {
    const subtotal = p.qty * (p.price - p.disc)
    return n + subtotal
  }, 0)
  return amount
}

export const getTotalQty = (orders) => {
  const total = orders?.reduce((n, p) => {
    return n + parseInt(p.qty ? p.qty : 0)
  }, 0)
  return total
}

export const getTotalAmount = (orders) => {
  const total = orders?.reduce((n, p) => {
    const subtotal = p.qty * (p.price - p.disc)
    return n + subtotal
  }, 0)
  return total
}

export const getTotalDisc = (orders) => {
  const total = orders?.reduce((n, p) => {
    return n + parseInt(p.disc ? p.disc : 0)
  }, 0)
  return total
}

export const reportHeaderFilterOnExcel = (theOption, theFilter, multiple = true) => {
  if (theFilter) {
    if (multiple) {
      const array = theFilter.split('-')
      const names = theOption.filter((b) => array.includes(b.id))?.map((p) => p.name)
      return names
    } else {
      const name = theOption.find((b) => b.id == theFilter)?.name
      return name
    }
  }

  return null
}

export const getBase64Image = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      const dataURL = canvas.toDataURL('image/png')
      resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''))
    }
    img.onerror = (error) => reject(error)
  })
}

export const sum = (collection, field, type = 'int') => {
  return collection?.reduce((n, row) => {
    const x = row[field]
    if (type === 'int') return n + parseInt(x ? x : 0)
    if (type === 'float') return n + parseFloat(x ? x : 0)
  }, 0)
}

export const excelIntColumn = (title) => {
  return {
    name: title,
    totalsRowFunction: 'sum',
    style: { numFmt: '#,##0', alignment: { vertical: 'middle' } },
  }
}

export const excelFloatColumn = (title) => {
  return {
    name: title,
    totalsRowFunction: 'sum',
    style: { numFmt: '#,##0', alignment: { vertical: 'middle' } },
  }
}

export const excelDateColumn = (title) => {
  return {
    name: title,
    style: { dateFormat: 'dd-mm-yyyy', alignment: { vertical: 'middle' } },
  }
}

export const countCoulumns = (x) => {
  if (x === 1) return 'A'
  if (x === 2) return 'B'
  if (x === 3) return 'C'
  if (x === 4) return 'D'
  if (x === 5) return 'E'
  if (x === 6) return 'F'
  if (x === 7) return 'G'
  if (x === 8) return 'H'
  if (x === 9) return 'I'
  if (x === 10) return 'J'
  if (x === 11) return 'K'
  if (x === 12) return 'L'
  if (x === 13) return 'M'
  if (x === 14) return 'N'
  if (x === 15) return 'O'
  if (x === 16) return 'P'
  if (x === 17) return 'Q'
  if (x === 18) return 'R'
  if (x === 19) return 'S'
  if (x === 20) return 'T'
  if (x === 21) return 'U'
  if (x === 22) return 'V'
  if (x === 23) return 'W'
  if (x === 24) return 'X'
  if (x === 25) return 'Y'
  if (x === 26) return 'Z'
}
