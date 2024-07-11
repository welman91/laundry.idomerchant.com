import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export default function DateTemplate({
  date,
  format = 'DD-MM-YYYY',
  type = 'normal',
  alignment = 'text-center',
}) {
  dayjs.extend(relativeTime) // Register the plugin

  if (date) {
    if (type === 'normal') {
      return (
        <p className={`whitespace-nowrap ${alignment}`}>{dayjs(date).format(format)}</p>
      )
    }
    if (type === 'fromNow') {
      return <p className={`whitespace-nowrap ${alignment}`}>{dayjs(date).fromNow()}</p>
    }
  }
}
