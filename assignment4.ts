interface student {
    name: string,
    seniorStatus: boolean,
    completeAssignment: boolean
};

let students: student [] = [
    {name: "Shahzaib", seniorStatus: true, completeAssignment: true},
    {name: "Shahroz", seniorStatus: false, completeAssignment: true},
    {name: "Talha", seniorStatus: false, completeAssignment: false},
    {name: "Laraib", seniorStatus: true, completeAssignment: true},
    {name: "Sameer", seniorStatus: false, completeAssignment: false}
];

console.log(students);

function seniorstudent(students: student[]) {
    return students.filter(student => student.seniorStatus && student.completeAssignment === true)
}

console.log(seniorstudent(students));

function removeStudents(student: student[]) {
    return students.filter(student => student.completeAssignment === false)
}

console.log(removeStudents(students));