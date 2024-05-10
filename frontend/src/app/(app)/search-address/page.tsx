import RedirectButton from '@/components/RedirectButton'

const SearchAddress = ({
 params,
 searchParams,
}: {
  params: { slug: string };
  searchParams: { name: string | undefined };
}) => {
  const address =searchParams.name!
  return (
      <div>
        <RedirectButton address={address!} />
      </div>
  )
}

export default SearchAddress