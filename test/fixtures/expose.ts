import LRUCache from '../../'
export const expose = <
  K extends {},
  V extends {},
  FC extends unknown = unknown
>(
  cache: LRUCache<K, V, FC>,
  LRU = LRUCache
) => {
  return Object.assign(LRU.unsafeExposeInternals(cache), cache)
}
