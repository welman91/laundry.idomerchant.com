import LogoImg from '../../../assets/images/bonvivo_logo.jpg'

export default function IdoMemberLogo() {
  return (
    <div className="flex-start gap-2">
      <img src={LogoImg} alt="Application Logo" width={30} />
      <div className="flex-center text-3xl font-bold font-caprasimo">
        {/* <p className="text-gray-700 dark:text-white">iDo</p> */}
        <p className="text-green-600">Bonvivo</p>
      </div>
    </div>
  )
}
