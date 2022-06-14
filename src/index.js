import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)

const sw = navigator.serviceWorker

if (sw) {
  window.addEventListener('load', () => {
    try {
      sw.register('/service-worker.js')
    } catch (error) {
      console.log('SW registration failed: ', error)
    }
  })
}