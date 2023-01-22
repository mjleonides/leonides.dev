// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "leonides.dev",
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					charset: "utf-8",
				},
				{
					hid: "description",
					name: "description",
					content:
						"Howdy! My name is Michael, and I build stuff for the web. Here on my website you can contact me and view my resume.",
				},
			],
			script: [{ src: "assets/scripts/handleScroll.js", defer: true }],
			link: [
				{
					rel: "stylesheet",
					href: "assets/styles/css/all.min.css",
				},
			],
		},
	},
	css: ["~/assets/styles/global.scss"],
	modules: ["@nuxt/image-edge"],
	image: {},
});
