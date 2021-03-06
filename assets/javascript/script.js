//current date displayed
var now = JSON.stringify(moment().format('MMMM Do YYYY'));
$("#currentDay").append(now);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
var time = parseInt(moment().format("HH"));

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//this takes place at the load of the website. 
//WHEN I click into a time block
//THEN I can enter an event
$(".time-block").each(function () {
    var timeId = parseInt($(this)
        .attr("id")
        .split("-")[1]
    );

    if (timeId < time) {
        $(this).find('input').addClass('past');
    } else if (timeId === time) {
        $(this).find('input').addClass('present');
    } else {
        $(this).find('input').addClass('future');
    }

    //finding the id for the div that matches localStorage
    var keyId = $(this).attr("id");
    //retrieving item associated with id
    var text = localStorage.getItem(keyId);
    //defining place to put content
    var content = $(this).find("input").val();

    if (content !== null) {
        $(this).find("input").val(text);
    }

});

//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
$(".saveBtn").on("click", function() {
    var timeBox = $(this).parent().attr("id");
    var inputBox = $(this).siblings(".textarea").val();
    localStorage.setItem(timeBox, inputBox);

});





//WHEN I refresh the page
//THEN the saved events persist