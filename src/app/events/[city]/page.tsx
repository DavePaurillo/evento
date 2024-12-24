import H1 from "@/components/h1"
import React, { Suspense } from "react"
import Loading from "./loading"
import EventWrapper from "@/components/event-wrapper"
import { Metadata } from "next"
import { capitalizeFirstCharacter } from "@/lib/utils"
import { z } from "zod"

export function generateMetadata({
	params,
}: {
	params: { city: string }
}): Metadata {
	const { city } = params

	return {
		title:
			city === "all"
				? "Evento - All Events"
				: `Evento - Events in ${capitalizeFirstCharacter(city)}`,
	}
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

export default function Events({
	params,
	searchParams,
}: Readonly<{
	params: { city: string }
	searchParams: { [key: string]: string | string[] | undefined }
}>) {
	const { city } = params
	const page = pageNumberSchema.safeParse(searchParams.page)
	if (!page.success) {
		throw new Error("Invalid page number")
	}

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			<H1 className='mb-28'>
				{city === "all"
					? "Events in all cities"
					: `Events in ${capitalizeFirstCharacter(city)}`}
			</H1>

			<Suspense key={city + page.data} fallback={<Loading />}>
				<EventWrapper query='city' value={city} page={page.data} />
			</Suspense>
		</main>
	)
}
