import { initWidget } from "./providers/initWidget";

class WeatherWidgetElement extends HTMLElement {
    connectedCallback() {
        initWidget(this);
    }
}

if (!customElements.get("weather-widget")) {
    customElements.define("weather-widget", WeatherWidgetElement);
}