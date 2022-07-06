$(document).ready(function(){
    // shows current day in header using moment
    $("#currentDay").text(moment().format("dddd, MMMM Do, hh:mm:ss a"));

    // assign event listener to save button
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // puts items in local storage
        localStorage.setItem(time, text);
    })
    // gets all desciptions from local storage and displays it
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {

        // uses moment to get current hour in day
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // checks time and assigns css class based on currentHour
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present")
                $(this).removeClass("future");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})