import { ref } from 'vue'

import { GEOLOCATION_URL } from '@/modules/dashboard/constants'
import { WeatherResponse } from '@/modules/dashboard/types'
import { http } from '@/shared/api/http'

export function useGeolocationService() {
  const city = ref<string | null>(null)

  const detectCity = async (): Promise<string | null> => {
    return new Promise(resolve => {
      if (!navigator.geolocation) return resolve(null)

      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          try {
            const data = await http.get<WeatherResponse[]>(GEOLOCATION_URL, {
              lat: coords.latitude,
              lon: coords.longitude,
              limit: 1,
              appid: process.env.OPEN_WEATHER_KEY
            })

            city.value = data[0]?.name ?? null
            resolve(city.value)
          } catch {
            resolve(null)
          }
        },
        () => resolve(null),
        { enableHighAccuracy: true }
      )
    })
  }

  return { city, detectCity }
}
