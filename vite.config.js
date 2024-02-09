import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {browserslistToTargets} from 'lightningcss';
import browserslist from 'browserslist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
})
