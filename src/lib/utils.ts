import { EventoEvent } from "@prisma/client"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./db"
import { notFound } from "next/navigation"

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
		orderBy: {
			date: "asc",
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

	if (!event) {
		return notFound()
	}

	return event
}
