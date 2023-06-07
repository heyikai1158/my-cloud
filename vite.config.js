// vite.config.js

import {
	defineConfig
} from "vite"
import uni from '@dcloudio/vite-plugin-uni'
export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});