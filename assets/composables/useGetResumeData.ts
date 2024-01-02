import axios from "axios";

const getResumeData = async (url: string, variable: string) => {
	// need to define variables for export to actually use the data and error outside of the function
	const data = ref();
	const error = ref();

	const isLoading = ref(true);

	await axios
		.get(url + variable)
		.then((response) => {
			data.value = response.data;
			isLoading.value = false;
		})
		.catch((error) => {
			console.log("at catch: " + error);
			error.value = error;
			console.log("after assignment: " + error.value);
		});

	return { data, isLoading, error };
};

export default getResumeData;
