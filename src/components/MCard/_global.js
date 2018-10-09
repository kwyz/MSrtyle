import Vue from 'vue'
const requireComponent = require.context(
  './card-components',
  false,
  /card-[a-z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  Vue.component(
    componentConfig.default.name,
    componentConfig.default || componentConfig
  )
})
