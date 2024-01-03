import axios from "axios";

const getResumeData = async (url: string, variable: string) => {
	// need to define variables for export to actually use the data and error outside of the function
	const data = ref();
	const error = ref();

	const isLoading = ref(true);

	await axios
		.get(
			"https://my-json-server.typicode.com/mjleonides/mjleonides.github.io/entries"
		)
		.then((response) => {
			data.value = response.data;
			isLoading.value = false;
		})
		.catch((err) => {
			error.value = err;
		});

	return { data, isLoading, error };
};

export default getResumeData;
