<template>
	<div class="exp-item" :style="`top: ${myTop}px`" ref="mySingleEntry">
		<p class="date"><slot name="date"></slot></p>
		<h2><slot name="title"></slot></h2>
		<p class="subtitle">
			<slot name="subtitle"></slot><slot name="location"></slot>
		</p>
		<slot name="work"></slot>
	</div>
</template>

<script setup lang="ts">
const myTop = ref();
const mySingleEntry = ref();

const myHeight = computed(() => {
	if (mySingleEntry.value.previousSibling.className === "exp-item") {
		return (mySingleEntry.value.offsetTop + mySingleEntry.value.previousSibling.offsetHeight - 96)
	} else {
		return (mySingleEntry.value.offsetTop + mySingleEntry.value.offsetHeight - 96)
	}
})

const handleTop = () => {
	myTop.value =  window.scrollY <= (myHeight.value) ? 0 : (myHeight.value - window.scrollY);

};

onMounted(() => {
	window.addEventListener("scroll", handleTop);
});
</script>

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
