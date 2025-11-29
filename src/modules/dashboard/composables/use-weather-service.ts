import { WEATHER_URL } from '@/modules/dashboard/constants'
import { WeatherResponse } from '@/modules/dashboard/types'
import { http } from '@/shared/api/http'


export function useWeatherService() {
  const getCurrentWeather = (city: string) => {
    return http.get<WeatherResponse>(`${WEATHER_URL}/weather`, {
      q: city,
      units: 'metric',
      lang: 'ru',
      appid: process.env.OPEN_WEATHER_KEY
    })
  }

  return { getCurrentWeather }
}
