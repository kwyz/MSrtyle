<template id="header-navigation">
<div class="contaiener">
  <div class="d-flex justify-content-end mr-4">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <slot></slot>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'm-header-navigation',
  mounted() {
    console.log(this.$parent)
  },
}
</script>
