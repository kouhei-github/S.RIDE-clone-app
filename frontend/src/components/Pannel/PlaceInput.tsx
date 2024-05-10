import Link from 'next/link'
import {GiPositionMarker} from 'react-icons/gi'
import {FaLocationArrow} from 'react-icons/fa6'

export const PlaceInput = (props: {address: string}) => {
  return (
      <div className={"py-4 w-11/12 mx-auto"}>
        <Link href={`/search-address?name=${props.address}`} className={"text-white"}>
          <p className={"flex items-center justify-between"}>
            <GiPositionMarker className={"fill-yellow-400"} />{props.address}<FaLocationArrow className={"rotate-45 fill-gray-400"} />
          </p>
        </Link>
      </div>

  );
}