'use strict'

const lazyLoad = async () => {
  const { lazyLoad } = await import('./scripts/lazy-load')
  lazyLoad().then(res => console.log(res))
}
