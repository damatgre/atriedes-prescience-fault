//current date displayed
var now = JSON.stringify(moment().format("MMM Do YY"));
$("#currentDay").append(now);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
var time = parseInt(moment().format("HH"));

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

$(".time-block").each(function(){
    var timeId = parseInt($(this)
        .attr("id")
        .split("-")[1]
    );

    if (timeId < time){
        $(this).find('input').addClass('past');
    } else if (timeId === time) {
        $(this).find('input').addClass('present');
    } else {
        $(this).find('input').addClass('future');
    }
});

//WHEN I click into a time block
//THEN I can enter an event



//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage


//WHEN I refresh the page
//THEN the saved events persist