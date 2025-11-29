import { ref } from 'vue';
export function useDragSort(list, reorder) {
    const dragIndex = ref(null);
    const onDragStart = (index) => {
        dragIndex.value = index;
    };
    const onDragEnter = (index, e) => {
        e.preventDefault();
    };
    const onDrop = (dropIndex) => {
        if (dragIndex.value === null)
            return;
        if (reorder) {
            reorder(dragIndex.value, dropIndex);
        }
        else {
            const arr = [...list.value];
            const [moved] = arr.splice(dragIndex.value, 1);
            arr.splice(dropIndex, 0, moved);
            list.value = arr;
        }
        dragIndex.value = null;
    };
    return { dragIndex, onDragStart, onDragEnter, onDrop };
}
