import exportedComponents from './export_components.js'
import Vue from 'vue'

Object.keys(exportedComponents).forEach((componentIndex) => {
  let componentName = exportedComponents[componentIndex].name
  let component = exportedComponents[componentIndex]
  Vue.component(componentName, component)
})
