import React from 'react'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

export default function EventPage(props) {

  const events = props.events;
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </div>
  )
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {events: allEvents},
    revalidate: 60
  }
}
