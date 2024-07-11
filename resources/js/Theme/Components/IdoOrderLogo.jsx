import LogoImg from '../../../assets/images/logo.png'

export default function IdoOrderLogo({ subname = null }) {
  return (
    <div className="lg:flex-start gap-2">
      <div className="flex-start gap-2">
        <img src={LogoImg} alt="Application Logo" width={30} />
        <div className="flex-start text-3xl font-bold font-caprasimo">
          <p className="text-gray-700 dark:text-white">IDO</p>
          <p className="text-primary">ORDER</p>
        </div>
      </div>
      {subname && (
        <div className="flex-start gap-2 lg:text-3xl font-bold font-caprasimo">
          <p className="hidden lg:inline-block text-gray-700 dark:text-white">|</p>
          <p className="text-gray-700 dark:text-white whitespace-nowrap">{subname}</p>
        </div>
      )}
    </div>
  )
}
