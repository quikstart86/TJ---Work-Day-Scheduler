$(document).ready(function () {

    // dayjs plugin for date and time function on app displaying day/month/year + hours and mins (am/pm)
    function displayTime() {
        $(`#currentDay`).text(dayjs().format(`dddd, MMMM D, YYYY`))
        $(`#currentTime`).text(dayjs().format(`HH:mm A`))
    }

    // update every second
    setInterval(displayTime, 1000)

    function updateHour() {
        let currentHour = dayjs().hour();
        let timeBlocks = $(".time-block");

        // if loop > used to cycle through time conditions for functionality and styling
        timeBlocks.each(function () {
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

    // assigning click function on saveBtn & setting items to local storage
    $('.saveBtn').on('click', function () {
        let textValue = $(this).siblings('.description').val();
        let timeValue = $(this).parent().attr('id');
        localStorage.setItem(timeValue, textValue);
    });

    // retrieving from local storage
    $('.time-block').each(function () {
        let hour = $(this).attr('id');
        let storedValue = localStorage.getItem(hour);
        $(this).find('.description').val(storedValue);
        console.log(`Retrieved: ${hour} - ${storedValue}`);
    });

    // adding clear all functionality to the page to clear local storage
    $(`#clearAllBtn`).on(`click`, function () {
        localStorage.clear()
        document.location.reload();
    })

});

