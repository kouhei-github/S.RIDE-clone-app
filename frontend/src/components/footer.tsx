import {FaCar, FaSpotify} from 'react-icons/fa6'
import {twMerge} from 'tailwind-merge'
import {CiTimer} from 'react-icons/ci'
import {IoMenu, IoQrCodeOutline} from 'react-icons/io5'

export const Footer = (props: {select: "car" | "reservation" | "spot" | "wallet" | "menu"}) => {
  const {select} =  props
  return (
      <section className={"h-[10vh] flex items-center bg-black text-white"}>
        <div className={twMerge(
            "content-center flex-col w-[70px] mx-auto space-y-2",
            select === "car" ? "text-yellow-300" : ""
        )}>
          <FaCar className={"w-[20px] h-[20px]"}/>
          <p className={"text-[14px]"}>すぐ呼ぶ</p>
        </div>
        <div className={twMerge(
            "content-center flex-col w-[70px] mx-auto space-y-2",
            select === "reservation" ? "text-yellow-300" : ""
        )}>
          <CiTimer  className={"w-[20px] h-[20px]"} />
          <p className={"text-[14px]"}>予約・空港</p>
        </div>
        <div className={twMerge(
            "content-center flex-col w-[70px] mx-auto space-y-2",
            select === "spot" ? "text-yellow-300" : ""
        )}>
          <FaSpotify className={"w-[20px] h-[20px]"} />
          <p className={"text-[14px]"}>スポット</p>
        </div>
        <div className={twMerge(
            "content-center flex-col w-[70px] mx-auto space-y-2",
            select === "wallet" ? "text-yellow-300" : ""
        )}>
          <IoQrCodeOutline className={"w-[20px] h-[20px]"} />
          <p className={"text-[14px]"}>Wallet</p>
        </div>
        <div className={twMerge(
            "content-center flex-col w-[70px] mx-auto space-y-2",
            select === "menu" ? "text-yellow-300" : ""
        )}>
          <IoMenu className={"w-[20px] h-[20px]"} />
          <p className={"text-[14px]"}>メニュー</p>
        </div>
      </section>
  )
}