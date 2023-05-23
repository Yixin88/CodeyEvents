import React from 'react'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function EventPage(props) {

  const events = props.events;
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find your next developer event near you!' />
      </Head>
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
