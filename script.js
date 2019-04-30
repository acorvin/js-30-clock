// ANALOG CLOCK
function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  // Bezier curve glitch resolution
  if (secondsDegrees === 90) {
    eachHand.forEach(hand => (hand.style.transition = 'none'))
  } else {
    eachHand.forEach(hand => (hand.style.transition = ''))
  }
}

const eachHand = document.querySelectorAll('.hand')
const secondHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.minutes-hand')
const hourHand = document.querySelector('.hour-hand')

setInterval(setDate, 1000)

// DIGITAL CLOCK
const audio = new Audio('audio/clip.wav')

function timeDisplay() {
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  let meridiem = ''

  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss

  if (hh === 0) {
    hh = 12
  }
  if (hh > 12) {
    hh = hh - 12
    meridiem = 'PM'
  } else {
    meridiem = 'AM'
  }

  const time = `${hh}:${mm}:${ss} ${meridiem}`
  document.getElementById('digitalClock').textContent = time

  setTimeout(timeDisplay, 1000)
}
timeDisplay()

// CLOCK TOGGLE
const displayAnalog = document.getElementById('clock')
const displayDigital = document.getElementById('digitalClock')

const btn = document.getElementById('btn')
btn.addEventListener('click', toggleDisplay)

function toggleDisplay() {
  if (displayDigital.style.display === 'none') {
    displayDigital.style.display = 'block'
    displayAnalog.style.display = 'none'
    btn.textContent = 'DIGITAL'
  } else {
    displayDigital.style.display = 'none'
    displayAnalog.style.display = 'block'
    btn.textContent = 'ANALOG'
  }
}
