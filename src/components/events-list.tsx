import React from "react"
import EventCard from "./event-card"
import { EventoEvent } from "@prisma/client"

type EventsListProps = {
	events: EventoEvent[]
}

export default async function EventsList({ events }: EventsListProps) {
	return (
		<section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
			{events.map((event) => {
				return <EventCard key={event.id} event={event} />
			})}
		</section>
	)
}
