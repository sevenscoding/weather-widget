<template>
  <div class="widget-grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.widget-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--indent-300) var(--indent-200);
}
</style>
