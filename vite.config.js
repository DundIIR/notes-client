import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const backend = 'https://localhost:7085'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log('Привет', mode)

	return {
		plugins: [react()],
		server: {
			host: '0.0.0.0',
			proxy: {
				'^/notes': {
					target: mode == 'development' ? backend : 'http://backend:8080',
					ws: false,
					secure: false,
				},
			},
		},
	}
})
