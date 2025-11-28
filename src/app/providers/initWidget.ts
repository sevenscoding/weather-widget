import { createApp } from "vue";
import WeatherWidget from "@/widgets/ui/WeatherWidget.vue";

export function initWidget(host: HTMLElement) {
    const shadow = host.attachShadow({ mode: "open" });

    const mountPoint = document.createElement("div");
    shadow.appendChild(mountPoint);

    const app = createApp(WeatherWidget);
    app.mount(mountPoint);

    return app;
}