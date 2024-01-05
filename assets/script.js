$(document).ready(function() {

    function displayTime() {
        $(`#currentDay`).text(dayjs().format (`dddd, MMMM D, YYYY`))
        $(`#currentTime`).text(dayjs().format(`HH:mm: A`))
    }


setInterval(displayTime, 1000)

function updateHour() {
    let currentHour = dayjs().hour();
    let timeBlocks = $(".time-block"); 

    timeBlocks.each(function() {
        let blockHour = parseInt($(this).attr("id"));

        if (currentHour > blockHour) {
            $(this).removeClass("present future"); 
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).removeClass("past future"); 
            $(this).addClass("present");
        } else {
            $(this).removeClass("past present"); 
            $(this).addClass("future");
        }
    });
}

// Calling the function to update the hours
updateHour();


})