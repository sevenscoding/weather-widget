export interface WeatherResponse {
  name: string
  timezone: number
  id: number

  coord: {
    lon: number
    lat: number
  }

  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }

  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]

  wind: {
    speed: number
    deg: number
  }

  clouds: {
    all: number
  }

  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
}
