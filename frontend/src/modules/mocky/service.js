/**
 * Get all app employees
 * @return {*|Promise<T>}
 */
import { restClient } from "../core/api/restClient";
import { mockyPath as path } from "../core/api/path";

export const fetchMockies = filters => {
	const route = path.fetchMockies(filters);
	return restClient(route, "GET")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const deleteMockies = filters => {
	const route = path.deleteMocky(filters);
	return restClient(route, "DELETE")
		.then(function (response) {
			return Promise.resolve(response);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};
