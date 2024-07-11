export default function TransferAssetTemplate({ devices, team_id }) {
  if (devices) {
    return (
      <ul className="px-4">
        {devices.map((device, i) => {
          return (
            <li key={i} className="list-disc">
              {`SN - ${device.sn}`}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return <p></p>
  }
}
