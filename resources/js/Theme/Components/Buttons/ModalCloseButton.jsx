import { MdClose } from 'react-icons/md'

export default function ModalCloseButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block px-2 py-2 active:translate-y-1 font-medium border rounded-full shadow-md 
      bg-red-500 text-white
      border-none
      hover:bg-red-700 "
      disabled={disabled}
    >
      <MdClose />
    </button>
  )
}
