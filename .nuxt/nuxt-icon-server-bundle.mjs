import { createRequire } from 'module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'flat-color-icons': () => require('@iconify-json/flat-color-icons/icons.json'),
  'heroicons': () => require('@iconify-json/heroicons/icons.json'),
  'iconamoon': () => require('@iconify-json/iconamoon/icons.json'),
}