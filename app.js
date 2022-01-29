import * as model from './model.js'
import View from './view.js'

function circleControler() {
  model.circleTime()
  View.circleTime(model.state.perimeter, model.state.dashOffset)
}
function periodCounting() {
  if (model.state.currentPeriod < 4) {
    model.state.currentPeriod++
    View.setDotPeriod(model.state.currentPeriod)
  } else {
    model.state.currentPeriod = 1
    View.setDotPeriod(model.state.currentPeriod)
  }
}
function focuseModeController() {
  model.focusMode()
  View.changeModeValue('Focus')
  View.changeTimeValue('00', model.state.focusTime / 60)
  periodCounting()
  View.addRemoveClassWrapper('focus')
}
function breakModeController() {
  model.breakMode()
  View.changeModeValue('Break')
  View.changeTimeValue('00', model.state.breakTime / 60)
  View.addRemoveClassWrapper('break')
}
function switchModeController() {
  pauseController()
  if (model.state.focusMode) {
    breakModeController()
  } else if (model.state.breakMode) {
    focuseModeController()
  }
}
function tickController() {
  if (model.state.elapsed <= 0) {
    switchModeController()
  } else {
    model.tick()
    circleControler()
    View.changeTimeValue(model.state.seconds, model.state.minutes)
  }
}
function startController() {
  model.state.perimeter = View.getCircleTotalLength()
  tickController()
  model.state.intervalId = setInterval(tickController, 1000)
}
function pauseController() {
  clearInterval(model.state.intervalId)
}
function getInputValueController(focusTime, breakTime) {
  if (!focusTime || !breakTime) return

  console.log(focusTime, breakTime)
  model.state.focusTime = focusTime
  model.state.breakTime = breakTime
  model.state.currentPeriod = 0
  focuseModeController()
}
function init() {
  View.addHandlerRender(focuseModeController)
  View.getStart(startController)
  View.getPause(pauseController)
  View.getSkip(switchModeController)
  View.settingsToggle()
  View.getInputValue(getInputValueController)
}

init()
