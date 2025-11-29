<template>
  <div class="grid-item">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-item {
  display: flex;
  align-items: center;
  gap: var(--indent-100);
  font-size: var(--font-size-150);
}
</style>
