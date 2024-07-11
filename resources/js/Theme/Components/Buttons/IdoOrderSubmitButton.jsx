export default function IdoOrderSubmitButton({
  onClick,
  className,
  disabled = false,
  type = 'submit',
  children,
}) {
  return (
    <button
      type={type}
      className={`w-full flex-grow rounded-md px-2 bg-indigo-700 text-white select-none font-semibold disabled:bg-gray-300 disabled:text-white hide-print ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
