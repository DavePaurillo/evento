import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import next from "next"
import Link from "next/link"
import React from "react"

const btnStyle =
	"flex items-center gap-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"

type Props = {
	previousPath: string
	nextPath: string
}

export default function PaginationControls({ previousPath, nextPath }: Props) {
	console.log(previousPath, nextPath)
	return (
		<section className='flex items-center justify-between w-full'>
			{previousPath ? (
				<Link href={previousPath} className={btnStyle}>
					<ArrowLeftIcon />
					Previous
				</Link>
			) : (
				<div />
			)}

			{nextPath && (
				<Link href={nextPath} className={btnStyle}>
					Next
					<ArrowRightIcon />
				</Link>
			)}
		</section>
	)
}
