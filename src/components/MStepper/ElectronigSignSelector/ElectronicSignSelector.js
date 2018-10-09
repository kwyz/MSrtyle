export default {
  name: 'ElectronicSignSelector',
  props: {
    imageUrl: String
  },
  data () {
    return {
      signs: [{
        owner: 'FisrtName LastName 000000000000 ',
        organization: 'Organization-Type--Organization-Name'
      }, {
        owner: 'FisrtName LastName 000000000000 ',
        organization: 'Organization-Type--Organization-Name'
      }, {
        owner: 'FisrtName LastName 000000000000 ',
        organization: 'Organization-Type--Organization-Name'
      } ]
    }
  },
  methods: {
    selectSign: function (sign) {
      this.$emit('can-continue', {
        value: true
      })
    },
    goTo (path) {
      this.$router.push('/')
    }
  }
}
