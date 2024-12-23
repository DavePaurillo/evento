import React from "react"
import EventsList from "./events-list"
import { getEvents } from "@/lib/utils"

export default async function EventWrapper({
	query,
	value,
}: {
	query: string
	value: string
}) {
	const events = await getEvents(query, value)
	return <EventsList events={events} />
}
