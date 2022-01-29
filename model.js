export const state = {
  focusTime: 1500,
  breakTime: 300,
  duration: 0,
  elapsed: 0,
  seconds: 0,
  minutes: 0,
  currentTime: 0,
  intervalId: 0,
  focusMode: true,
  breakMode: false,
  dashOffset: 0,
  perimeter: 0,
  currentPeriod: 0,
}

export const focusMode = () => {
  state.duration = state.focusTime
  state.elapsed = state.focusTime
  state.focusMode = true
  state.breakMode = false
  state.currentTime = 0
  state.seconds = 0
  state.minutes = 0
}
export const breakMode = () => {
  state.duration = state.breakTime
  state.elapsed = state.breakTime
  state.focusMode = false
  state.breakMode = true
  state.currentTime = 0
  state.minutes = 0
  state.seconds = 0
}
export const tick = () => {
  state.elapsed = state.duration - state.currentTime
  state.seconds = Math.floor(state.elapsed % 60)
  state.minutes = Math.floor(state.elapsed / 60)
  state.currentTime++
}

export const circleTime = () => {
  state.dashOffset =
    state.perimeter -
    (state.currentTime / (state.duration + 1)) * state.perimeter
}
