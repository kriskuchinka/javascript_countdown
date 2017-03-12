window.onload = function () {
	console.log("JavaScript is connected.");

	// create array of months
	var mm = [
		["January"], ["February"], ["March"], ["April"], ["May"], ["June"], ["July"], ["August"], ["September"], ["October"], ["November"], ["December"]
	];
	// create array of weekdays
	var weekDays = [["Sunday"], ["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"], ["Saturday"]];

	// create date object
	var d = new Date();
	// get month, day and year values using other built-in date functions
	var thisMonth = (mm[d.getMonth()]);
	var thisNumericDay =(d.getDate());
	var thisYear = (d.getFullYear());
	var weekDay = (d.getDay());
	// get time
	var currentHour = d.getHours();
	var currentMinute = d.getMinutes();
	console.log(currentHour + ":" + currentMinute);

	// create combination of the above variables
	var fullDate = weekDays[weekDay] + ", " + thisMonth + " " + thisNumericDay + ", " + thisYear;
	console.log(fullDate);
	// Insert fullDate value into HTML
	document.getElementById("fullDate").innerHTML = fullDate;

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

	function twelveHourTime(currentHour) {
		// var pmHour;
		if (currentHour > 12) {
			currentHour = (currentHour - 12);
		}
		return currentHour;
	}

	var morningAfternoon = amPm(currentHour);
	// make both hours and minutes display in double digits
	var modifiedHour = twelveHourTime(twoDigits(currentHour));
	var modifiedMinutes= twoDigits(currentMinute);

	var currentTime = modifiedHour + ":" + modifiedMinutes + morningAfternoon;

	document.getElementById("currentTime").innerHTML = currentTime;

	// enable countdown button to grab date value
	var chosenDate;
	document.getElementById("chosenDateButton").addEventListener("click", countdownButton);
	function countdownButton() {
		console.log("You clicked me.");
		chosenDate = document.getElementById("chosenDate").value;
		chosenTime = document.getElementById("chosenTime").value;
		console.log(chosenDate, chosenTime);
		// var countDownDate = new Date(chosenDate, chosenTime);
		var countDownDate = chosenDate + " " + chosenTime;
		console.log("This is the date you have chosen: " + countDownDate);
		var currentTime = new Date().getTime();
		console.log("The current time is: " + currentTime);
		var timeGap = countDownDate - currentTime;
		document.getElementById("futureCountdown").innerHTML = timeGap;
	}
	//Begin using function to calculate and set interval for countdown
	 
	//Set the date we're counting down to
	// var chosenDate = prompt("Enter future date:");
	var chosenTime = prompt("Enter time");
	var countDownDate = new Date(chosenDate, chosenTime).getTime();


	//Update the count down every 1 second
	var x = setInterval(function() {
	// Get todays date and time
	var now = new Date().getTime();
	
	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// Output the result in an element with id="futureCountdown"
	document.getElementById("futureCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		if (distance < 0) {
			setInterval(x);
			days = days - (1 * day);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	
	}, 1000); // end of setInterval function


}; // end of window.onload