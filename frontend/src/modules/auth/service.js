import { authPath as path } from "../core/api/path";
import { restClient } from "../core/api/restClient";

export const authUser = data => {
	const route = path.authUser();
	return restClient(route, "POST", JSON.stringify(data))
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};
