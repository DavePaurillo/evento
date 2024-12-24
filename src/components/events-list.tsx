import React from "react"
import EventCard from "./event-card"
import { EventoEvent } from "@prisma/client"
import PaginationControls from "./pagination-controls"

type EventsListProps = {
	events: EventoEvent[]
	previousPath: string
	nextPath: string
}

export default async function EventsList({
	events,
	previousPath,
	nextPath,
}: EventsListProps) {
	return (
		<section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
			{events.map((event) => {
				return <EventCard key={event.id} event={event} />
			})}

			<PaginationControls previousPath={previousPath} nextPath={nextPath} />
		</section>
	)
}
