import Link from "next/link"
import React from "react"

const routes = [
	{
		path: "/terms-conditions",
		name: "Terms Conditions",
	},
	{
		path: "/privacy-policy",
		name: "Privacy Policy",
	},
]

export default function Footer() {
	return (
		<footer className='mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25'>
			<small className='text-xs'>
				&copy; 2050 Evento. All rights reserved.
			</small>

			<ul className='flex gap-3 sm:gap-8'>
				{routes.map((route) => {
					return (
						<li key={route.path}>
							<Link href={route.path}>{route.name}</Link>
						</li>
					)
				})}
			</ul>
		</footer>
	)
}
