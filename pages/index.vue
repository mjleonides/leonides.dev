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
					<div class="actions-container">
						<p>
							<a href="mailto:contact@leonides.dev"
								>Click here to contact me.</a
							>
						</p>
						<ResumeNotice :isLoading="true" />
					</div>
				</div>
			</div>

			<EntryList v-if="entries" :entries="entries" />
		</div>
	</div>
</template>

<script setup>
import useGetResumeData from "/assets/composables/useGetResumeData.ts";

const entries = ref();
const myError = ref(null);
const resumeLoading = ref(true);

onMounted(async () => {
	// get events from mock db when component is created
	const { data, isLoading, error } = await useGetResumeData(
		"https://my-json-server.typicode.com/mjleonides/mjleonides.github.io/",
		"entries"
	);

	console.log(error);
	//have to use async await on the useGetResume composable or else it trues to set this value before the api call is done
	entries.value = data.value;
	// resumeLoading.value = isLoading;
	// console.log("after" + resumeLoading.value);
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

.actions-container {
	display: inline-flex;
	gap: 1ch;
	align-items: center;
}
</style>
