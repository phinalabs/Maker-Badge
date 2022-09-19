import EventsCard from "../components/EventsCard";
import Hero from "../components/Hero";

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