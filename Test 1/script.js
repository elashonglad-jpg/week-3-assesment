//calculate average
function calculateAverage(mark1, mark2, mark3){
let average= (mark1 + mark2 + mark3)/3
return average
}
//calculate grade

function calculateGrade(average){
    if (average >=80 ) {
        return "A" ;
    }else if (average >=70) {
        return "B"
    }else if (average >=60) {
        return "C"
    }else if (average >=50) {
        return "D"
    }else {
        return "E"
    }
}
//get student's information
let studenName = prompt("Enter student's full name:");
let courseName = prompt("Enter course name:");

// check for empty name or course
if (
    studenName === null || studenName.trim() === "" ||
    courseName === null || courseName.trim() === ""
) {
    alert("error: Student name and course cannot be empty!");
} else {
    //get marks for three subjects
    let mark1 = prompt("Enter marks for Subject1:");
    let mark2 = prompt("Enter marks for Subject2:");
    let mark3 = prompt("Enter marks for Subject3:");

    //check for empty marks
    if (
        mark1 === null || mark1.trim() === "" ||
        mark2 === null || mark2.trim() === "" ||
        mark3 === null || mark3.trim() === ""
    ) {
        alert("Enter marks cannot be empty");
    } else {
        //convert marks from text to numbers
        mark1 = Number(mark1);
        mark2 = Number(mark2);
        mark3 = Number(mark3);

        //validate marks
        if (
            !Number.isFinite(mark1) || !Number.isFinite(mark2) || !Number.isFinite(mark3) ||
            mark1 < 0 || mark1 > 100 ||
            mark2 < 0 || mark2 > 100 ||
            mark3 < 0 || mark3 > 100
        ) {
            alert("Marks must be valid numbers between 0 and 100.");
        } else {
            //calculate average and grade
            let average = calculateAverage(mark1, mark2, mark3);
            let averagegrade = calculateGrade(average);
            alert(`Student: ${studenName}\nCourse: ${courseName}\nAverage: ${average.toFixed(2)}\nGrade: ${averagegrade}`);
              // Display student report
            console.log("===== STUDENT REPORT =====");
            console.log("Student Name: " + studentName.trim());
            console.log("Course: " + courseName.trim());
            console.log("Subject 1: " + mark1);
            console.log("Subject 2: " + mark2);
            console.log("Subject 3: " + mark3);
            console.log("Average Marks: " + average.toFixed(2));
            console.log("Final Grade: " + grade);
            console.log("==========================");
        }
    }
}
