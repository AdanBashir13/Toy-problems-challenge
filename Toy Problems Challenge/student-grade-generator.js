function calculateGrade(){

    //propmt the user for nput
    let userInput = prompt("Enter student marks");

    //convert the user input which is a string to a number
    let marks = Number(userInput);

    //check to see if the user input is between 0-100
    if (isNaN(marks) || marks < 0 || marks>100){
        console.log ("Invalid Input. Please enter a value between 0-100");
        return;
    }

//assign the marks to the corresponding grade
let grade;

if (marks>79){
    grade = "A";
}
else if (marks >= 60 &&  marks <= 79){
    grade = "B";
}
else if (marks >= 49 && marks <= 59){
    grade = "C";
}
else if (marks >=40 && marks <=49){
    grade = "D";
}
else if (marks < 40){
    grade = "E";
}

//Display the Grade
console.log ( `Student Grade:, ${grade}`);
return;
}

//to call the function
calculateGrade();