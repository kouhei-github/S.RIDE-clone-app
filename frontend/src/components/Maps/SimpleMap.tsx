"use client"
import Map, { GeolocateControl, GeolocateResultEvent, useMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import {BFF} from '@/app/api/utils'
import {RootObject} from '@/components/Maps/index'

type props = {
  setFullAddress: (v: string) => void
  address: string
}

const geoLocaleOptions = {
  positionOptions: { enableHighAccuracy: true },
  fitBoundsOptions: { maxZoom: 15 },
  trackUserLocation: true,
  showUserHeading: true
}

/**
 * ユーザーの現在位置を中心に表示し、トラッキングしつつ、向かっている方向を北にマップを回転させる
 */
const SimpleMap = (props: props) => {
  const { setFullAddress, address } = props
  const { map } = useMap()
  useEffect( () => {
    if (map) {
      const language = new MapboxLanguage({
        defaultLanguage: 'ja'
      })
      map.addControl(language)
    }
  }, [map] )

  const geoControlRef = useRef<mapboxgl.GeolocateControl>(null)
  const onGeolocate = async (e: GeolocateResultEvent) => {
    map?.easeTo({
      center: { lat: e.coords.latitude, lng: e.coords.longitude },
      bearing: e.coords.heading ?? 0
    })
    const _res = (await BFF.get<{status: number, data: RootObject}>( `/api/geocode?longitude=${e.coords.longitude}&latitude=${e.coords.latitude}`, {
      cache: "no-store"
    } ))
    const full_address =  _res.data?.data.features[0].properties.full_address;
    setFullAddress(full_address!.split(" ")[2])
  }

  const onLoad = () => {
    if (!geoControlRef.current?.trigger()) {
      geoControlRef.current?.trigger()
    }
  }

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';


  return (
      <Map
          id='map'
          initialViewState={{
            longitude: 139.636814,
            latitude: 35.443098,
            zoom: 15
          }}
          style={{ width: '100%', height: '58vh' }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={mapboxToken}
          onLoad={address === "" ? onLoad : console.log}
      >
        <GeolocateControl
            ref={geoControlRef}
            {...geoLocaleOptions}
            onGeolocate={e => {
              address === "" ? onGeolocate(e) : console.log(`Address: ${address}`)
            }}
            onError={e => {
              errorMsg(e)
            }}
        />
      </Map>
  )
}

export default SimpleMap

/**
 * geolocation取得時のエラーアラートを表示
 * @param error
 */
const errorMsg = (error: { code: number }): void => {
  // 0:UNKNOWN_ERROR			原因不明のエラー
  // 1:PERMISSION_DENIED		利用者が位置情報の取得を許可しなかった
  // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
  // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた

  const errorInfo = [
    '原因不明のエラーが発生しました。',
    '位置情報の取得が許可されていません。',
    '電波状況などで位置情報が取得できませんでした。',
    '位置情報の取得に時間がかかり過ぎてタイムアウトしました。'
  ]

  const errorMessage = '[エラー番号: ' + error.code + ']\n' + errorInfo[error.code]
  alert(errorMessage)
}