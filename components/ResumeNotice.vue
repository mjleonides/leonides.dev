<template>
	<div id="resume-notice">
		<div>...</div>
		<!-- <div v-if="!isLoading">Scroll to view my resume.</div> -->
	</div>
</template>

<script setup>
const props = defineProps({
	isLoading: Boolean
});

const isLoading = ref(true);
</script>

<style lang="scss" scoped>
/*
nothing
*/
</style>
