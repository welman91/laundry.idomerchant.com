export default function DisabledInput({ label, value }) {
  return (
    <div className="block w-full">
      <p className="block w-fit font-medium text-sm text-gray-700 dark:text-white">
        {label}
      </p>
      <div className="w-full mt-1 rounded-lg py-2 px-3 text-left focus:outline-none focus:ring-2 sm:text-sm border-none dark:bg-black/40 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-none cursor-not-allowed">
        <p>{value}</p>
      </div>
    </div>
  )
}
