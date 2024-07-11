export default function OrderRemarkCell({ label, value }) {
  return (
    <div>
      <p className="text-xs">{label}</p>
      <p className="rounded-full border-b border-gray-500">{value ? value : '-'}</p>
    </div>
  )
}
