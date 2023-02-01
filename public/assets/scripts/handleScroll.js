const handleScroll = () => {
	if (window.scrollY >= 300) {
		document.querySelector(".entry-list").classList.add("active-list");
	} else {
		document.querySelector(".entry-list").classList.remove("active-list");
	}
};

document.addEventListener("DOMContentLoaded", function (event) {
	//enables scroll opacity effect on list if js enabled
	document.querySelector(".entry-list").classList.remove("active-list");

	window.addEventListener("scroll", handleScroll);
});
