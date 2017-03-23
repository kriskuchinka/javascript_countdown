// ---> Other work that needs to be done or fixed:
// ---> Make current time change as minutes and hours change (set interval)
// ---> Get countdown date and time working (time does not work yet, only by date)
// ---> Adjust to PST (can I allow user to choose time zone?)
// ---> Figure out events when radio buttons are clicked

window.onload = function () {
	console.log("-----> JavaScript is connected. <-----");
	

	//---------------> Working Functions <---------------

	// represent time as HH:MM, despite 1 digit hour
	function twoDigits(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	} // end of twoDigits function

	//differentiate between am and pm
	function amPm(currentHour) {
		if (currentHour >= 12) {
			morningAfternoon = "pm";
		} else if (currentHour < 12) {
			morningAfternoon = "am";
		}
		return morningAfternoon;
	} // end of amPm function

	// adjust time to 12-hour format
	function twelveHourTime(currentHour) {
		if (currentHour > 12) {
			currentHour = (currentHour - 12);
		}
		return currentHour;
	} // end twelveHourTime function

	// display, reset countdown clock
	function millisecondsToTime(timeGap) {
		var chosenDate = document.getElementById("chosenDate").value;
		var chosenTime = document.getElementById("chosenTime").value;

		var date = Date.parse(chosenDate);

		var time = Date.parse(chosenTime);

		var totalMills = chosenTime;
		var finalMills = totalMills.split(":");

		var timeToMills = (+finalMills[0]) * 60 + (+finalMills[1]) * 60 * 1000;

		var countDownDate = new Date(chosenDate).getTime();

		if (timeGap) {
			var x = setInterval(function() {

				var timeNow = new Date().getTime();
				timeGap = countDownDate - timeNow;
				
				var years = Math.floor(timeGap / (1000 * 60 * 60 * 24 * 365));
				var days = Math.floor((timeGap % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 *24));
				var hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((timeGap % (1000 * 60)) / 1000);
				var finalCountdown = "Years: " + years + " Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
				document.getElementById("futureCountdown").innerHTML = finalCountdown;

				if (timeGap < 0) {
					document.getElementById("futureCountdown").innerHTML = "That was in the past.";
				} // end IF timeGap < 0
				
			}, 1000);
			var reset = document.getElementById("resetButton");
			reset.onclick = function() {
				// console.log("You clicked reset button.");
				clearInterval(x);
				document.getElementById("futureCountdown").innerHTML = "";

			}; // end of reset.onclick function
		} // end IF timeGap

		} // end of millisecondsToTime function

	//---------------> End working functions <---------------


	//---------------> Begin necessary arrays <---------------
	// months
	var mm = [
		["January"], ["February"], ["March"], ["April"], ["May"], ["June"], ["July"], ["August"], ["September"], ["October"], ["November"], ["December"]];
	// weekdays
	var weekDays = [["Sunday"], ["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"], ["Saturday"]];
	//---------------> End of arrays <---------------


	//---------------> Find current date and time <--------------- 
	// date
	var d = new Date();
	var thisWeekDay = (weekDays[d.getDay()]);
	var thisMonth = (mm[d.getMonth()]);
	var thisNumericDay =(d.getDate());
	var thisYear = (d.getFullYear());
	var thisFullDate = thisWeekDay + ", " + thisMonth + " " + thisNumericDay + ", " + thisYear;
	document.getElementById("fullDate").innerHTML = thisFullDate;

	//time
	var thisCurrentHour = d.getHours();
	var thisCurrentMinute = d.getMinutes();
	// apply functions from above to format time properly(am/pm, 12hour, 2digit)
	var morningAfternoon = amPm(thisCurrentHour);
	var modifiedHour = twelveHourTime(twoDigits(thisCurrentHour));
	var modifiedMinutes= twoDigits(thisCurrentMinute);
	var currentTime = modifiedHour + ":" + modifiedMinutes + morningAfternoon;
	document.getElementById("currentTime").innerHTML = currentTime;
	//---------------> End current date and time <---------------

	document.getElementById("chosenDateButton").addEventListener("click", millisecondsToTime);

}; // end of window.onload