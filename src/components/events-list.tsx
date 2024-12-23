import { EventoEvent } from "@/lib/types"
import React from "react"
import EventCard from "./event-card"

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
