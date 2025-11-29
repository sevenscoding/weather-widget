import { ref } from 'vue';
import { GEOLOCATION_URL } from '@/modules/dashboard/constants';
import { http } from '@/shared/api/http';
export function useGeolocationService() {
    const city = ref(null);
    const detectCity = async () => {
        return new Promise(resolve => {
            if (!navigator.geolocation)
                return resolve(null);
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                var _a, _b;
                try {
                    const data = await http.get(GEOLOCATION_URL, {
                        lat: coords.latitude,
                        lon: coords.longitude,
                        limit: 1,
                        appid: process.env.OPEN_WEATHER_KEY
                    });
                    city.value = (_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : null;
                    resolve(city.value);
                }
                catch {
                    resolve(null);
                }
            }, () => resolve(null), { enableHighAccuracy: true });
        });
    };
    return { city, detectCity };
}
