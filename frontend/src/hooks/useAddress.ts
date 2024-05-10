import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'

interface IuseAddress {
  address: string
  setAddress: (v: string) => void
}

export const useAddress = (): IuseAddress => {
  const [address, setAddress] = useState<string>("")

  const query = useSearchParams()

  useEffect(() => {
    const address = query.get("address") ?? ""
    setAddress(address!)
  }, [])

  return {
    address, setAddress
  }
}