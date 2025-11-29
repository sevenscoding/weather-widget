import { ref, watch, onActivated } from 'vue'

import { useCities } from '@/modules/dashboard/composables/use-cities'
import { useWeatherService } from '@/modules/dashboard/composables/use-weather-service'
import type { WeatherResponse } from '@/modules/dashboard/types'

export const useDashboard = () => {
  const { cities, initCities } = useCities()
  const { getCurrentWeather } = useWeatherService()

  const weatherList = ref<WeatherResponse[]>([])
  const isLoading = ref(false)
  const lastLoadedHash = ref('')

  const loadWeather = async () => {
    const hash = JSON.stringify(cities.value)

    if (isLoading.value) return
    if (hash === lastLoadedHash.value) return

    isLoading.value = true
    lastLoadedHash.value = hash

    weatherList.value = []

    for (const city of cities.value) {
      const data = await getCurrentWeather(city)
      weatherList.value.push(data)
    }

    isLoading.value = false
  }

  onActivated(async () => {
    if (cities.value.length === 0) {
      await initCities()
    }
    await loadWeather()
  })

  watch(cities, loadWeather, { deep: true })

  return {
    weatherList
  }
}
