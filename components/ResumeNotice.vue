<template>
		<div>{{ message }}<span v-if="!hideTyper" :class="isTyping ? '':'flashing'">|</span></div>
</template>

<script setup lang="ts">

const isTyping = ref(false);
const hideTyper = ref(false)

const msgString = "Scroll to view my resume.";
const msgArray = msgString.split("");
const typerArray = ref<string[]>([]);
const message = ref();


onMounted(() => {


let i = 0;

(function myTyper(i: number){
	isTyping.value = true;
	setTimeout(()=> {

		typerArray.value.push(msgArray[i]);
		message.value = typerArray.value.join("");
		i++
		
		if (i <= msgArray.length) {
			myTyper(i);
		} else {
			isTyping.value = false;
			setTimeout(() => {
				hideTyper.value = true;
			}, 3000)
		}
		
	}, 100)
})(i);

})
</script>

<style lang="scss" scoped>
/* */
</style>
