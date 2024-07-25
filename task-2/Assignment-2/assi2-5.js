// 5
//==== solution - 1
// 5 - a
// var userName = prompt("Please enter your name:");
// function getUserName(name) {
//     if (name == "") {
//         alert("again");
//     }
// }
// getUserName(userName);

//==== solution - 2
// 5 - a
function getUserName() {
    var userName = "";
    while (!userName) {
        userName = prompt("enter your name: ");
        if (!userName.trim()) {
            alert("The name cannot be empty");
        }
    }
    return userName;
}
console.log(getUserName());

// =========================
// 5 - b

var gradesInput = "";
function getGrades() {
    var grades = [];
    var sum = 0;
    var gradesArray;
    while (!gradesInput) {
        gradesInput = prompt("enter your grades like this: 90,50,30,10");
        if (!gradesInput) {
            alert("The grades cannot be empty");
        } else {
            gradesArray = gradesInput.split(",");

            var allNumbers = true;
            for (var i = 0; i < gradesArray.length; i++) {
                var grade = gradesArray[i];

                if (isNaN(grade) || grade === "") {
                    allNumbers = false;
                    break;
                } else {
                    gradesArray[i] = Number(grade);
                    sum += gradesArray[i];
                }
            }
            console.log("4->", gradesArray);
            function sumArr(sum, len) {
                console.log("6->average: ", sum / len);
            }
            sumArr(sum, gradesArray.length);

            if (allNumbers) {
                grades = gradesArray;
            } else {
                alert("all entries not numbers");
            }
        }
    }
    return grades;
}
getGrades();
