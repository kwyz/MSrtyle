import Vue from 'vue'

const requireComponent = require.context(
  './footer-components',
  false,
  /footer-[a-z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  Vue.component(
    componentConfig.default.name,
    componentConfig.default || componentConfig
  )
})
