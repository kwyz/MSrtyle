import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'm-captcha',
  props: {
    captchaType: {
      type: String,
      default: 'invisible'
    },
    siteKey: {
      type: String,
      required: true
    }
  },

  components: {
    'vue-recaptcha': VueRecaptcha
  },
  created () {
    if (this.siteKey === undefined || this.siteKey === '') {
      console.error('Cannot read sitekey property. Please check your provided value')
    }
  },
  data () {
    return {
      recapthchaId: '',
      captchaResponse: ''
    }
  },
  mounted () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit'
    )
    recaptchaScript.async = true
    recaptchaScript.defer = true
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    onSubmit: function () {
      this.$refs.mcaptcha.execute()
    },
    onVerify: function (response) {
      this.$emit('response', {
        value: response
      })
      this.$refs.mcaptcha.reset()
    },
    onExpired: function () {
      this.$refs.mcaptcha.reset()
    }
  }
}
