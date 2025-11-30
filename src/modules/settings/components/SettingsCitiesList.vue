<script setup lang="ts">
import SettingsListItem from '@/modules/settings/components/SettingsListItem.vue'
import { useDragSort } from '@/modules/settings/composables/use-drag-sort'
import { useCities } from '@/shared/composables/use-cities'

const { cities, removeCity, reorderCities } = useCities()

const { dragIndex, onDragStart, onDragEnter, onDrop } = useDragSort(cities, reorderCities)
</script>

<template>
  <div class="settings-cities-list">
    <div
      v-for="(city, index) in cities"
      :key="city"
      class="settings-cities-list__row"
      @dragenter="onDragEnter(index, $event)"
      @dragover.prevent
      @drop="onDrop(index)"
    >
      <SettingsListItem
        :label="city"
        :dragging="dragIndex === index"
        @remove="removeCity"
        @drag-start="onDragStart(index)"
      />
    </div>

    <div v-if="cities.length === 0" class="settings-cities-list__empty">List is empty</div>
  </div>
</template>

<style scoped lang="scss">
.settings-cities-list {
  display: flex;
  flex-direction: column;
  gap: var(--indent-200);
  min-height: 16em;

  &__empty {
    font-size: var(--font-size-300);
    padding: var(--indent-600);
    text-align: center;
    color: var(--gray-100);
  }
}
</style>
