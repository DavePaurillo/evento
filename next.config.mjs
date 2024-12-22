/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "bytegrad.com",
				port: "",
			},
		],
	},
}

export default nextConfig
