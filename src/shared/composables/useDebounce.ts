export function useDebounce<T extends (...args: any[]) => void>(fn: T, delay = 300) {
  let timer: number | undefined

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
