var dayEl = document.querySelector("#currentDay");
var currentDay = moment().format("dddd MMM Do, YYYY")
dayEl.textContent = currentDay

var currentHour = moment().format("HH")
var timesArr = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

var containerEl = $(".container");

for(i=0; i< timesArr.length; i++) {
    var newRow = $("<div>").attr("class", "row")

    var newP = $("<p>").attr("class", "col-1 hour").text(timesArr[i])

    var newTextArea = $("<textarea>").attr("placeholder", "").attr("id", timesArr[i]);
    if(i+9 < parseInt(currentHour)) {
        newTextArea.attr("class", "col-10 past")
    }else if (i+9 == parseInt(currentHour)) {
        newTextArea.attr("class", "col-10 present")
    }else {
        newTextArea.attr("class", "col-10 future")
    }
    newTextArea.val(localStorage.getItem(timesArr[i]))

    var newBtn = $("<button>").attr("class", "col-1 saveBtn").text("Save").on("click", saveToLocal)

    newRow.append(newP)
    newRow.append(newTextArea)
    newRow.append(newBtn)

    containerEl.append(newRow)
}

function saveToLocal() {
    var textToSave = $(this).prev().val()
    var timeToSave = $(this).prev().attr("id")
    localStorage.setItem(timeToSave, textToSave)
}