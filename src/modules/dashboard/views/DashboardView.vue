<script setup lang="ts">
import WeatherWidget from '@/modules/dashboard/components/WeatherWidget.vue'
import { useDashboard } from '@/modules/dashboard/composables/use-dashboard'

const { weatherList } = useDashboard()
</script>

<template>
  <div class="dashboard">
    <WeatherWidget v-for="w in weatherList" :key="w.id" :data="w" />
  </div>
</template>
