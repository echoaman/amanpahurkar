module.exports = {
    reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/resume",
				destination: "/AmanPahurkar.pdf",
				permanent: true
			}
		]
	}
}
