import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const DEV_PORT = 2121;

export default defineConfig({
	// site: `http://localhost:${DEV_PORT}`,
	// base: undefined,
	server: {
		port: DEV_PORT,
	},

	integrations: [
		sitemap(),
		tailwind(),
		react(),
	],

	vite: {
		server: {
			allowedHosts: [
				'cb9e-190-5-33-44.ngrok-free.app' // ← tu subdominio de ngrok
			]
		}
	}
});
