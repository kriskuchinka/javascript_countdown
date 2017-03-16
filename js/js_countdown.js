// ---> Other work that needs to be done or fixed:
// ---> Make current time change as minutes and hours change (set interval)
// ---> Style Current Day and Time to look like an alarm clock of some sort
// ---> Get countdown date and time working

window.onload = function () {
	console.log("-----> JavaScript is connected. <-----");
	

	//---------------> Working Functions <---------------
	// make sure that hour is represented as HH:MM, despite if hour is 1 digit
	function twoDigits(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	// create function to differentiate between am and pm
	function amPm(currentHour) {
		if (currentHour >= 12) {
			morningAfternoon = "pm";
		} else if (currentHour < 12) {
			morningAfternoon = "am";
		}
		return morningAfternoon;
	}
	// create function to adjust time to 12-hour format
	function twelveHourTime(currentHour) {
		if (currentHour > 12) {
			currentHour = (currentHour - 12);
		}
		return currentHour;
	}
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



	
// function countDownButton() {
// 	console.log("----->Begin countDownButton data.<-----");


// 	console.log("chosenDate is: " + chosenDate);
// 	console.log("chosenTime is: " + chosenTime);
// 	var countDownDate = new Date(chosenDate).getTime();
// 	//??????? var countDownDate = chosenDate + " " + chosenTime;
// 	console.log("This is the date and time you have chosen: " + countDownDate);
// 	var currentTime = new Date().getTime();
// 	var timeGap = countDownDate - currentTime;

// 	console.log("countDownDate is: " + countDownDate);
// 	console.log("currentTime is: " + currentTime);
// 	console.log("timeGap is: " + timeGap);
// 	var timeDifference = timeGap.getTime();
// 	document.getElementById("futureCountdown").innerHTML = timeDifference;
// }
		// enable countdown button to grab date value
	document.getElementById("chosenDateButton").addEventListener("click", millisecondsToTime());
	function millisecondsToTime(timeGap) {
		var chosenDate = document.getElementById("chosenDate").value;
		var chosenTime = document.getElementById("chosenTime").value;
		var countDownDate = new Date(chosenDate).getTime();

		var x = setInterval(function() {

			var timeNow = new Date().getTime();
			timeGap = countDownDate - timeNow;

			var years = Math.floor(timeGap / (1000 * 60 * 60 * 24 * 365));
			var days = Math.floor(timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 *24);
			var hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((timeGap % (1000 * 60)) / 1000);
			var finalCountdown = "Years: " + years + " Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
			document.getElementById("futureCountdown").innerHTML = finalCountdown;
		}, 1000);

	}

	//Begin using function to calculate and set interval for countdown
	 
	//Set the date we're counting down to
	// var chosenDate = prompt("Enter future date:");
	// var chosenTime = prompt("Enter time");
	// var countDownDate = new Date(chosenDate).getTime();
	// console.log("Chosen Time: " + countDownDate);

	//Update the count down every 1 second
	// var x = setInterval(function() {
	// 	// Get todays date and time
	// 	var now = new Date().getTime();
		
	// 	// Find the distance between now an the count down date
	// 	var distance = countDownDate - now;

	// 	// Time calculations for days, hours, minutes and seconds
	// 	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	// 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// 	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
	// 	// Output the result in an element with id="futureCountdown"
	// 	document.getElementById("futureCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	// 		if (distance < 0) {
	// 			setInterval(x);
	// 			days = days - (1 * day);
	// 			document.getElementById("demo").innerHTML = "EXPIRED";
	// 		}
		
	// }, 1000); // end of setInterval function


}; // end of window.onload