import { EventoEvent } from "@/app/types"
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
			{city === "all" ? (
				"All Events"
			) : (
				<H1>Events in {city.charAt(0).toUpperCase() + city.slice(1)}</H1>
			)}

			{events.map((event) => {
				return <div key={event.id}>{event.name}</div>
			})}
		</main>
	)
}
