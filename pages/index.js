import React from 'react'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list';
import Head from 'next/head';

export default function HomePage(props) {

  return (
    <div>
      <Head>
        <title>CodeyEvents</title>
        <meta name='description' content='Find your next developer event near you!' />
      </Head>
      <EventList items={props.events}/>
    </div>
  )
}


export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {events: featuredEvents},
    revalidate: 1800
  }
}