<script setup lang="ts">
import DropIcon from '@/shared/components/icons/DropIcon.vue'
import GrabIcon from '@/shared/components/icons/GrabIcon.vue'
import RemoveIcon from '@/shared/components/icons/RemoveIcon.vue'

type Props = {
  label: string
  dragging?: boolean
}

type Emits = {
  remove: [string]
  dragStart: []
}

const emit = defineEmits<Emits>()
defineProps<Props>()
</script>

<template>
  <div class="settings-list-item">
    <div class="settings-list-item__handle" draggable="true" @dragstart="emit('dragStart')">
      <DropIcon v-if="!dragging" />
      <GrabIcon v-else />
    </div>

    <div class="settings-list-item__label">{{ label }}</div>

    <div class="settings-list-item__remove" @click="emit('remove', label)">
      <RemoveIcon />
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings-list-item {
  display: flex;
  align-items: center;
  gap: var(--indent-100);
  background-color: var(--gray-200);
  padding: var(--indent-200);
  border-radius: var(--radius-100);

  &__handle {
    cursor: grab;
    height: 1.5rem;
  }

  &__handle:active {
    cursor: grabbing;
  }

  &__label {
    flex: 1;
  }

  &__remove {
    cursor: pointer;
    height: 1rem;

    &:hover {
      color: var(--gray-100);
    }
  }
}
</style>
