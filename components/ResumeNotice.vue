<template>
	<span id="resume-loading">
		<div v-if="isLoading">|</div>
	</span>
	<span id="resume-notice">
		<div v-if="!isLoading">Scroll to view my resume.</div>
	</span>
</template>

<script setup lang="ts">
defineProps({
	isLoading: {
		type: Boolean,
		default: true
	}
});

// console.log("resume notice: " + isLoading);
</script>

<style lang="scss" scoped>
#resume-loading {
	animation: flashing 1.25s step-start infinite;
}

@keyframes flashing {
	50% {
		opacity: 0;
	}
}
</style>
