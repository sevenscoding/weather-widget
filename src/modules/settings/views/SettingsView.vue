<script setup lang="ts">
import SettingsCitiesList from '@/modules/settings/components/SettingsCitiesList.vue'
import SettingsCitySearch from '@/modules/settings/components/SettingsCitySearch.vue'
import BackIcon from '@/shared/components/icons/BackIcon.vue'
import { useCities } from '@/shared/composables/use-cities'

type Emits = {
  goToDashboard: []
}

const emit = defineEmits<Emits>()

const { addCity } = useCities()

const handleSelect = (name: string) => {
  addCity(name)
}
</script>

<template>
  <div class="settings-view">
    <header class="settings-view__header">
      Settings
      <div class="settings-view__back" @click="emit('goToDashboard')">
        <BackIcon />
      </div>
    </header>
    <div class="settings-view__list">
      <SettingsCitySearch @select="handleSelect" />
      <SettingsCitiesList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings-view {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--indent-500);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--indent-500);
  }

  &__back {
    height: 1.5rem;
    cursor: pointer;
    transition: 0.25s color ease-in-out;

    &:hover {
      color: var(--gray-100);
    }
  }
}
</style>
