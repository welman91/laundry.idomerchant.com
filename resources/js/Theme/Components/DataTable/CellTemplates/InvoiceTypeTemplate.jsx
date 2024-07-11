export default function InvoiceTypeTemplate({ type }) {
  let label, color
  if (type == 0) {
    label = 'PSB'
    color = 'bg-blue-800'
  }
  if (type == 1) {
    label = 'IURAN'
    color = 'bg-green-800'
  }

  return (
    <p
      className={`whitespace-nowrap w-fit text-xs px-2 rounded-sm text-center ${color} text-white`}
    >
      {label}
    </p>
  )
}
