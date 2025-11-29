<script setup lang="ts">
import { ref, computed, type Component } from 'vue'

import { SCREENS } from '@/modules/dashboard/views/constatns'
import DashboardView from '@/modules/dashboard/views/DashboardView.vue'
import { Screen } from '@/modules/dashboard/views/types'
import SettingsView from '@/modules/settings/views/SettingsView.vue'

const currentScreen = ref<Screen>(SCREENS.SETTINGS)

const screensMap: Record<Screen, Component> = {
  [SCREENS.DASHBOARD]: DashboardView,
  [SCREENS.SETTINGS]: SettingsView
}

const currentView = computed(() => screensMap[currentScreen.value])

const openSettings = () => {
  currentScreen.value = SCREENS.SETTINGS
}

const openDashboard = () => {
  currentScreen.value = SCREENS.DASHBOARD
}
</script>

<template>
  <div class="widget-view">
    <keep-alive>
      <component :is="currentView" @go-to-setting="openSettings" @go-to-dashboard="openDashboard" />
    </keep-alive>
  </div>
</template>

<style scoped lang="scss">
.widget-view {
  max-width: 18rem;
  position: relative;
}
</style>
