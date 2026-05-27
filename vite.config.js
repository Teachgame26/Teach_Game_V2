import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})




//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
  //base: '/Teach_Game_V2/',
  //plugins: [react()],
//})


