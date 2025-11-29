<script setup lang="ts">
import WeatherWidget from '@/modules/dashboard/components/WeatherWidget.vue'
import { useDashboard } from '@/modules/dashboard/composables/use-dashboard'
import SettingsIcon from '@/shared/components/icons/SettingsIcon.vue'
import LoadingSpinner from '@/shared/components/LoadingSpinner.vue'

type Emits = {
  goToSetting: []
}

const { weatherList } = useDashboard()

const emit = defineEmits<Emits>()
</script>

<template>
  <div class="dashboard">
    <div class="dashboard__settings" @click="emit('goToSetting')">
      <SettingsIcon />
    </div>
    <div v-if="weatherList.length > 0" class="dashboard__list">
      <WeatherWidget v-for="w in weatherList" :key="w.id" :data="w" />
    </div>
    <LoadingSpinner v-else />
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  align-items: center;
  position: relative;
  min-height: 10rem;

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--indent-500);
  }

  &__settings {
    position: absolute;
    right: var(--indent-500);
    top: var(--indent-500);
    cursor: pointer;
    transition: 0.25s color ease-in-out;

    &:hover {
      color: var(--gray-100);
    }
  }
}
</style>
