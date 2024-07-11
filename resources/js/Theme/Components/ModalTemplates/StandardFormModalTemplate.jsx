import { Fragment } from 'react'
import ActionButton from '../Buttons/ActionButton'
import ModalCloseButton from '../Buttons/ModalCloseButton'
import ProcessingLoader from '../ProcessingLoader'

export default function StandardFormModalTemplate({
  title = '',
  closeForm,
  submit,
  processing = false,
  leftSideNote,
  cancelBtnLabel = 'Cancel',
  submitBtnLabel = 'Submit',
  submitBtnType = 'submit',
  onClickSubmitBtn = null,
  withoutModalCloseBtn = false,
  withoutActions = false,
  bgTransparent = false,
  withoutPadding = false,
  onCloseConfirmation = null,
  bodyClassName,
  headerBody,
  children,
}) {
  return (
    <form
      className="w-full rounded-md shadow-lg"
      encType="multipart/form-data"
      onSubmit={submit}
    >
      <ProcessingLoader visible={processing} />
      <div className="rounded-t-xl px-4 py-2 flex-between gap-6 bg-[#F0F0F0] dark:bg-[#162231]">
        <p className="font-bold text-lg text-start text-gray-700 dark:text-white">
          {title}
        </p>
        {!withoutModalCloseBtn && (
          <ModalCloseButton
            onClick={onCloseConfirmation ?? closeForm}
            disabled={processing}
          />
        )}
      </div>

      {headerBody}

      {/* <div className="rounded-b-xl p-4 w-full bg-[#F0F0F0] dark:bg-[#121E2D]"> */}
      <div
        className={`w-full ${
          !bgTransparent && 'bg-[#F9FAFD] dark:bg-[#121E2D]'
        } ${bodyClassName} ${withoutPadding ? 'p-0' : 'p-4'}`}
      >
        {children}
        {!withoutActions && (
          <Fragment>
            <hr className="mt-6 mb-4" />
            <div className={`${leftSideNote ? 'flex-between' : 'flex-end'}`}>
              {leftSideNote && (
                <p className="text-gray-700 dark:text-white">{leftSideNote}</p>
              )}

              <div className="flex-end gap-2">
                <ActionButton
                  label={cancelBtnLabel}
                  action="cancel"
                  onClick={closeForm}
                  disabled={processing}
                />
                <ActionButton
                  label={submitBtnLabel}
                  type={submitBtnType}
                  onClick={submit}
                  action="confirm"
                  disabled={processing}
                />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </form>
  )
}
