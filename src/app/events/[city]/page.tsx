import React from "react"

export default function Events({
	params,
}: Readonly<{ params: { city: string } }>) {
	const { city } = params

	return <div>Events {city}</div>
}
