import React from "react"

export default function Event({
	params,
}: Readonly<{ params: { slug: string } }>) {
	const { slug } = params

	return <div>Event {slug}</div>
}
