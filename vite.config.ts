import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    define: {
        'process.env': process.env,
    },
    resolve: {
        alias: {
            '@': '/src/',
            '@components':'/src/components/',
            '@utils':'/src/utils'
        },
    },
    plugins: [
        react(),
        visualizer({
            gzipSize: true,
            brotliSize: true,
            emitFile: false,
            filename: "test.html", //分析图生成的文件名
            open:true //如果存在本地服务端口，将在打包后自动展示
        })
    ],
})
