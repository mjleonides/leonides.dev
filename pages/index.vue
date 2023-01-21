<template>
	<div>
		<div class="container">
			<header><HeaderIcons /></header>
			<div class="intro-container">
				<div class="intro-section">
					<nuxt-img
						src="assets/images/avi.jpeg"
						sizes="sm:40vw lg:256px"
						alt="Headshot of Michael Leonides smiling in front of greenery. He is quite gorgeous."
					></nuxt-img>
					<!-- <p class="greeting">Howdy!</p>-->
					<h1>Howdy! My name is Michael, and I build stuff for the web.</h1>
					<p>
						I am passionate about creating a fully accessible and resilient web
						for all, and I support an ethical and respectful implimentation of
						technology for the common good.
					</p>
					<p>
						<a href="mailto:michael@leonides.dev">Click here to contact me.</a>
						Scroll to view my resume.
					</p>
				</div>
			</div>

			<EntryList :entries="entries" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			entries: [
				{
					date: "present",
					title: "Web Administrator, Associate",
					subtitle: "K2United, LLC",
					location: "College Station, TX",
				},
				{
					date: "present",
					title: "Web Developer",
					subtitle: "The Delight Media Co.",
				},
				{
					date: "2021 - 2022",
					title: "Techincal Support Engineer",
					subtitle: "Instructure, Inc.",
					location: "Salt Lake City, UT",
					work: [
						"Provided real-time technical support to end users and administrators of top cloud-based Learning Management System",
						"Fixed end-user interface issues via live contact and replicated/troubleshot bugs",
						"Escalated cases with detailed and complete records not resolvable at the L1 level to the L2 Support team",
						"Resolved over 93% of 1000+ cases on first-contact",
						"95+% Customer Satisfaction based on post-interaction surveys",
					],
				},
				{
					date: "2021",
					title: "Electronic Warfare Engineer",
					subtitle: "SRC, Inc",
					location: "San Antonio, TX",
					work: [
						"Conducted all-source intelligence research and engineering analysis to characterize system performance and capabilities",
						"Developed electronic warfare system models to support the national EWIRDB",
						"Analyzed ground, naval, and airborne communications, electro-optical/infrared systems, and other onboard electronic systems",
						"Solved electronic warfare feedback reports from the operational user community",
					],
				},
				{
					date: "2021",
					title: "Bachelor of Science in Ocean Engineering",
					subtitle: "Texas A&M University",
					location: "College Station, TX",
				},
				{
					title: "Things I Know",
					work: [
						"Technical Writing",
						"MS Office",
						"Web Development",
						"HTML5",
						"CSS3",
						"Sass",
						"Git",
						"Postman",
					],
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.intro-container {
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	justify-content: center;
}

h1 {
	font-size: calc(1rem + 0.5vw);
	margin: 1rem 0;
}
</style>
