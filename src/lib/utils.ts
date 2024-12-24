import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./db"
import { notFound } from "next/navigation"
import { unstable_cache } from "next/cache"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalizeFirstCharacter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getEvents = unstable_cache(
	async (query: string, value: string, page = 1) => {
		// undefined is used to fetch all events
		// we cannot use the undefined trick for the totalCount so we created a variable for 2 different queries
		const events = await prisma.eventoEvent.findMany({
			where: {
				[query]: value === "all" ? undefined : capitalizeFirstCharacter(value),
			},
			orderBy: {
				date: "asc",
			},
			take: 6,
			skip: (page - 1) * 6,
		})

		let totalCount = 0
		if (value === "all") {
			totalCount = await prisma.eventoEvent.count()
		} else {
			totalCount = await prisma.eventoEvent.count({
				where: {
					[query]: capitalizeFirstCharacter(value),
				},
			})
		}

		return { events, totalCount }
	}
)

export const getEvent = unstable_cache(async (slug: string) => {
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	})

	if (!event) {
		return notFound()
	}

	return event
})
