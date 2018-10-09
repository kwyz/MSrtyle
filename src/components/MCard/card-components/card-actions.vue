<template>
<div class="container" v-if="keepAlive">
  <div class="col card-actions">
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  name: 'card-actions',
  data() {
    return {
      keepAlive: true
    }
  },
  beforeMount() {
    if(this.$parent.$options._componentTag !== 'm-card') {
      console.error(
        'Cannot use card-options outside of m-card. \nSee https://www.npmjs.com/package/vue-mstyle for more details.'
      )
      this.keepAlive = false
    }
  }
}
</script>
<style>
.card-actions * {
  vertical-align: bottom;
}
</style>
