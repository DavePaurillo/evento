import { EventoEvent } from "@/lib/types"
import EventsList from "@/components/events-list"
import H1 from "@/components/h1"
import React from "react"

export default async function Events({
	params,
}: Readonly<{ params: { city: string } }>) {
	const { city } = params

	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	)
	const events: EventoEvent[] = await response.json()

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			<H1 className='mb-28'>
				{city === "all"
					? "Events in all cities"
					: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
			</H1>

			<EventsList events={events} />
		</main>
	)
}
