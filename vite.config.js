import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { renameSync, mkdirSync, existsSync } from 'fs'

// Custom plugin to move raleigh.html to raleigh/index.html after build
function moveRaleighHtml() {
  return {
    name: 'move-raleigh-html',
    closeBundle() {
      const distPath = resolve(__dirname, 'dist')
      const raleighHtmlPath = resolve(distPath, 'raleigh.html')
      const raleighDirPath = resolve(distPath, 'raleigh')
      const raleighIndexPath = resolve(raleighDirPath, 'index.html')
      
      if (existsSync(raleighHtmlPath)) {
        if (!existsSync(raleighDirPath)) {
          mkdirSync(raleighDirPath, { recursive: true })
        }
        renameSync(raleighHtmlPath, raleighIndexPath)
        console.log('✓ Moved raleigh.html to raleigh/index.html')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), moveRaleighHtml()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules']
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        raleigh: resolve(__dirname, 'raleigh.html')
      }
    }
  }
})

// Made with Bob
