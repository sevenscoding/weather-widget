import { ref } from 'vue'

export function useDragSort<T>(list: { value: T[] }, reorder?: (from: number, to: number) => void) {
  const dragIndex = ref<number | null>(null)

  const onDragStart = (index: number) => {
    dragIndex.value = index
  }

  const onDragEnter = (index: number, e: DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (dropIndex: number) => {
    if (dragIndex.value === null) return

    if (reorder) {
      reorder(dragIndex.value, dropIndex)
    } else {
      const arr = [...list.value]
      const [moved] = arr.splice(dragIndex.value, 1)
      arr.splice(dropIndex, 0, moved)
      list.value = arr
    }

    dragIndex.value = null
  }

  return { dragIndex, onDragStart, onDragEnter, onDrop }
}
