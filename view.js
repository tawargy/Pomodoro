class View {
  formInput = document.querySelector('.form')
  startButton = document.querySelector('.btn--start')
  pauseButton = document.querySelector('.btn--pause')
  skipButton = document.querySelector('.btn--skip')
  settings = document.querySelector('.settings')
  settingIcon = document.querySelector('#setting-icon')
  circle = document.querySelector('circle')
  period = document.querySelectorAll('.period')
  durationInput = document.querySelector('#duration')
  breakInput = document.querySelector('#break')
  mode = document.querySelector('#mode')
  minutes = document.querySelector('#minutes')
  seconds = document.querySelector('#second')

  addHandlerRender(handler) {
    document.addEventListener('DOMContentLoaded', () => {
      handler()
    })
  }

  getStart(handler) {
    this.startButton.addEventListener('click', function () {
      handler()
    })
  }
  getPause(handler) {
    this.pauseButton.addEventListener('click', function () {
      handler()
    })
  }

  getSkip(handler) {
    this.skipButton.addEventListener('click', function () {
      handler()
    })
  }

  getSetting(handler) {
    this.settingIcon.addEventListener('click', function () {
      handler()
    })
  }
  getFormInput(handler) {
    this.formInput.addEventListener('submit', function (e) {
      e.preventDefault()
      handler()
    })
  }
  getCircleTotalLength() {
    return this.circle.getTotalLength()
  }
  circleTime(perimeter, dashOffset) {
    this.circle.setAttribute('stroke-dasharray', perimeter)
    this.circle.setAttribute('stroke-dashoffset', dashOffset)
  }
  changeModeValue(value) {
    this.mode.innerHTML = value
  }
  changeTimeValue(sec, min) {
    this.seconds.innerHTML = sec
    this.minutes.innerHTML = min
  }
  setDotPeriod(currentPeriod) {
    //const periodElem = document.querySelectorAll(".period");
    if (currentPeriod === 1) {
      this.period[0].classList.add('period-done')
      this.period[1].classList.remove('period-done')
      this.period[2].classList.remove('period-done')
      this.period[3].classList.remove('period-done')
    } else if (currentPeriod === 2) {
      this.period[1].classList.add('period-done')
    } else if (currentPeriod === 3) {
      this.period[2].classList.add('period-done')
    } else if (currentPeriod === 4) {
      this.period[3].classList.add('period-done')
    }
  }
  addRemoveClassWrapper(classMode) {
    const wrapper = document.querySelector('#wrapper')
    if (classMode === 'break') {
      wrapper.classList.add('wrapper-break')
      wrapper.classList.add('wrapper')
    } else if (classMode === 'focus') {
      wrapper.classList.remove('wrapper-break')
      wrapper.classList.add('wrapper-focus')
      wrapper.classList.add('wrapper')
    }
  }
  settingsToggle() {
    this.settingIcon.addEventListener('click', () => {
      this.settings.classList.toggle('settings-hidden')
    })
  }
  getInputValue(handler) {
    this.formInput.addEventListener('submit', (e) => {
      e.preventDefault()
      const focusTime = parseFloat(this.durationInput.value) * 60
      const breackTime = parseFloat(this.breakInput.value) * 60
      handler(focusTime,breackTime)
      this.durationInput.value='';
      this.breakInput.value='';
      this.settings.classList.toggle('settings-hidden')
    })
  }
}
export default new View()
