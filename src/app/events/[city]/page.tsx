import H1 from "@/components/h1"
import React from "react"

export default function Events({
	params,
}: Readonly<{ params: { city: string } }>) {
	const { city } = params

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			{city === "all" ? (
				"All Events"
			) : (
				<H1>Events in {city.charAt(0).toUpperCase() + city.slice(1)}</H1>
			)}
		</main>
	)
}
