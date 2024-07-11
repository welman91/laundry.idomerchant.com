import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from '@inertiajs/react'
import { team } from '@/Helpers/getTeamSlug'

export default function CustomerNameTemplate({ customer }) {
  function getRoute() {
    return customer.uuid
      ? route('customer-detail.index', [team().slug, customer.uuid])
      : route('customer.index', team().slug)
  }

  if (customer)
    return (
      <Link className="hover:text-primary" href={getRoute()}>
        <div className="flex-start items-start gap-2">
          {/* <FaUserAlt className="pt-1" /> */}
          <p className="text-sm whitespace-nowrap">
            {customer.reg_no} - {customer.name}
          </p>
        </div>
        {/* <div className="flex-start gap-2 my-1">
          <FaMapLocationDot />
          <p className="text-xs w-60 truncate">{customer.address}</p>
        </div>
        <div className="flex-start gap-2">
          <FaSquarePhone />
          <p className="text-xs">{customer.contact}</p>
          {customer.mobile2 && (
            <p className="text-xs whitespace-nowrap">/ {customer.mobile2}</p>
          )}
        </div> */}
      </Link>
    )
}
