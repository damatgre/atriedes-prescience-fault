//current date displayed
var now = JSON.stringify(moment().format("dddd MMMM, YYYY"));
$("#currentDay").append(now);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
var time = JSON.stringify(moment().format("HH"));

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
const timeSlot =["09", "10", "11", "12", "13", "14", "15", "16", "17"];

const isLargeNumber = (element) => element = time;

//testing to find index that matches time
time123 = timeSlot.find(isLargeNumber);

console.log(time123);

//for loop for time check
for (i = 0; i < timeSlot.length; i++) {
    
}

//WHEN I click into a time block
//THEN I can enter an event


//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage


//WHEN I refresh the page
//THEN the saved events persist