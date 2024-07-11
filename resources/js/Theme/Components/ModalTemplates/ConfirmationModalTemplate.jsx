import { Fragment } from 'react'
import ActionButton from '../Buttons/ActionButton'
import ModalCloseButton from '../Buttons/ModalCloseButton'
import ProcessingLoader from '../ProcessingLoader'

export default function ConfirmationModalTemplate({
  title = '',
  closeForm,
  submit,
  processing = false,
  leftSideNote,
  cancelBtnLabel = 'Cancel',
  submitBtnLabel = 'Submit',
  submitBtnAction = 'confirm',
  withoutActions = false,
  children,
}) {
  return (
    <form className="rounded-md shadow-lg" onSubmit={submit}>
      <ProcessingLoader visible={processing} />
      <div className="rounded-t-xl px-4 py-2 flex-between gap-6 bg-white dark:bg-[#162231]">
        <p className="font-bold text-lg text-start text-gray-700 dark:text-white">
          {title}
        </p>
        <ModalCloseButton onClick={closeForm} disabled={processing} />
      </div>

      <div className="rounded-b-xl p-4 bg-[#F9FAFD] dark:bg-[#121E2D]">
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
                  type="submit"
                  action={submitBtnAction}
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
