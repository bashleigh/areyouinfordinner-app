import Options from './Options';

//TODO add live url
const url = '';

export default async (options: Options) => {
	//TODO IF body and content type == json options.body = JSON.stringify(options.body);

	if (options.hasOwnProperty('body') && typeof options.body !== 'string') {
		options.body = JSON.stringify(options.body);
	}

	//TODO add a try catch for errors if needed

	const request = new Request(
		((__DEV__) ? 'http://localhost:3000' : url) + options.path,
		{
			headers: new Headers(options.headers),
			method: options.method,
			body: options.body,
		}
	);

	let response = await fetch(request);

	response.body = await response.json();

	return response;
};