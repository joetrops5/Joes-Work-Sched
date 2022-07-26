let todaysDate = moment().format("dddd") + ", " + moment().format("MMMM Do YYYY");

$("#currentDay").text(todaysDate);
//Displays the current Date

let theHour = moment().format("ha");
//The current hour

const nineAM = $("#9hour");
const tenAM = $("#10hour");
const elevenAM = $("#11hour");
const twelvePM = $("#12hour");
const onePM = $("#13hour");
const twoPM = $("#14hour");
const threePM = $("#15hour");
const fourPM = $("#16hour");
const fivePM = $("#17hour");

//styling the color based on the time being in the past present or future.
function colorStyle() {
  $("textarea").each(function () {
    var time = parseInt($(this).attr("id"));
    theHour = moment().hour();
    if (theHour > time) {
      $(this).addClass("past");
    } else if (theHour < time) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

colorStyle();

//Saving to Local Storage
$(".saveBtn").on("click", function () {
  var text = $(this).siblings("textarea").val();
  var key = $(this).siblings("textarea").attr("id");
  localStorage.setItem(key, text);
});
$(document).ready(function () {
  $(nineAM).val(localStorage.getItem("9hour"));
  $(tenAM).val(localStorage.getItem("10hour"));
  $(elevenAM).val(localStorage.getItem("11hour"));
  $(twelvePM).val(localStorage.getItem("12hour"));
  $(onePM).val(localStorage.getItem("13hour"));
  $(twoPM).val(localStorage.getItem("14hour"));
  $(threePM).val(localStorage.getItem("15hour"));
  $(fourPM).val(localStorage.getItem("16hour"));
  $(fivePM).val(localStorage.getItem("17hour"));
});
