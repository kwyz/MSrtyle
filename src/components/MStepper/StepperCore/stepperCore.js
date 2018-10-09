import translations from './Translations.js'
export default {
  filters: {
    translate: function (value, locale) {
      return translations[locale][value]
    }
  },
  props: {
    locale: {
      type: String,
      default: 'en'
    },
    topButtons: {
      type: Boolean,
      default: false
    },
    steps: {
      type: Array,
      default: function () {
        return [{
          icon: 'mail',
          name: 'first',
          title: 'Sample title 1',
          subtitle: 'Subtitle sample'
        },
        {
          icon: 'report_problem',
          name: 'second',
          title: 'Sample title 2',
          subtitle: 'Subtitle sample'
        }
        ]
      }
    },
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentStep: {},
      previousStep: {},
      nextButton: {},
      canContinue: false,
      finalStep: false
    }
  },
  computed: {
    enterAnimation () {
      if (this.currentStep.index < this.previousStep.index) {
        return 'animated quick fadeInLeft'
      } else {
        return 'animated quick fadeInRight'
      }
    },
    leaveAnimation () {
      if (this.currentStep.index > this.previousStep.index) {
        return 'animated quick fadeOutLeft'
      } else {
        return 'animated quick fadeOutRight'
      }
    }
  },
  methods: {
    goBack (stepIndex) {
      if (stepIndex < this.currentStep.index) { this.activateStep(stepIndex, true) }
    },
    isStepActive (index, step) {
      if (this.currentStep.index === index) {
        return 'activated'
      } else {
        return 'deactivated'
      }
    },
    activateStep (index, back = false) {
      if (this.steps[index]) {
        this.previousStep = this.currentStep
        this.currentStep = {
          name: this.steps[index].name,
          index: index
        }
        if (index + 1 === this.steps.length) {
          this.finalStep = true
        } else {
          this.finalStep = false
        }
        if (!back) {
          this.$emit('completed-step', this.previousStep)
        }
      }
      this.$emit('active-step', this.currentStep)
    },
    nextStepAction () {
      this.nextButton[this.currentStep.name] = true
      if (this.canContinue) {
        if (this.finalStep) {
          this.$emit('stepper-finished', this.currentStep)
        }
        let currentIndex = this.currentStep.index + 1
        this.activateStep(currentIndex)
      }
      this.canContinue = false
      this.$forceUpdate()
    },
    nextStep () {
      if (!this.$listeners || !this.$listeners['before-next-step']) {
        this.nextStepAction()
      }
      this.canContinue = false
      this.$emit('before-next-step', {
        currentStep: this.currentStep
      }, (next = true) => {
        this.canContinue = true
        if (next) {
          this.nextStepAction()
        }
      })
    },
    backStep () {
      this.$emit('clicking-back')
      let currentIndex = this.currentStep.index - 1
      if (currentIndex >= 0) {
        this.activateStep(currentIndex, true)
      }
    },
    setAuthentificationStep (payload) {
      this.$emit('setAuthentificationStep', payload)
    },
    proceed (payload) {
      this.canContinue = payload.value
      this.nextStepAction()
    },
    changeNextBtnValue (payload) {
      this.nextButton[this.currentStep.name] = payload.nextBtnValue
      this.$forceUpdate()
    }
  },
  created () {
    // Initiate stepper
    this.activateStep(0)
    this.steps.forEach(step => {
      this.nextButton[step.name] = false
    })
  }
}
