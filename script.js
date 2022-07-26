let todaysDate = moment().format("dddd") + ", " + moment().format("MMMM Do YYYY");

$("#currentDay").text(todaysDate);
//Displays the current Date

let theHour = moment().format("ha");
//The current hour

const nineAM = $("#9am");
const tenAM = $("#10am");
const elevenAM = $("#11am");
const twelvePM = $("#12pm");
const onePM = $("#1pm");
const twoPM = $("#2pm");
const threePM = $("#3pm");
const fourPM = $("#4pm");
const fivePM = $("#5pm");
//The textarea ID

//What am i doing wrong here why is this not changing the color of the timeblock according to the time?
function colorStyle() {
  $("textarea").each(function () {
    var time = parseInt($(this).attr("id"));

    theHour = parseInt(theHour);

    if (theHour > time) {
      $(this).addClass("past");
    } else if (theHour === time) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

colorStyle();
