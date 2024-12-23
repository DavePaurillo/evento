import EventsList from "@/components/events-list"
import H1 from "@/components/h1"
import React, { Suspense } from "react"
import Loading from "./loading"

export default function Events({
	params,
}: Readonly<{ params: { city: string } }>) {
	const { city } = params

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			<H1 className='mb-28'>
				{city === "all"
					? "Events in all cities"
					: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
			</H1>

			<Suspense fallback={<Loading />}>
				<EventsList city={city} />
			</Suspense>
		</main>
	)
}
