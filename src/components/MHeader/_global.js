import Vue from 'vue'

const requireComponent = require.context(
  './header-components',
  false,
  /header-[a-z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  Vue.component(
    componentConfig.default.name,
    componentConfig.default || componentConfig
  )
})
