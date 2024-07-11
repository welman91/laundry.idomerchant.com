import Tag from '@/Theme/Components/Tag'

export default function PsbTypeTemplate({ psb_type }) {
  let label, color
  if (psb_type == 0) {
    label = 'PSB Baru	'
    color = 'bg-green-800 text-white'
  }
  if (psb_type == 1) {
    label = 'PSB Ubah Paket'
    color = 'bg-red-800 text-white'
  }
  if (psb_type == 2) {
    label = 'PSB Reg Ulang'
    color = 'bg-purple-800 text-white'
  }
  return <Tag label={label} color={color} />
}
