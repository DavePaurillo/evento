import "server-only"
import { unstable_cache } from "next/cache"
import { notFound } from "next/navigation"
import prisma from "./db"
import { capitalizeFirstCharacter } from "./utils"

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
