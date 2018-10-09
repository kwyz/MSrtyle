<template>
  <div class="stepper-box">
    <div class="top">
      <div class="divider-line" :style="{width: `${(100/(steps.length) * (steps.length - 1)) - 10}%`}"></div>
      <div class="steps-wrapper">
        <template v-if="topButtons">
          <div v-if="currentStep.index > 0" class="stepper-button-top previous" @click="backStep()">
            <i class="material-icons">keyboard_arrow_left</i>
          </div>
        </template>
        <template v-for="(step, index) in steps">
          <div :class="['step', isStepActive(index, step)]" :key="index" :style="{width: `${100 / steps.length}%`}" style="cursor: pointer">
            <div class="circle">
              <i class="material-icons md-18" @click="goBack(index)">
                {{ (step.completed) ? 'done' : step.icon }}
              </i>
            </div>
            <div class="step-title">
              <h4>{{step.title}}</h4>
              <h5 class="step-subtitle">{{step.subtitle}}</h5>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="content">
      <transition :enter-active-class="enterAnimation" :leave-active-class="leaveAnimation" mode="out-in">
        <keep-alive v-if="keepAlive">
          <component :is="steps[currentStep.index].component" :clickedNext="nextButton[currentStep.name]" @can-continue="proceed" @change-next="changeNextBtnValue" @setAuthentificationStep=setAuthentificationStep :current-step="currentStep" :imageUrl="steps[1].headerCardImage" ></component>
        </keep-alive>
        <component v-else :is="steps[currentStep.index].component" :clickedNext="nextButton[currentStep.name]" @can-continue="proceed" @change-next="changeNextBtnValue" :current-step="currentStep"/>d
      </transition>
    </div>
  </div>
</template>

<script src='./stepperCore.js'/>

<style src="./stepperCore.scss" scoped lang="scss"/>
<style scoped>
  /* fallback */
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
        format("woff2");
  }
  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    -webkit-font-smoothing: antialiased;
  }
</style>
