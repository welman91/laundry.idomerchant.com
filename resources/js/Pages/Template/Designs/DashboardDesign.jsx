import ThemeLayout from '@/Theme/ThemeLayout'
import { usePage } from '@inertiajs/react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdLocalLaundryService } from 'react-icons/md'
import { IoReceiptSharp } from 'react-icons/io5'
import { TbTargetArrow } from 'react-icons/tb'
import { PiMagnifyingGlassFill } from 'react-icons/pi'
import { BsHourglassSplit } from 'react-icons/bs'
import CountUp, { useCountUp } from 'react-countup'
import Flatpickr from 'react-flatpickr'
import dayjs from 'dayjs'
import 'dayjs/locale/id' // Import the desired locale
import { useState } from 'react'
import axios from 'axios'

export default function DashboardDesign() {
  const { page, data } = usePage().props
  const { title, slug } = page

  const totalCustomers = data.totalCustomers

  return (
    <ThemeLayout title={title}>
      <div className="rounded-md shadow-lg overflow-hidden">
        <div className="px-4 py-2 flex-between bg-white dark:bg-[#162231] text-gray-700 dark:text-white">
          <p className="font-bold text-xl">{title}</p>
          <p>{dayjs().locale('id').format('dddd, D MMMM YYYY')}</p>
        </div>
      </div>

      {/* SECTION #1 */}
      <div className="text-gray-500 dark:text-white grid md:grid-cols-4 gap-4">
        <TotalCustomerBox count={totalCustomers} />
        <StatBoxSect1
          icon={<MdLocalLaundryService size={60} />}
          label="Transaksi"
          className="border-b-green-500"
          withFilter={true}
          dateRange={data.StatTransaction.dateRange}
          total={data.StatTransaction.total}
          fetchRoute={route('dashboard.fetch-transactions', slug)}
        />
        <StatBoxSect1
          icon={<IoReceiptSharp size={60} />}
          label="Sales"
          className="border-b-red-500"
          withFilter={true}
          dateRange={data.StatSales.dateRange}
          total={data.StatSales.total}
          fetchRoute={route('dashboard.fetch-sales', slug)}
        />
        <StatBoxSect1
          icon={<TbTargetArrow size={60} />}
          label="Target"
          className="border-b-purple-500"
          withFilter={true}
          dateRange={data.StatTarget.dateRange}
          total={data.StatTarget.total}
          fetchRoute={route('dashboard.fetch-target', slug)}
        />
      </div>
    </ThemeLayout>
  )
}

const TotalCustomerBox = ({ count }) => {
  return (
    <div className="p-4 rounded-lg shadow-xl border-b-4 space-y-3 bg-white dark:bg-gray-700 border-b-sky-500">
      <div className="flex-start gap-4">
        <FaPeopleGroup size={40} />
        <p className="text-3xl font-bold">Pelanggan</p>
      </div>
      <div>
        <CountUp start={0} end={count} className="text-5xl" separator="." />
      </div>
    </div>
  )
}

const StatBoxSect1 = ({ icon, label, className, dateRange, total, fetchRoute }) => {
  const [startDate, setStartDate] = useState(dateRange.startDate)
  const [endDate, setEndDate] = useState(dateRange.endDate)
  const [countTotal, setCountTotal] = useState(total)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function onFetch() {
    setError(false)
    setLoading(true)
    axios
      .get(fetchRoute, {
        params: {
          startDate: dayjs(startDate).format('YYYY-MM-DD'),
          endDate: dayjs(endDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        setCountTotal(response.data.total)
        setLoading(false)
      })
      .catch((error) => {
        setError(true)
        setLoading(false)
      })
  }

  return (
    <div
      className={`p-4 rounded-lg shadow-xl border-b-4 space-y-3 bg-white dark:bg-gray-700 ${className}`}
    >
      <div className="flex-start gap-4">
        {icon}
        <div>
          <p className="text-xl font-bold">{label}</p>
          {error ? (
            <p className="text-xl font-bold text-red-500">Error Fetch Data...</p>
          ) : (
            <CountUp start={0} end={countTotal} className="text-4xl" separator="." />
          )}
        </div>
      </div>
      <div className="flex-center gap-2">
        <Flatpickr
          options={{
            mode: 'range',
            altInput: true,
            allowInput: false,
            altFormat: 'd M Y',
            dateFormat: 'Y-m-d',
            defaultDate: [
              dayjs(startDate).format('YYYY-MM-DD'),
              dayjs(endDate).format('YYYY-MM-DD'),
            ],
            onChange: function (selectedDates, dateStr, instance) {
              setStartDate(selectedDates[0])
              setEndDate(selectedDates[1])
            },
          }}
          className="w-full text-sm rounded-xl border-none font-bold cursor-pointer 
          bg-gray-100 text-gray-500 
          dark:bg-gray-700 dark:text-white 
          hover:bg-sky-600 hover:text-white
          hover:dark:bg-sky-600 hover:dark:text-white
          "
        />
        <button
          type="button"
          className="p-2 rounded-xl hover:bg-sky-600 hover:text-white"
          onClick={onFetch}
          disabled={loading}
        >
          {loading ? (
            <BsHourglassSplit size={20} className="animate-spin" />
          ) : (
            <PiMagnifyingGlassFill size={20} />
          )}
        </button>
      </div>
    </div>
  )
}
