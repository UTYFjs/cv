import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import { createHtmlPlugin } from 'vite-plugin-html'

const ENV_PREFIX = 'REACT_APP_'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, 'env', ENV_PREFIX)

    return {
      plugins: [
        react(),
        envCompatible({ prefix: ENV_PREFIX }),
        createHtmlPlugin({
          inject: {
            data: {
              env: {
                NODE_ENV: process.env.NODE_ENV,
                REACT_APP_CLIENT_TOKEN: process.env.REACT_APP_CLIENT_TOKEN,
                REACT_APP_ENV: process.env.REACT_APP_ENV,
              },
            },
          },
          minify: true,
        }),
      ],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.js'],
      },
      resolve: {
        alias: {
          '~': path.resolve(__dirname, 'src'),
          '@public': path.resolve(__dirname, 'public'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@store': path.resolve(__dirname, 'src/store'),
          '@services': path.resolve(__dirname, 'src/store/services'),
          '@types': path.resolve(__dirname, 'src/types'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        },
      },
      server: {
        port: 3000,
        open: env.SERVER_OPEN_BROWSER === 'true',
      },
      build: {
        outDir: 'build',
      },
    };
})
