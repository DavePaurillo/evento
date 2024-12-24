import { EventoEvent } from "@prisma/client"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalizeFirstCharacter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function getEvents(query: string, value: string) {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?${query}=${value}`
	)
	const events: EventoEvent[] = await response.json()

	return events
}

export async function getEvent(slug: string) {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	)
	const event: EventoEvent = await response.json()
	return event
}
