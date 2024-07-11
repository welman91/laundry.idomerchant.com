export default function ThumbnailButton({
  className,
  onClick,
  active = false,
  children,
}) {
  return (
    <button
      type="button"
      className={`w-full flex-between gap-6 p-4 rounded-lg shadow-sm ${
        active ? 'border-2 border-indigo-700' : 'border border-gray-200'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
