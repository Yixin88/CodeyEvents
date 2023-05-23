import React from "react";
import { getEventById, getAllEvents, getFeaturedEvents } from "../../helpers/api-util";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import Head from "next/head";

export default function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
      
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {

  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  if (!event) {
    return {
      notFound: true
    }
  }

  return {
    props: {selectedEvent: event},
    revalidate: 10
  }
}

export async function getStaticPaths() {

  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map(event => ({ params: { eventId: event.id }}))

  return {
    paths: paths,
    fallback: true
  }
}