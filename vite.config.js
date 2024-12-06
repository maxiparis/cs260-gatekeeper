import { defineConfig } from 'vite';

console.log("Vite config is being loaded...");

export default defineConfig({
    server: {
        proxy: {
            '/api': 'http://localhost:3000',
            '/ws': {
                target: 'ws://localhost:3000',
                ws: true,
            },
        },
    },
});