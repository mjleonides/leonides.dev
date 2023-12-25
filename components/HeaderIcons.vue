<template>
	<div class="icons-container">
		<button
			class="fa-solid fa-circle-half-stroke"
			@click="handleClick"
			role="button"
			aria-label="Button toggle to switch between light and dark theme"
		></button>
		<a
			href="https://github.com/mjleonides"
			role="link"
			aria-label="Link to Michael's profile on Github"
			class="fa-brands fa-github"
		></a
		><a
			href="https://linkedin.com/in/mjleonides"
			role="link"
			aria-label="Link to Michael's profile on Linkedin"
			class="fa-brands fa-linkedin"
		></a>
	</div>
</template>

<script setup>
const handleClick = () => {
	let root = getComputedStyle(document.documentElement);
	let theme = document.documentElement.style;
	if (root.getPropertyValue("--theme-bg-color") === "#1f1f1f") {
		theme.setProperty("--theme-bg-color", "var(--light)");
		theme.setProperty("--theme-color", "var(--dark)");
	} else {
		theme.setProperty("--theme-bg-color", "var(--dark)");
		theme.setProperty("--theme-color", "var(--light");
	}
};
</script>

<style lang="scss" scoped>
.icons-container {
	display: flex;
	flex-direction: row-reverse;
}

a,
button {
	padding: 0 0.5rem;
	font-size: max(2.75rem - 1.5vw, 1.75rem);
	cursor: pointer;
	opacity: 0.55;
	text-decoration: none;

	&:hover,
	&:focus {
		opacity: 1;
	}
}

button {
	color: var(--theme-color);
	background: none;
	border: none;
}
</style>
