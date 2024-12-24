import { EventoEvent } from "@prisma/client"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./db"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalizeFirstCharacter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function getEvents(query: string, value: string) {
	// undefined is used to fetch all events
	const events = await prisma.eventoEvent.findMany({
		where: {
			[query]: value === "all" ? undefined : capitalizeFirstCharacter(value),
		},
	})

	return events
}

export async function getEvent(slug: string) {
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	})

	return event
}
