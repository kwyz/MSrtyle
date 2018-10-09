import HorizontalStepper from './StepperCore/Index'
import signTool from './SignTool/Index'
import ElectronicSignSelector from './ElectronigSignSelector/Index'
import MobileSign from './MobileSign/Index'
import SignResult from './SignResult/Index'

export default {
  components: {
    HorizontalStepper,
    'sign-tool': signTool,
    'sing-selector': ElectronicSignSelector
  },
  data () {
    return {
      steps: [{
        icon: 'build',
        name: 'tools',
        title: 'Instrumente',
        component: signTool,
        completed: false

      }, {
        icon: 'create',
        name: 'signing',
        title: 'Semnare',
        component: ElectronicSignSelector,
        completed: false

      }, {
        icon: 'verified_user',
        name: 'confirmation',
        title: 'Confirmare',
        component: SignResult,
        completed: false

      }]
    }
  },
  methods: {
    completeStep (payload) {
      this.steps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true
        }
      })
    },
    // Executed when @active-step event is triggered
    isStepActive (payload) {
      this.steps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false
          }
        }
      })
    },
    // Executed when @stepper-finished event is triggered
    alert (payload) {
      alert('end')
    },
    setAuthentificationStep (nextComponentSettings) {
      let authentificationStep = {
        icon: 'create',
        name: 'signing',
        title: 'Semnare',
        component: ElectronicSignSelector,
        completed: false,
        headerCardImage: nextComponentSettings.url

      }
      switch (nextComponentSettings.authType) {
        case 'mobile':
          authentificationStep.component = MobileSign
          break
        case 'electronicIdentityCard':
          authentificationStep.component = ElectronicSignSelector
          break
      }
      this.steps[1] = authentificationStep
    }
  }
}
