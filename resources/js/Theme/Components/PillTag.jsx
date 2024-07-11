export default function PillTag({ className, title, label }) {
  return (
    <p
      className={`uppercase text-xs whitespace-nowrap w-fit px-2 font-bold rounded-full ${className}`}
      title={title}
    >
      {label}
    </p>
  )
}
