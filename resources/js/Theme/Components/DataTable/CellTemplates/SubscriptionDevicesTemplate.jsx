import ActivateDeviceAction from '@/Pages/Noc/DeviceActivation/Components/Actions/ActivateDeviceAction'
import { useState } from 'react'
import { MdWifi, MdWifiOff } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa6'
import UpdateDeviceStatusAction from '@/Pages/Noc/DeviceActivation/Components/Actions/UpdateDeviceStatusAction'
import ReturnBackDeviceAction from '@/Pages/Noc/DeviceActivation/Components/Actions/ReturnBackDeviceAction'
import MenuItemButtonDropdown from '@/Components/MenuItemButtonDropdown'
import MenuDropdown from '@/Components/MenuDropdown'
import { Menu } from '@headlessui/react'
import { TbDownload, TbDownloadOff } from 'react-icons/tb'

export default function SubscriptionDevicesTemplate({
  roles,
  customer,
  subscription,
  devices,
}) {
  const [openDeviceActivationForm, setOpenDeviceActivationForm] = useState(false)
  const [openDeviceUpdateForm, setOpenDeviceUpdateForm] = useState(false)
  const [openReturnBackForm, setOpenReturnBackForm] = useState(false)

  const [deviceID, setDeviceID] = useState(null)

  function canAccessForm() {
    // if (!roles.some((r) => ['Admin NOC', 'Staff NOC'].includes(r))) return false
    // if (!['active'].includes(subscription.subs_status)) return false
    return true
  }

  function openFormAktivasi(device_id) {
    setDeviceID(device_id)
    setOpenDeviceActivationForm(true)
  }

  function openFormUpdate(device_id) {
    setDeviceID(device_id)
    setOpenDeviceUpdateForm(true)
  }

  function openFormReturn(device_id) {
    setDeviceID(device_id)
    setOpenReturnBackForm(true)
  }

  if (devices) {
    return (
      <ul className="space-y-1">
        {devices.map((device, i) => {
          return (
            <Device
              key={i}
              subscription={subscription}
              device={device}
              canAccessForm={canAccessForm}
              openFormAktivasi={openFormAktivasi}
              openFormUpdate={openFormUpdate}
              openFormReturn={openFormReturn}
            />
          )
        })}

        {/* AKTIVASI ALAT */}
        {openDeviceActivationForm && (
          <ActivateDeviceAction
            customer={customer}
            subscription={subscription}
            device_id={deviceID}
            setOpenForm={setOpenDeviceActivationForm}
          />
        )}

        {/* UPDATE STATUS */}
        {openDeviceUpdateForm && (
          <UpdateDeviceStatusAction
            customer={customer}
            subscription={subscription}
            device_id={deviceID}
            setOpenForm={setOpenDeviceUpdateForm}
          />
        )}

        {/* CABUT ALAT */}
        {openReturnBackForm && (
          <ReturnBackDeviceAction
            customer={customer}
            subscription={subscription}
            device_id={deviceID}
            setOpenForm={setOpenReturnBackForm}
          />
        )}
      </ul>
    )
  } else {
    return <p></p>
  }
}

const Device = ({
  subscription,
  device,
  canAccessForm,
  openFormAktivasi,
  openFormUpdate,
  openFormReturn,
}) => {
  // console.log(device)
  return (
    <li className="list-discx bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
      <div className="flex-between gap-4">
        {canAccessForm() && (
          <MenuDropdown>
            {/* AKTIVASI ALAT */}
            {!device?.pivot?.activated_at && !device?.pivot?.returned_at && (
              <Menu.Item>
                {({ active }) => (
                  <MenuItemButtonDropdown
                    icon={<FaPowerOff size={20} />}
                    label="Aktivasi Alat Ini"
                    onClick={() => {
                      if (subscription.subs_status == 'register')
                        return alert('Silahkan konfirmasi berlangganan terlebih dahulu')
                      openFormAktivasi(device.id)
                    }}
                  />
                )}
              </Menu.Item>
            )}

            {/* UPDATE STATUS ALAT */}
            {device?.pivot?.activated_at && (
              <Menu.Item>
                {({ active }) => (
                  <MenuItemButtonDropdown
                    icon={<MdWifi size={20} />}
                    label="Update Status Alat"
                    onClick={() => {
                      if (device.pivot?.returned_at)
                        return alert('Alat sudah dikembalikan!')
                      openFormUpdate(device.id)
                    }}
                  />
                )}
              </Menu.Item>
            )}

            {/* PENGEMBALIAN ALAT */}
            {!device?.pivot?.returned_at && (
              <Menu.Item>
                {({ active }) => (
                  <MenuItemButtonDropdown
                    icon={<TbDownload size={20} />}
                    label="Pengembalian Alat"
                    onClick={() => {
                      if (device?.pivot?.device_status == 'on') {
                        alert(
                          'Alat masih berstatus ON, silahkan di OFF kan terlebih dahulu!',
                        )
                      } else {
                        openFormReturn(device.id)
                      }
                    }}
                  />
                )}
              </Menu.Item>
            )}
          </MenuDropdown>
        )}
        <div className="flex-end gap-2">
          <p className="text-gray-700 dark:text-white">{device.sn}</p>
          <div className="flex-start gap-1">
            {/* IS DEVICE ACTIVATED ALREADY ? */}
            {device?.pivot?.activated_at ? (
              <div className="p-1 bg-green-700 text-white" title="Sudah Diaktivasi">
                <FaPowerOff />
              </div>
            ) : (
              <div className="p-1 bg-gray-500 text-white" title="Belum Diaktivasi">
                <FaPowerOff />
              </div>
            )}

            {/* JIKA DEVICE SATATUS OFF */}
            {device?.pivot?.activated_at && device?.pivot?.device_status == 'off' && (
              <div className="p-1 bg-rose-800 text-white" title="Status Alat OFF">
                <MdWifiOff />
              </div>
            )}

            {/* JIKA DEVICE SATATUS ON */}
            {device?.pivot?.activated_at && device?.pivot?.device_status == 'on' && (
              <div className="p-1 bg-green-700 text-white" title="Status Alat ON">
                <MdWifi />
              </div>
            )}

            {/* JIKA ALAT BELUM DIKEMBALIKAN */}
            {device?.pivot?.activated_at &&
              !device?.pivot?.returned_at &&
              subscription.subs_status == 'off' && (
                <div className="p-1 bg-rose-800 text-white" title="Alat Belum Kembali">
                  <TbDownloadOff />
                </div>
              )}

            {/* JIKA ALAT SUDAH DIKEMBALIKAN */}
            {device?.pivot?.returned_at && (
              <div className="p-1 bg-green-700 text-white" title="Alat Sudah Kembali">
                <TbDownload />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
