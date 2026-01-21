/**
 * Author: Lincoln Bunker
 * Date: 20 Jan 2026
 * Purpose: Challenge - JS Date and Math Objects
 */

"use strict";

//Display the date in the h1 element, and the time in the h2 element
runClock();
setInterval("runClock()", 1000);

function runClock() {
    //Date Object to store the current date and time
    var currentDate = new Date();
    document.getElementById("current-date").textContent = currentDate.toLocaleDateString();
    document.getElementById("current-time").textContent = currentDate.toLocaleTimeString();

    //change the image depending on the time of day
    var hour = currentDate.getHours();
    if (hour < 12) {
        document.getElementById("greeting-image").src = "/images/morning.jpg";
    } else if (hour < 18) {
        document.getElementById("greeting-image").src = "/images/afternoon.jpg";
    } else {
        document.getElementById("greeting-image").src = "/images/night.jpg";
    }

    //constant to store my DOB
    const BIRTHDAY = new Date("July 11, 2003");

    //display BIRTHDAY expressed as date only on webpage
    document.getElementById("birthday").textContent = BIRTHDAY.toLocaleDateString();

    //difference in days between BIRTHDAAY and currentDate
    var dayDifference = (currentDate - BIRTHDAY) / (1000 * 60 * 60 * 24);
    document.getElementById("days-old").textContent = Math.floor(dayDifference);

    //calculate my current age in dog years
    var ageDogYears = (currentDate.getFullYear() - BIRTHDAY.getFullYear()) * 7;
    document.getElementById("age-dog-years").textContent = Math.floor(ageDogYears);

    //calculate the number of seconds until the first of next month
    var nextMonth = new Date(
        currentDate.getFullYear(), // Year (2026)
        currentDate.getMonth() + 1, // 1 month from now (Feb)
        1,                         // Day of the month
        0, 0, 0, 0                 // Time of day 12AM
    );
    var nextMonthInSeconds = (nextMonth - currentDate) / 1000;
    document.getElementById("seconds-next-month").textContent = Math.floor(nextMonthInSeconds);
}
