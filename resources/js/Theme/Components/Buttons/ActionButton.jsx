export default function ActionButton({
  type = 'button',
  label = 'submit',
  disabled = false,
  action,
  onClick,
  capitalize = true,
  ...props
}) {
  function getColorByActions() {
    if (action === 'confirm') return 'from-primary-700 to-primary '
    if (action === 'cancel') return 'bg-gray-700'
    if (action === 'delete') return 'from-rose-700 to-rose-500'
    if (action === 'save') return 'from-green-500 to-green-800'
    if (action === 'sky') return 'from-blue-500 to-blue-800'
  }
  return (
    <button
      type={type}
      className={`capitalize inline-block text-sm px-6 py-2 font-bold bg-gradient-to-b active:translate-y-1 rounded-md shadow-md hover:bg-gradient-to-b text-white 
      ${capitalize && 'capitalize'} 
      ${getColorByActions()} 
      disabled:bg-gray-300`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}
