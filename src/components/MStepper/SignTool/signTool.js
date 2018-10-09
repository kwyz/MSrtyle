export default {
  name: 'SignTool',
  computed: {
    isCompletedFields () {
      return !((this.errors.items.length <= 0) && ((this.phoneNumber !== '' && this.phoneNumber.length === 8) && this.idnp !== ''))
    }
  },
  data () {
    return {
      phoneNumber: '',
      idnp: ''
    }
  },
  methods: {
    selectTool (authType, imageUrl) {
      this.$emit('setAuthentificationStep', {
        authType: authType,
        url: imageUrl
      })
      this.$emit('can-continue', {
        value: true
      })
    },
    goTo (path) {
      this.$router.push('/')
    }

  }
}
