function calculateAverageMarks() {
    var marks =[40, 33, 80, 93, 12, 46];
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    var average = sum / marks.length;
    return average;
}

function displayStudentInfo() {
    var info = "Name: " + student.name + "<br>";
    info += "Age: " + student.Age + "<br>";
    info += "Address: " + student.Address + "<br>";
    document.getElementById("studentInfo").innerHTML = info;
}

function displayAverageMarks() {
    var average = calculateAverageMarks();
    document.getElementById("averageMarks").innerHTML = "Average Marks: " + average;
}

var student = {
    name: "Rafsan Khan",
    Age: 34,
    Address: "House 432, Banani, Rd-11",
    Marks: [40, 33, 80, 93, 12, 46],
}


displayStudentInfo();
displayAverageMarks();