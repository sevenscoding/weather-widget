<template>
  <div class="weather-widget">
    <header class="weather-widget__header">
      <div class="weather-widget__city">{{ data.name ?? '-' }}, {{ data.sys.country ?? '-' }}</div>
    </header>

    <div class="weather-widget__temp">
      <img
        v-if="data.weather[0].icon"
        class="weather-widget__icon"
        draggable="false"
        :src="`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`"
        :alt="data.weather[0].description"
      />

      <LoadingSpinner v-else />

      <div :style="{ textShadow: getTempShadow(data.main.temp) }">
        {{ temperature }}
      </div>
    </div>

    <p class="weather-widget__description">
      Feels like {{ Math.round(data.main.feels_like) }}°C.
      {{ description }}
    </p>

    <WidgetGrid>
      <WidgetGridItem>
        <WindIcon />
        {{ data.wind.speed }} m/s {{ data.wind.deg }}°
      </WidgetGridItem>

      <WidgetGridItem>
        <CompassIcon />
        {{ data.main.pressure }} hPa
      </WidgetGridItem>

      <WidgetGridItem> Humidity: {{ data.main.humidity }}% </WidgetGridItem>

      <WidgetGridItem> Dew point: {{ dewPoint }}°C </WidgetGridItem>

      <WidgetGridItem> Visibility: {{ (data.visibility / 1000).toFixed(1) }} km </WidgetGridItem>
    </WidgetGrid>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import WidgetGrid from '@/modules/dashboard/components/WidgetGrid.vue'
import WidgetGridItem from '@/modules/dashboard/components/WidgetGridItem.vue'
import { WeatherResponse } from '@/modules/dashboard/types'
import { calcDewPoint, getTempShadow } from '@/modules/dashboard/utils'
import CompassIcon from '@/shared/components/icons/CompassIcon.vue'
import WindIcon from '@/shared/components/icons/WindIcon.vue'
import LoadingSpinner from '@/shared/components/LoadingSpinner.vue'

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

const temperature = computed(() => {
  if (props.data.main?.temp == null) return '-'
  return `${Math.round(props.data.main.temp)}°C`
})
</script>

<style scoped lang="scss">
.weather-widget {
  box-shadow: var(--shadow-100);
  padding: var(--indent-600);

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
