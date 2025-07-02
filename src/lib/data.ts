// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../app/constants.js';
import type { Endpoint, EndpointsToOperations } from '../types/entities.js';

// Importar datos locales para build estático
import productsData from '../../data/products.json';
import usersData from '../../data/users.json';
import suppliersData from '../../data/suppliers.json';
import batchesData from '../../data/batches.json';
import movementsData from '../../data/movements.json';
import alertsData from '../../data/alerts.json';

const localData = {
	products: productsData,
	users: usersData,
	suppliers: suppliersData,
	batches: batchesData,
	movements: movementsData,
	alerts: alertsData,
};

export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
	// Para build estático, usar datos locales
	if (import.meta.env.PROD) {
		console.info(`Using local data for ${endpoint}…`);
		return localData[endpoint] as ReturnType<EndpointsToOperations[Selected]>;
	}

	// Para desarrollo, usar API
	const apiEndpoint = `${API_URL}${endpoint}`;
	console.info(`Fetching ${apiEndpoint}…`);
	return fetch(apiEndpoint)
		.then(
			(r) =>
				r.json() as unknown as Promise<
					ReturnType<EndpointsToOperations[Selected]>
				>,
		)
		.catch((e) => {
			console.error(e);
			throw Error('Invalid API data!');
		});
}

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
