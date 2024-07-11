import { fCurrency } from '@/Helpers/helper'

export default function MoneyTemplate({ amount }) {
  return <p className="text-end">{amount ? fCurrency(amount) : 0}</p>
}
