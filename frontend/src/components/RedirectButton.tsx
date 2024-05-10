"use client"
import {useRouter} from 'next/navigation'

const RedirectButton = (props: {address: string}) => {
  const { address } = props

  const router = useRouter()
  const redirect = () => {
    router.push(`/?address=${address}`)
  }

  return (
      <div onClick={(e) => redirect()}>
        {address}
      </div>
  )
}

export default RedirectButton;
