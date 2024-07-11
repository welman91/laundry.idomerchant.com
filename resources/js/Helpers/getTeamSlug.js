import { usePage } from '@inertiajs/react'

export const team = () => {
  return usePage().props.auth.user.current_team
}
