<template>
	<div>
		<div class="container">
			<header><HeaderIcons /></header>
			<div class="intro-container">
				<div class="intro-section">
					<img
						class="avi"
						width="200"
						src="~/assets/images/avi.jpeg"
						alt="Head shot of Mike Leonides smiling in front of greenery. He is quite gorgeous."
					/>
					<h1>Howdy! My name is Mike, and I build stuff for the web.</h1>
					<p>
						I am passionate about creating a fully accessible and resilient web
						for all, and I support an ethical and respectful implementation of
						technology for the common good.
					</p>
					<div class="actions-container">
							<div>
								<a href="mailto:contact@leonides.dev"
									>Click here to contact me.</a
								>
							</div>
						<ResumeNotice v-if="!resumeLoading"/>
					</div>
				</div>
			</div>

			<EntryList v-if="entries" :entries="entries" />
		</div>
	</div>
</template>

<script setup lang="ts">
import useGetResumeData from "@/assets/queries/useGetResumeData";

const entries = ref();
const resumeLoading = ref(true);

onMounted(async () => {
	//have to use async await on the useGetResume composable or else it tries to set values before the api call is done
	// get events from mock db when component is created
	const { data, isLoading, error } = await useGetResumeData();
	// data, isLoading, and error from useGetResumeData() are now available in this component. These are not new variables but the same ones from
	// the function. However they are refs. So to access the original value of the error for example, methods need to be called on error.value.methodName()
	if (error.value != undefined) {
		console.log("Get resume failed due to " + error.value);
	}
	entries.value = data.value;
	resumeLoading.value = isLoading.value;
});
</script>
<style lang="scss" scoped>
.intro-container {
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	justify-content: center;
}

.intro-section {
	height: 400px;
}

h1 {
	font-size: calc(1rem + 0.5vw);
	margin: 1rem 0;
}

.actions-container {
	display: inline-flex;
	align-items: center;
	gap: 1ch;

	// a {
	// 	margin-right: 1ch;
	// }

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
}

.avi {
	max-width: 40vw;
}
</style>