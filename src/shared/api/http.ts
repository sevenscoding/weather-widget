import type { Params, Body } from './types'

async function request<T>(
  method: string,
  url: string,
  options: { params?: Params; body?: Body } = {}
) {
  const { params, body } = options

  const query = params
    ? '?' +
      new URLSearchParams(
        Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))
      ).toString()
    : ''

  const config: RequestInit = { method }

  if (body) {
    config.headers = { 'Content-Type': 'application/json' }
    config.body = JSON.stringify(body)
  }

  const res = await fetch(url + query, config)

  if (!res.ok) throw new Error('HTTP ' + res.status)

  return (await res.json()) as T
}

export const http = {
  get: <T>(url: string, params?: Params) => request<T>('GET', url, { params })
}
