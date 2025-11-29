<script setup lang="ts">
import { useCitySearch } from '@/modules/settings/composables/use-city-search'
import type { CitySearchItem } from '@/modules/settings/types'
import TownIcon from '@/shared/components/icons/TownIcon.vue'
import LoadingSpinner from '@/shared/components/LoadingSpinner.vue'

type Emits = {
  select: [string]
}

const emit = defineEmits<Emits>()

const { query, results, isLoading, search } = useCitySearch()

const choose = (city: CitySearchItem) => {
  emit('select', city.name)
  query.value = ''
  results.value = []
}
</script>

<template>
  <div class="city-search">
    <input
      v-model="query"
      placeholder="Enter city name…"
      class="city-search__input"
      @input="search"
    />

    <div v-if="isLoading" class="city-search__loading">
      <LoadingSpinner />
    </div>

    <ul v-if="results.length" class="city-search__list">
      <li v-for="c in results" :key="c.lat + c.lon" class="city-search__item" @click="choose(c)">
        <TownIcon />
        {{ c.name }} <span v-if="c.country">({{ c.country }})</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.city-search {
  display: flex;
  flex-direction: column;
  gap: var(--indent-100);

  &__input {
    width: 100%;
    padding: var(--indent-200);
    border-radius: var(--radius-100);
    border: 1px solid var(--gray-300);
  }

  &__list {
    background: var(--gray-200);
    border-radius: var(--radius-100);
    margin-top: 0;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: var(--indent-100);
    padding: var(--indent-300);
    list-style: none;
    cursor: pointer;
    transition: 0.25s background-color;

    &:hover {
      background-color: var(--gray-300);
    }
  }
}
</style>
