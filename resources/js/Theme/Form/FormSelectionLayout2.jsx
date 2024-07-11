import ModalOpenButton from '@/Theme/Components/Buttons/ModalOpenButton'
import ModalCloseButton from '@/Theme/Components/Buttons/ModalCloseButton'
import { useState } from 'react'
import Modal from '@/Theme/Components/Modal'

export default function FormSelectionLayout({
  title,
  icon,
  selectedItemView,
  formWindow,
  visible,
  setVisible,
  withSelectionModal = true,
  canSelect = true,
  alertCannotSelect = null,
}) {
  return (
    <div className="w-full">
      <div className="w-full flex-between gap-8">
        <p className="text-gray-700 dark:text-white">{title}</p>
        {withSelectionModal && (
          <ModalOpenButton
            onClick={() => {
              canSelect ? setVisible(true) : alert(alertCannotSelect)
            }}
          >
            {icon}
            <p className="whitespace-nowrap">Pilih</p>
          </ModalOpenButton>
        )}
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      {selectedItemView}

      <Modal visible={visible} setVisible={setVisible}>
        {formWindow}
      </Modal>
    </div>
  )
}
