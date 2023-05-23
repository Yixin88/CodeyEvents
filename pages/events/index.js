import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

export default function EventPage(props) {

  const events = getAllEvents();
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

  const response = await fetch("https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json")
  const data = await response.json();

  const transfromedArray = [];

  for (const key in data) {
    transfromedArray.push({
      id: key,
      title: data[key].title,
      description:
        data[key].description,
      date: data[key].date,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
    })
  }

  console.log(transfromedArray)

  return {
    props: {events: transfromedArray}
  }
}
