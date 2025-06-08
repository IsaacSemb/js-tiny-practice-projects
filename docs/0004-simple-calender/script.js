
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


function setDynamicFavicon(dayNumber) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#e38d3d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text (day of the month)
  ctx.fillStyle = "#000000";
  ctx.font = "bold 40px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(dayNumber, canvas.width / 2, canvas.height / 2);

  const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
  favicon.rel = "icon";
  favicon.href = canvas.toDataURL("image/png");

  document.head.appendChild(favicon);
}

// Get current day
const today = new Date().getDate();
setDynamicFavicon(today);
