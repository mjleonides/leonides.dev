<template>
	<div>
		<div class="container">
			<header><HeaderIcons /></header>
			<div class="intro-container">
				<div class="intro-section">
					<img
						width="256"
						src="assets/images/avi.jpeg"
						alt="Head shot of Mike Leonides smiling in front of greenery. He is quite gorgeous."
					/>
					<h1>Howdy! My name is Mike, and I build stuff for the web.</h1>
					<p>
						I am passionate about creating a fully accessible and resilient web
						for all, and I support an ethical and respectful implementation of
						technology for the common good.
					</p>
					<p>
						<a href="mailto:contact@leonides.dev">Click here to contact me.</a>
						Scroll to view my resume.
					</p>
				</div>
			</div>

			<EntryList :entries="entries" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const entries = ref(null);

onMounted(() => {
	// get events from mock db when component is created
	axios
		.get(
			"https://my-json-server.typicode.com/mjleonides/mjleonides.github.io/entries"
		)
		.then((response) => {
			entries.value = response.data;
		})
		.catch((error) => {
			console.log(error);
		});
});
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
