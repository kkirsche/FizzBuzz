// Author: Kevin Kirsche
// URL: https://github.com/kkirsche
// I acknowledge the possible dangers associated with document.write (document.write can be a form of eval). This is simply for demonstration purposes.
// I am also including console.log for example purposes as this can be tested using Chrome or Firefox dev tools such as Firebug
function fizzBuzz() {
    "use strict";

    var fizzBuzzNumber = 1;
    //Let's make this an unordered list. We'll open that list here.
    document.write("<ul>");
    //Now we want to do the actual work. Let's make sure each comes out as a list item.
    while (fizzBuzzNumber <= 100) {
        if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
            console.log("FizzBuzz");
            document.write("<li>FizzBuzz</li>");
        } else if (fizzBuzzNumber % 3 === 0) {
            console.log("Fizz");
            document.write("<li>Fizz</li>");
        } else if (fizzBuzzNumber % 5 === 0) {
            console.log("Buzz");
            document.write("<li>Buzz</li>");
        } else {
            console.log(fizzBuzzNumber);
            document.write("<li>" + fizzBuzzNumber + "</li>");
        }
        //Increment fizzBuzzNumber to prevent an infinite loop scenario.
        fizzBuzzNumber++;
    }
    document.write("</ul>");
}

fizzBuzz();