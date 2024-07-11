export default function IdoOrderCancelButton({
  className,
  onClick,
  disabled = false,
  children,
}) {
  return (
    <button
      type="button"
      className={`flex-grow md:flex-none rounded-md bg-gray-200 text-gray-700 select-none font-semibold disabled:bg-gray-300 disabled:text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="py-2 px-8">{children}</div>
    </button>
  )
}
