import { EventoEvent } from "@/lib/types"
import React from "react"
import EventsList from "./events-list"

export default async function EventWrapper({
	query,
	value,
}: {
	query: string
	value: string
}) {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?${query}=${value}`
	)
	const events: EventoEvent[] = await response.json()
	return <EventsList events={events} />
}
