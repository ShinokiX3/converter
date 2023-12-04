import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@app': resolve(__dirname, './src/app/'),
			'@services': resolve(__dirname, './src/services/'),
			'@assets': resolve(__dirname, './src/shared/assets/'),
			'@shared': resolve(__dirname, './src/shared/'),
			'@pages': resolve(__dirname, './src/pages/'),
			'@widgets': resolve(__dirname, './src/widgets/'),
		},
	},
})
