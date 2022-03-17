/* Calendar Icon */
const calendarWeek = document.getElementById("calendar-day-week"),
	calendarDay = document.getElementById("calendar-day")

const clock = () => {
	let date = new Date()

	let calDay = date.getDate(),
		calDayweek = date.getDay()

	let calWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

	calendarWeek.innerHTML = `${calWeek[calDayweek]}`
	calendarDay.innerHTML = calDay
}
setInterval(
	clock,
	1000
)
