export default function OrderStatusTag({ status, className }) {
  return (
    <p
      className={`text-sm capitalize text-white px-2 rounded-full ${status.color} ${className}`}
    >
      {status.name}
    </p>
  )
}
