import { WeatherWidgetElement } from './providers/initWidget'

if (!customElements.get('weather-widget')) {
  customElements.define('weather-widget', WeatherWidgetElement)
}
