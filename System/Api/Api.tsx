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
		((__DEV__) ? 'http://areyouinfordinner.local' : url) + options.path,
		{
			headers: new Headers(options.headers),
			method: options.method,
			body: options.body,
		}
	);

	console.log('request', request);

	let response = await fetch(request);

	console.log('response', response);

	if (response.ok) response.body = await response.json();

	return response;
};