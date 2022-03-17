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


"use strict"
class Handle {
	constructor(html) {
		this.html = html
	}
	rotate(deg) {
		this.html.setAttribute("style", `transform: rotate(${deg}deg)`)
	}
}
let handleNodes = {
	hour: new Handle(document.querySelector(".needle.hour")),
	minute: new Handle(document.querySelector(".needle.minute")),
	second: new Handle(document.querySelector(".needle.second")),
}
function setTime(date) {
	let time, deg
	time = date.getSeconds()
	deg = time * 6
	handleNodes.second.rotate(deg)
	time = date.getMinutes()
	deg = (time + date.getSeconds() / 60) * 6
	handleNodes.minute.rotate(deg)
	time = date.getHours()
	deg = (time + date.getMinutes() / 60) * 30
	handleNodes.hour.rotate(deg)
}
function tick() {
	setInterval(() => {
		setTime(new Date())
	}, 1000)
}
setTime(new Date())
tick()
