"use client"
import SimpleMap from '@/components/Maps/SimpleMap'
import TaxiSlider from '@/components/TaxiSlider'
import {PlaceInput} from '@/components/Pannel/PlaceInput'
import {useAddress} from '@/hooks/useAddress'
import {useState} from 'react'
import {Pannel} from '@/components/Pannel'

export default function Home() {
  const {address, setAddress} = useAddress()

  const [destination, setDestination] = useState("目的地 指定無し")
  return (
    <main className="">
      <section className={"h-[58vh] relative"}>
        <SimpleMap setFullAddress={setAddress} address={address} />
        <div className={"h-[5vh] bg-gray-800/90 absolute bottom-0 w-full z-50 flex items-center"}>
          <TaxiSlider />
        </div>
      </section>
      <section className={"h-[32vh] app-black"}>
        <PlaceInput address={address} />
        <div className={"border-black border-b-2 w-2/3 mx-auto my-1"} />
        <PlaceInput address={destination} />
        {/* パネル */}
        <Pannel />
      </section>
    </main>
  );
}
