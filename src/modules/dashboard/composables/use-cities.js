import { useGeolocationService } from '@/modules/dashboard/composables/use-geolocation-service';
import { useLocalStorage } from '@/shared/composables/use-local-storage';
const cities = useLocalStorage('ww_cities', []);
export function useCities() {
    const { detectCity } = useGeolocationService();
    const initCities = async () => {
        if (cities.value.length > 0)
            return;
        const geoCity = await detectCity();
        if (geoCity)
            cities.value = [geoCity];
    };
    const addCity = (city) => {
        if (!cities.value.includes(city)) {
            cities.value = [...cities.value, city];
        }
    };
    const removeCity = (city) => {
        cities.value = cities.value.filter(c => c !== city);
    };
    const reorderCities = (from, to) => {
        const arr = [...cities.value];
        const [moved] = arr.splice(from, 1);
        arr.splice(to, 0, moved);
        cities.value = arr;
    };
    return {
        cities,
        initCities,
        addCity,
        removeCity,
        reorderCities
    };
}
