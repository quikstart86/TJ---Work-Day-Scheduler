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

$(`.saveBtn`).on(`click`, function (){
    let textValue = $(this).siblings(`.description`).val();

    let timeValue = $(this).parent().attr(`id`);

    localStorage.setItem(timeValue, textValue);
});
// to get item from local storage
$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
$('#18 .description').val(localStorage.getItem('18'));



})