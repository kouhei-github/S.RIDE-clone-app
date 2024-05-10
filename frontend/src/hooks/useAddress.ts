import { useState} from 'react'

interface IuseAddress {
  address: string
  setAddress: (v: string) => void
}

export const useAddress = (v: string): IuseAddress => {
  const [address, setAddress] = useState<string>(v)

  return {
    address, setAddress
  }
}