<script setup lang="ts">
import { useDashboard } from '@/modules/dashboard/composables/use-dashboard'

const { weatherList } = useDashboard()
</script>

<template>
  <div>
    {{ weatherList }}
  </div>
</template>
