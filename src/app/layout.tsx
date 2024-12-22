import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Container from "@/components/container"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Evento",
	description:
		"Find events around you. Browse more than 10,000 events worldwide.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-950 text-white`}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	)
}
