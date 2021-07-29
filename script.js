"use strict";
const key = document.querySelectorAll(".key");
const text = document.querySelector(".text")
let number1 = 0,
    number2 = 0,
    result = 0;
let symbol;

//for each is used coz key is array of keys
key.forEach((key) => {
    key.addEventListener("click", function() {
        //check if clicked button is number or dot , to add it to text area
        if (!isNaN(key.value) || key.value == ".") {
            text.value = text.value + key.textContent;
            result = 0;

        }
        //checking if the clicked button is any operation
        else if (key.value == "/" || key.value == "-" || key.value == "*" || key.value == "+") {
            number1 = text.value;
            symbol = key.value;

            text.value = "";
        }
        //when = button is clicked we calculate the result and display it
        else if (key.value == "=") {
            number2 = text.value;
            console.log(symbol);
            console.log(number1, number2)
            if (symbol == "+") {

                result = parseFloat(number1) + parseFloat(number2);
            } else if (symbol == "-") {
                result = parseFloat(number1) - parseFloat(number2);
            } else if (symbol == "/") {
                result = parseFloat(number1) / parseFloat(number2);
            } else if (symbol == "*") {
                result = parseFloat(number1) * parseFloat(number2);
            }
            //if result is not a number we don't need that in display
            if (result) {
                text.value = result;
                number1 = number2;

            }


        }
        //for button "C" we pop the last digit in display
        else if (key.value == "pop") {
            let lengthOfText = text.value.length;
            text.value = text.value.slice(0, lengthOfText - 1)
        }
        //if the button is "CLR" we remove the text in display
        else {
            text.value = "";
            result = 0;

        }
    });
});