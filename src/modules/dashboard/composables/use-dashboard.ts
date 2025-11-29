import { ref, onBeforeMount } from 'vue'

import { useCities } from '@/modules/dashboard/composables/use-cities'
import { useWeatherService } from '@/modules/dashboard/composables/use-weather-service'
import { WeatherResponse } from '@/modules/dashboard/types'

export const useDashboard = () => {
  const { cities } = useCities()
  const { getCurrentWeather } = useWeatherService()

  const weatherList = ref<WeatherResponse[]>([])

  onBeforeMount(async () => {
    for (const c of cities.value) {
      const w = await getCurrentWeather(c)
      weatherList.value.push(w)
    }
  })

  return {
    weatherList
  }
}
