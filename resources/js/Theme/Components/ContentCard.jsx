export default function ContentCard({ title, children }) {
  return (
    <div className="rounded-md shadow-lg overflow-hidden">
      <div className="px-4 py-2 bg-white dark:bg-[#162231]">
        <p className="font-bold text-xl text-gray-700 dark:text-white">{title}</p>
      </div>
      {children && <div className="p-4 bg-[#F9FAFD] dark:bg-[#121E2D]">{children}</div>}
    </div>
  )
}
