export default function PermissionsNameTemplate({ permissions }) {
  const names = permissions.map((item) => item.name)
  const perms = names.join(', ')
  return perms
}
