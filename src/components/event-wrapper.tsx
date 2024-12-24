import React from "react"
import EventsList from "./events-list"
import { getEvents } from "@/lib/utils"

export default async function EventWrapper({
	query,
	value,
	page,
}: {
	query: string
	value: string
	page?: number
}) {
	const { events, totalCount } = await getEvents(query, value, (page = 1))
	const previousPath = page > 1 ? `/events/${value}?page=${page - 1}` : ""
	const nextPath =
		totalCount > 6 * page ? `/events/${value}?page=${page + 1}` : ""

	return (
		<EventsList
			events={events}
			previousPath={previousPath}
			nextPath={nextPath}
		/>
	)
}
