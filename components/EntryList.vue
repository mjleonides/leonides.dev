<template>
	<div id="entry-list" class="entry-list">
		<SingleEntry v-for="entry in entries" :key="entry.position"
			><template #date>{{ entry.date }}</template
			><template #title>{{ entry.title }}</template
			><template #subtitle>{{ entry.subtitle }}</template
			><template v-if="entry.location" #location>{{
				" - " + entry.location
			}}</template>
			<template v-if="entry.work" #work>
				<ul>
					<li v-for="item in entry.work">{{ item }}</li>
				</ul></template
			></SingleEntry
		>
	</div>
</template>

<script>
export default {
	mounted() {},
	props: ["entries"],
	methods: {
		handleScroll: function () {
			document.querySelector(".entry-list").classList.toggle("active-list");
		},
	},
};
</script>

<style lang="scss" scoped>
.entry-list {
	margin-top: 5rem;
	opacity: 0.5;
	transition: opacity 0.25s ease-in-out;
}

.entry-list.active-list {
	opacity: 1;
}

ul {
	list-style-type: "-   ";
	padding-inline-start: 2.25ch;
	font-size: 1.125rem;

	li {
		line-height: 25.6px;
	}
}
</style>
