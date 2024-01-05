$(document).ready(function() {

    function displayTime() {
        $(`#currentDay`).text(dayjs().format (`dddd, MMMM D, YYYY`))
        $(`#currentTime`).text(dayjs().format(`HH:mm: A`))
    }


setInterval(displayTime, 1000)

function updateHour() {
    let currentHour = dayjs().hour();
    let timeBlocks = $(".time-block"); // Corrected selector for time-block elements

    timeBlocks.each(function() {
        let blockHour = parseInt($(this).attr("id"));

        if (currentHour > blockHour) {
            $(this).removeClass("present future"); // Remove present and future classes
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).removeClass("past future"); // Remove past and future classes
            $(this).addClass("present");
        } else {
            $(this).removeClass("past present"); // Remove past and present classes
            $(this).addClass("future");
        }
    });
}

// Call the function to update the hours
updateHour();


})