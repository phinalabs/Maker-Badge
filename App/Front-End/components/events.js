import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function EventsCard() {
  const { data, error } = useSWR('http://localhost:3000/api/events', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data);

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.date}</div>
      <div>{data.location}</div>
      <div>{data.details}</div>
    </div>
  )
}
export default EventsCard;
