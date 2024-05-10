"use client"
import {useEffect, useState} from 'react'
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import "@/app/slider.css"

function TaxiSlider() {
  const [value, setValue] = useState(10);

  useEffect( () => {
    if (value !== 100) return
    console.log("done")
  }, [value] );

  return (
      <div className={"w-full relative"}>
        <Slider
            value={value}
            onChange={(e) => setValue(e)}
            min={0}
            max={100}
            className="horizontal-slider"
        />
        <p className={"absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-extrabold w-[60%] mx-auto text-center text-[17px]  text-yellow-300"}>スライドしてタクシーを呼ぶ</p>
      </div>
  );
}

export default TaxiSlider;