import { moneyFormatter } from '@/Helpers/helper'
import Pill from '../../Pill'

export default function LastCustomerInvoiceTemplate({ invoice }) {
  if (invoice)
    return (
      <div>
        <p className="capitalize whitespace-nowrap">{invoice?.inv_no}</p>
        <p>Rp. {moneyFormatter(invoice?.outstanding)}</p>
        <Pill css={invoice.status.css} name={invoice.status.name} />
      </div>
    )
}
