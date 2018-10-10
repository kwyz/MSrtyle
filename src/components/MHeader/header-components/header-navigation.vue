<template id="header-navigation">
<div class="contaiener">
  <div class="d-flex justify-content-end">
    <div class="collapse navbar-collapse" id="navbarSideIconDropdown">
      <ul class="navbar-nav no-underline mb-3">
        <slot></slot>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'm-header-navigation'
}
</script>
