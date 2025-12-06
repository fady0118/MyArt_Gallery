import {defineConfig} from 'vite'
import {resolve} from 'path'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	plugins:[imagetools()],
	root:'./docs',
	build:{
		rollupOptions:{
			input:{
				main: resolve('docs','./index.html'),
				about: resolve('docs','./About.html'),
				copyright: resolve('docs','./copyright.html'),
				gallery: resolve('docs','./Gallery.html')
			}
		},
		outDir:'../dist',
	}
});
