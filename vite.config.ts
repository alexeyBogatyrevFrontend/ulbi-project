import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			app: '/src/app/',
			entities: '/src/entities/',
			features: '/src/features/',
			helpers: '/src/helpers/',
			pages: '/src/pages/',
			shared: '/src/shared/',
			widgets: '/src/app/',
		},
	},
})
