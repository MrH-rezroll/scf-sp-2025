let firstVisit = true;

if(firstVisit != false){
    alert("Hello World!");
}
else{
    alert("I hate alerts!");
}

function SayHi() {
    // Get the value of the input with the id "Name"
    var nameValue = document.getElementById("Name").value;

    // Check if the value matches "Jurassic Park"
    if (nameValue === "Jurassic Park") {
        alert("That is correct");
    } else {
        alert("Go back to school!");
    }
}

/*
    Simple Quiz App
    Ask a basic question with a one word answer. (<p> of html)
    Use a text input to get the user's answer when a button is pressed.
    The button should call a function that checks if the answer is correct.
    The fuction should alert the user if it is right or wrong.
*/
