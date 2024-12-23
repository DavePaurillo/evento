import H1 from "@/components/h1"
import React, { Suspense } from "react"
import Loading from "./loading"
import EventWrapper from "@/components/event-wrapper"
import { Metadata } from "next"
import { capitalizeFirstCharacter } from "@/lib/utils"

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

export default function Events({
	params,
}: Readonly<{ params: { city: string } }>) {
	const { city } = params

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			<H1 className='mb-28'>
				{city === "all"
					? "Events in all cities"
					: `Events in ${capitalizeFirstCharacter(city)}`}
			</H1>

			<Suspense fallback={<Loading />}>
				<EventWrapper query='city' value={city} />
			</Suspense>
		</main>
	)
}
