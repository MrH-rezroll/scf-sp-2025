//alert("Hello World");

function CalculateTwoNumbers(){
    let number1 = parseInt(document.getElementById("FirstNumber").value);
    let number2 = parseInt(document.getElementById("SecondNumber").value);
    let operationType = document.getElementById("OperationType").value;
    
    switch(operationType){
        case "Add":
            let result = AddTwoNumbers(number1, number2);
            document.getElementById("Result").innerText = result;
            break;
        case "Subtract":
            document.getElementById("Result").innerText = number1 - number2;
            break;
        case "Multiply":
            document.getElementById("Result").innerText = number1 * number2;
            break;
        default:
            document.getElementById("Result").innerText = number1 / number2;
            break;
    }

    /*
    if(operationType == "Add"){
        let result = AddTwoNumbers(number1, number2);
        document.getElementById("Result").innerText = result;
    }
    else if(operationType == "Subtract"){
        document.getElementById("Result").innerText = number1 - number2;
    }
    else if(operationType == "Multiply"){
        document.getElementById("Result").innerText = number1 * number2;
    }
    else{
        document.getElementById("Result").innerText = number1 / number2;
    }*/
}

function AddTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}