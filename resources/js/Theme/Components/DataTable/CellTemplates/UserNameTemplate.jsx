import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'

export default function UserNameTemplate({ user }) {
  if (user)
    return (
      <div>
        <div className="flex-start items-start gap-2">
          <p className="text-sm whitespace-nowrap">
            {user.user_id} - {user.user_name}
          </p>
        </div>
        <div className="flex-start gap-2 my-1">
          <p className="text-xs w-60 truncate">{user.email}</p>
        </div>
        <div className="flex-start gap-2">
          <p className="text-xs">{user.contact}</p>
          {user.mobile2 && <p className="text-xs whitespace-nowrap">/ {user.mobile2}</p>}
        </div>
      </div>
    )
}
