import {FiPlus} from 'react-icons/fi'
import {FaCarSide, FaCcAmazonPay} from 'react-icons/fa6'

export const Pannel = () => {
  return (
      <section className={"flex text-gray-400 my-4 justify-center i"}>
        <div className={"w-[130px] h-[130px] bg-gray-600 content-center flex-col space-y-3"}>
          <h2>運賃</h2>
          <p className={"text-white"}>メーター運賃</p>
          <div className={"flex items-center justify-center"}>
            <FiPlus/>
            <p>迎車料</p>
          </div>
        </div>

        <div className={"w-[130px] h-[130px] bg-gray-600 content-center flex-col space-y-3"}>
          <h2>支払い方法</h2>
          <FaCcAmazonPay className={"fill-white w-[30px] h-[30px]"} />
          <p>車内支払</p>
        </div>

        <div className={"w-[130px] h-[130px] bg-gray-600 content-center flex-col space-y-3"}>
          <h2>運賃</h2>
          <FaCarSide className={"fill-white w-[60px] h-[30px]"} />
          <p>車内支払</p>
        </div>
      </section>
  )
}