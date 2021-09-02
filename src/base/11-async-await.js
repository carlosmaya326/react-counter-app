const getImagen = async () => {
	try {
		const apiKey = ""; // esto con giphi
		const resp = await fetch(`url=api_key=${apiKey}`);
		const { data } = await resp.json();
		const { url } = data.images.original;
	
		const img = document.createElement("img");
		img.src = url;
	
		document.body.append(img);
	} catch (error) {
		// Manejo de error
		console.error(error);
	}
};

getImagen();