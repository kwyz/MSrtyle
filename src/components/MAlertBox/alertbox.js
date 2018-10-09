export default {
  name: 'm-alert-box',
  props: {
    type: String,
    icon: String,
    title: String
  },
  methods: {
    getHeaderColorByType () {
      switch (this.type) {
        case 'danger':
          return 'text-danger'
        case 'dark':
          return 'text-dark'
        case 'warning':
          return 'text-warning'
        case 'info':
          return 'text-info'
        case 'success':
          return 'text-success'
      }
    }
  }
}
