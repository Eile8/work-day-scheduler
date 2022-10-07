var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today); 

var button= $("#saveBtn")
button.on("click", function(event) {
    event.preventDefault();
    console.log("YEs")

    var text= $("#textarea")
    localStorage.setItem("save", text);
    })