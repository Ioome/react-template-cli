import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {vitePluginLogger} from "vite-plugin-logger";
export default defineConfig({
    define: {
        'process.env': process.env,
    },
    resolve: {
        alias: {
            '@': '/src/',
        },
    },
    plugins: [
        react(),
    ],
})
