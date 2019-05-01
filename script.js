// ANALOG CLOCK
function setDate() {
  const now = new Date()
  // calculate seconds
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  // calculate minutes
  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
  // calculate hours
  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  // Bezier curve transition glitch resolution 
  if (secondsDegrees === 90) {
    eachHand.forEach(hand => (hand.style.transition = 'none'))
  } else {
    eachHand.forEach(hand => (hand.style.transition = ''))
  }
}
// Get clock hands by class names
const eachHand = document.querySelectorAll('.hand')
const secondHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.minutes-hand')
const hourHand = document.querySelector('.hour-hand')

setInterval(setDate, 1000)

// DIGITAL CLOCK

// Get current time
function timeDisplay() {
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  let meridiem = ''

  // assign values to display
  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss

  // Set AM and PM
  if (hh === 0) {
    hh = 12
  }
  if (hh > 12) {
    hh = hh - 12
    meridiem = 'PM'
  } else {
    meridiem = 'AM'
  }
  // display current time from assigned values
  const time = `${hh}:${mm}:${ss} ${meridiem}`
  document.getElementById('digitalClock').textContent = time

  //set ticking interval miliseconds
  setTimeout(timeDisplay, 1000)
}
// run the function
timeDisplay()

// Get analog and digital clock displays by id
const displayAnalog = document.getElementById('clock')
const displayDigital = document.getElementById('digitalClock')

// Get button by id and listen for click event
const btn = document.getElementById('btn')
btn.addEventListener('click', toggleDisplay)

// Toggle analog and digital clock displays
function toggleDisplay() {
  if (displayDigital.style.display === 'block') {
    displayDigital.style.display = 'none'
    displayAnalog.style.display = 'block'
    btn.textContent = 'DIGITAL'
  } else {
    displayDigital.style.display = 'block'
    displayAnalog.style.display = 'none'
    btn.textContent = 'ANALOG'
  }
}
