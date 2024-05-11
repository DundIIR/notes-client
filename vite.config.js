import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const backend = 'backend'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		proxy: {
			'^/notes': {
				target: backend,
				ws: false,
				secure: false,
			},
		},
	},
})
