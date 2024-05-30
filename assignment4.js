;
var students = [
    { name: "Shahzaib", seniorStatus: true, completeAssignment: true },
    { name: "Shahroz", seniorStatus: false, completeAssignment: true },
    { name: "Talha", seniorStatus: false, completeAssignment: false },
    { name: "Laraib", seniorStatus: true, completeAssignment: true },
    { name: "Sameer", seniorStatus: false, completeAssignment: false }
];
console.log(students);
function seniorstudent(students) {
    return students.filter(function (student) { return student.seniorStatus && student.completeAssignment === true; });
}
console.log(seniorstudent(students));
function removeStudents(student) {
    return students.filter(function (student) { return student.completeAssignment === false; });
}
console.log(removeStudents(students));
