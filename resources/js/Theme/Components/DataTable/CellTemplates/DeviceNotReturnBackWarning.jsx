import { Fragment } from 'react'
import { FaServer } from 'react-icons/fa6'
// import ReturnBackDevicesAction from '@/Pages/Public/Subscription/Components/DataTable/Actions/ReturnBackDevicesAction'
// import Modal from '../../Modal'
// import axios from 'axios'
// import ProcessingLoader from '../../ProcessingLoader'

export default function DeviceNotReturnBackWarning({ subscription, user }) {
  // const [visible, setVisible] = useState(false)
  // const [processing, setProcessing] = useState(false)
  // const [loadSubscription, setLoadSubscription] = useState(null)

  // const onClick = () => {
  //   setProcessing(true)
  //   const url = route('return-back-devices.check', [
  //     user.current_team.slug,
  //     subscription.id,
  //   ])

  //   axios
  //     .post(url)
  //     .then((response) => {
  //       setLoadSubscription(response.data)
  //       setVisible(true)
  //       setProcessing(false)
  //     })
  //     .catch((error) => {
  //       setProcessing(false)
  //       setVisible(false)
  //       if (error.response.status == 422) return alert(error.response.data.msg)
  //       return alert('Terjadi masalah, tidak dapat membuka form')
  //     })
  // }

  return (
    <Fragment>
      <div className="text-left animate-pulse flex-start gap-2 w-fit px-2 mt-2 bg-red-600 text-white">
        <FaServer />
        <p className="whitespace-nowrap">Ada Alat Belum Kembali</p>
      </div>

      {/* <Modal visible={processing} setVisible={setProcessing} noescape>
        <ProcessingLoader visible={processing} />
      </Modal>

      <Modal visible={visible} setVisible={setVisible} noescape>
        <ReturnBackDevicesAction
          subscription={loadSubscription}
          setVisible={setVisible}
          user={user}
        />
      </Modal> */}
    </Fragment>
  )
}
