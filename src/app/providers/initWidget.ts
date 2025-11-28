import { createApp } from 'vue'

import App from '@/app/App.vue'

export class WeatherWidgetElement extends HTMLElement {
  connectedCallback() {
    const el = document.createElement('div')
    el.classList.add('weather-widget-root')

    this.appendChild(el)

    createApp(App).mount(el)
  }
}
