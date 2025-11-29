<script setup lang="ts">
import DashboardView from '@/modules/dashboard/views/DashboardView.vue'
</script>

<template>
  <div class="widget-view">
    <DashboardView />
  </div>
</template>

<style scoped lang="scss">
.widget-view {
  max-width: 18rem;
  padding: var(--indent-500);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-100);
}
</style>
