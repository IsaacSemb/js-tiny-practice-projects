
const calenderContainer = document.querySelector('.calender-container')
const monthName = document.querySelector('.month-name')
const dayName = document.querySelector('.day-name')
const dayNumber = document.querySelector('.day-number')
const yearCurrent = document.querySelector('.year')

const currentDate = new Date()

// retrieving all necesssary content

const longMonth = currentDate.toLocaleString( 'en-US', { month : 'long' } )
// console.log(longMonth);

const dayNum = currentDate.toLocaleString( 'en-US', { day : '2-digit' } )
// console.log(longDay);

const yearCurr = currentDate.getFullYear()
// console.log(yearCurr);

const weekDay = currentDate.toLocaleString( 'en-US', { weekday : 'long' } )
// console.log(weekDay);


monthName.textContent = longMonth
dayName.textContent = weekDay
dayNumber.textContent = dayNum
yearCurrent.textContent = yearCurr
