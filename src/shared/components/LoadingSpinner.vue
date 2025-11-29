<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  width: 2em;
  height: 2em;

  border: 5px solid rgba(0, 0, 0, 0.2);
  border-top-color: var(--black-100);
  border-radius: 50%;

  animation: spin 1s linear infinite;
  margin: 16px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
