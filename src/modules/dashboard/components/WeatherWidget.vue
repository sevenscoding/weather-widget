<template>
  <div class="weather-widget">
    <header class="weather-widget__header">
      <div class="weather-widget__city">{{ data.name ?? '-' }}, {{ data.sys.country ?? '-' }}</div>
      <div class="weather-widget__settings">
        <SettingsIcon />
      </div>
    </header>

    <div class="weather-widget__temp">
      <img
        class="weather-widget__icon"
        draggable="false"
        :src="`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`"
        :alt="data.weather[0].description"
      />

      <div :style="{ textShadow: getTempShadow(data.main.temp) }">
        {{ temperature }}
      </div>
    </div>

    <p class="weather-widget__description">
      Feels like {{ Math.round(data.main.feels_like) }}°C.
      {{ description }}
    </p>

    <div class="weather-widget__grid">
      <div class="weather-widget__grid-item">
        <WindIcon />
        {{ data.wind.speed }} m/s {{ data.wind.deg }}°
      </div>

      <div class="weather-widget__grid-item">
        <CompassIcon />
        {{ data.main.pressure }} hPa
      </div>

      <div class="weather-widget__grid-item">Humidity: {{ data.main.humidity }}%</div>

      <div class="weather-widget__grid-item">Dew point: {{ dewPoint }}°C</div>

      <div class="weather-widget__grid-item">
        Visibility: {{ (data.visibility / 1000).toFixed(1) }} km
      </div>

      <div class="weather-widget__grid-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { WeatherResponse } from '@/modules/dashboard/types'
import { calcDewPoint, getTempShadow } from '@/modules/dashboard/utils'
import CompassIcon from '@/shared/components/icons/CompassIcon.vue'
import SettingsIcon from '@/shared/components/icons/SettingsIcon.vue'
import WindIcon from '@/shared/components/icons/WindIcon.vue'

type Props = {
  data: WeatherResponse
}

const props = defineProps<Props>()

const description = computed(() => {
  const text = props.data.weather[0]?.description
  if (!text) return '-'
  return text[0].toUpperCase() + text.slice(1)
})

const dewPoint = computed(() => {
  return calcDewPoint(props.data.main.temp, props.data.main.humidity)
})

const temperature = computed(() =>
  props.data.main?.temp != null ? Math.round(props.data.main.temp) : null
)
</script>

<style scoped lang="scss">
.weather-widget {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__temp {
    display: flex;
    align-items: center;
    font-size: var(--font-size-500);
    gap: var(--spacing-500);
  }

  &__icon {
    -webkit-user-drag: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  &__settings {
    cursor: pointer;
    transition: 0.25s color ease-in-out;

    &:hover {
      color: var(--gray-100);
    }
  }

  &__description {
    margin-top: 0;
    margin-bottom: var(--indent-600);
  }

  .weather-widget__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--indent-200);
    row-gap: var(--indent-300);
    font-size: var(--font-size-150);
  }

  &__grid-item {
    display: flex;
    align-items: center;
    gap: var(--indent-100);
  }

  &__grid-item:empty {
    visibility: hidden;
  }
}
</style>
