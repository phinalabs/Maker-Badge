import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function EventsCard() {
  const { data, error } = useSWR('http://localhost:3000/api/events', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    {data.map((item) =>
    <div key={item._id} class="px-4">
      <div class="border-b pb-4 border-gray-400 border-dashed">
        <div tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">{item.name}</div>
        <div class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">{item.date}</div>
        <div>{item.location}</div>
        <div class="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">{item.details}</div>
        </div>
      </div>
    )}
    </>
  )
    }
      export default EventsCard;
