export const localStorageUtil = {
  set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => localStorage.getItem(key),
  delete: (key: string) => localStorage.removeItem(key)
}
