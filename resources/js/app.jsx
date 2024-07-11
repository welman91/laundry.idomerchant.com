import './bootstrap'
import '../css/app.css'
import '../css/loader.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { StrictMode, useState } from 'react'
import AppContextProvider from './AppContextProvider'
import { appThemeKey } from './Helpers/helper'
import ThemeContextProvider from './ThemeContextProvider'

const currentTheme = JSON.parse(localStorage.getItem(appThemeKey)) || {
  darkMode: false,
  fluidMode: true,
  sidebarOpen: true,
  sidebarShow: false, // this one for small screen
  fullscreen: false,
}

import('@sweetalert2/theme-dark/dark.min.css')

// import(
//   currentTheme?.darkMode
//     ? '@sweetalert2/theme-dark/dark.min.css'
//     : 'sweetalert2/dist/sweetalert2.min.css'
// )

createInertiaApp({
  title: (title) => `${title} - ${appThemeKey}`,
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <StrictMode>
        <ThemeContextProvider currentTheme={currentTheme}>
          <AppContextProvider>
            <App {...props} />
          </AppContextProvider>
        </ThemeContextProvider>
      </StrictMode>,
    )
  },
  progress: {
    color: '#E32B21',
  },
})
