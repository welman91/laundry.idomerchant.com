import { Fragment } from 'react'
import ActionButton from '../Buttons/ActionButton'
import ModalCloseButton from '../Buttons/ModalCloseButton'
import ProcessingLoader from '../ProcessingLoader'

export default function xxxStandardFormModalTemplate({
  title = '',
  closeForm,
  submit,
  processing = false,
  leftSideNote,
  cancelBtnLabel = 'Cancel',
  submitBtnLabel = 'Submit',
  withoutActions = false,
  withPadding = true,
  withHeader = true,
  headerBody,
  bodyClassName,
  bgTransparent = false,
  children,
}) {
  return (
    <form
      className="rounded-md shadow-lg"
      encType="multipart/form-data"
      onSubmit={submit}
    >
      <ProcessingLoader visible={processing} />

      {withHeader && (
        <div className="rounded-t-xl px-4 py-2 flex-between gap-6 bg-white dark:bg-[#162231]">
          <p className="font-bold text-lg text-start text-gray-700 dark:text-white">
            {title}
          </p>
          <ModalCloseButton onClick={closeForm} disabled={processing} />
        </div>
      )}

      {headerBody}

      <div
        className={`w-full overflow-hidden ${
          !bgTransparent && 'bg-[#F9FAFD] dark:bg-[#121E2D]'
        } ${bodyClassName} ${withPadding && 'p-4'}`}
        // className={`w-full rounded-b-xl overflow-hidden border-2 border-primary bg-[#F9FAFD] dark:bg-[#121E2D] ${bodyClassName} ${
        //   withPadding && 'p-4'
        // }`}
      >
        {children}
        {!withoutActions && (
          <Fragment>
            <hr className="mt-6 mb-4" />
            <div
              className={`pb-4 px-4 ${leftSideNote ? 'flex-between gap-4' : 'flex-end'}`}
            >
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
