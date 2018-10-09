<template>
<div class="col">
  <li class="nav-item active dropdown ml-4">
    <a class="nav-link dropdown-toggle text-dark small" href="#" id="navbarDropDown"
      role="button" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      {{label}}
    </a>
    <div class="dropdown-menu rounded-0" aria-labelledby="navbarDropDown">
      <a class="dropdown-item" v-for="item in Object.values(items)"
        @click="onClick(item)" href="#">{{item}}</a>
    </div>
  </li>
</div>
</template>

<script>
export default {
  name: 'm-header-dropdown',
  props: {
    label: String,
    items: Object
  },
  created() {
    console.log(this.label)
  },
  methods: {
    onClick: function (value) {
      this.$emit('onClick', value)
    }
  }
}
</script>
