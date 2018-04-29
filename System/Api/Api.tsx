import Options from './Options';

export default async (options: Options) => {
	//TODO IF body and content type == json options.body = JSON.stringify(options.body);

	if (options.hasOwnProperty('body') && typeof options.body !== 'string') {
		options.body = JSON.stringify(options.body);
	}

	//TODO add a try catch for errors

	//TODO add live path

	let response = await fetch(new Request(
		((__DEV__) ? 'localhost:3000' : '') + options.path,
		{
			headers: new Headers(options.headers),
			method: options.method,
		//TODO add body if there is a body to add
		}
	));

	console.log('response', response);

	if (response.hasOwnProperty('body')) {
		response.body = await response.json();
	}

	return response;

};