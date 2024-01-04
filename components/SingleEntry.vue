<template>
	<div class="exp-item">
		<p class="date"><slot name="date"></slot></p>
		<h2><slot name="title"></slot></h2>
		<p class="subtitle">
			<slot name="subtitle"></slot><slot name="location"></slot>
		</p>
		<slot name="work"></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div.exp-item {
	p {
		margin: 0;
	}
	h2 {
		font-size: calc(1.5rem + 0.5vw);
	}

	p.subtitle {
		font-size: calc(1rem + 0.25vw);
	}

	p.date {
		text-transform: uppercase;
		font-size: 0.75rem;
	}
}
</style>
