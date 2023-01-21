<template>
	<div class="icons-container">
		<i
			class="fa-solid fa-circle-half-stroke"
			@click="handleClick"
			role="button"
			aria-label="Button toggle to switch between light and dark theme"
		></i>
		<a
			href="https://github.com/mjleonides"
			role="link"
			aria-label="Link to Michael's profile on Github"
			><i class="fa-brands fa-github"></i></a
		><a
			href="https://linkedin.com/in/mjleonides"
			role="link"
			aria-label="Link to Michael's profile on Linkedin"
			><i class="fa-brands fa-linkedin"></i
		></a>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick() {
			let root = getComputedStyle(document.documentElement);
			let theme = document.documentElement.style;
			if (root.getPropertyValue("--theme-bg-color") === "#1f1f1f") {
				theme.setProperty("--theme-bg-color", "var(--light)");
				theme.setProperty("--theme-color", "var(--dark)");
			} else {
				theme.setProperty("--theme-bg-color", "var(--dark)");
				theme.setProperty("--theme-color", "var(--light");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.icons-container {
	display: flex;
	flex-direction: row-reverse;
}

i {
	padding: 0 0.5rem;
	font-size: calc(2.75rem - 1.5vw);
	cursor: pointer;
	opacity: 0.5;

	&:hover,
	&:focus {
		opacity: 1;
	}
}
</style>
