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
    console.log(time);
    theHour = parseInt(theHour);

    if (theHour > time) {
      $(this).addClass("future");
    } else if (theHour < time) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
}

colorStyle();

// var todaysDate = moment().format("dddd") + ", " + moment().format("MMMM Do YYYY");

// $("#currentDay").text(todaysDate);
// //Displays the current Date

// var theHour = moment().format("ha");
// //The current hour

// const nineAM = $("#9am");
// const tenAM = $("#10am");
// const elevenAM = $("#11am");
// const twelvePM = $("#12pm");
// const onePM = $("#1pm");
// const twoPM = $("#2pm");
// const threePM = $("#3pm");
// const fourPM = $("#4pm");
// const fivePM = $("#5pm");
// //The textarea ID

// //What am i doing wrong here why is this not changing the color of the timeblock according to the time?
// function colorStyle() {
//   $(".timeblock row").each(function () {
//     var time = parseInt($(this).attr("id"));
//     theHour = parseInt(theHour);
//     console.log(theHour);
//     if (theHour > time) {
//       $(this).addClass("past");
//     } else if (theHour === time) {
//       $(this).addClass("present");
//     } else {
//       $(this).addClass("future");
//     }
//   });
// }

// colorStyle();

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings("textarea").val();
    var key = $(this).siblings("textarea").attr("id");
    console.log(text);
    console.log(key);
    localStorage.setItem(key, JSON.stringify(text));
  });
});
