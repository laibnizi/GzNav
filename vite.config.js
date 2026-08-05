import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  // 1. 优先读取环境变量
  // 2. 如果没变量，显示默认品牌名（不再显示 "Loading..."）
  const appTitle = env.VITE_SITE_TITLE || '云汇导航'
  const appDesc = env.VITE_SITE_DESCRIPTION || '精选优质网站，分类导航，一站式直达'

  return {
    plugins: [
      vue(),
      vueDevTools(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html
            .replace(/%SITE_TITLE%/g, appTitle)
            .replace(/%SITE_DESCRIPTION%/g, appDesc)
        }
      }
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
