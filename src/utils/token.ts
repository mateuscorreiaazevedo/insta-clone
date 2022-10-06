import { localStorageUtil } from './local-storage'

export const tokenUtil = {
  key: 'token',
  set: (value: any) => localStorageUtil.set(tokenUtil.key, value),
  get: () => localStorageUtil.get(tokenUtil.key),
  clear: () => localStorageUtil.delete(tokenUtil.key)
}
