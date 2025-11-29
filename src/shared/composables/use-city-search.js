import { ref } from 'vue';
import { GEO_SEARCH_URL } from '@/modules/settings/constants';
import { http } from '@/shared/api/http';
import { useDebounce } from '@/shared/composables/use-debounce';
export function useCitySearch() {
    const query = ref('');
    const results = ref([]);
    const isLoading = ref(false);
    const doSearch = async () => {
        if (query.value.trim().length < 1) {
            results.value = [];
            return;
        }
        isLoading.value = true;
        try {
            results.value = await http.get(GEO_SEARCH_URL, {
                q: query.value,
                limit: 5,
                appid: process.env.OPEN_WEATHER_KEY
            });
        }
        finally {
            isLoading.value = false;
        }
    };
    const search = useDebounce(doSearch, 800);
    return {
        query,
        results,
        isLoading,
        search
    };
}
