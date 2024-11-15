import Image from "next/image"

const SettingPageTitle = ({title}) => {
  return (
    <div className="flex items-center justify-between mb-4">
        <span className="text-lg text-dark-gray font-semibold">{title}</span>
        <Image src='/assets/imgs/setting-img.png' width={220} height={152} alt="settings img"/>
    </div>
  )
}

export default SettingPageTitle
