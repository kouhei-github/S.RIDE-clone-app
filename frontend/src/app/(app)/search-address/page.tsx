"use client"
import {useSearchParams} from 'next/navigation'
import RedirectButton from '@/components/RedirectButton'

const SearchAddress = () => {
  const query = useSearchParams()
  const address = query.get("name")
  return (
      <div>
        <RedirectButton address={address!} />
      </div>
  )
}

export default SearchAddress