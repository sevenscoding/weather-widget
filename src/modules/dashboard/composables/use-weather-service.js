import { WEATHER_URL } from '@/modules/dashboard/constants';
import { http } from '@/shared/api/http';
export function useWeatherService() {
    const getCurrentWeather = (city) => {
        return http.get(`${WEATHER_URL}/weather`, {
            q: city,
            units: 'metric',
            lang: 'eng',
            appid: process.env.OPEN_WEATHER_KEY
        });
    };
    return { getCurrentWeather };
}
