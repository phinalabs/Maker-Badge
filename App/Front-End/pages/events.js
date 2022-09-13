import EventsCard from "../components/eventsCard";
import Hero from "../components/hero";

function Events() {
  return (
    <>
      <Hero title="Events" description="Events around the community" />
      <div className="container mx-auto px-4 sm:px-6">
        <EventsCard />
      </div>
    </>

  )
}

export default Events