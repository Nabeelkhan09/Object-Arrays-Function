//  Assignment 01
// Building your Friend List
// Task: Create a program that manages a simple friend list.
var people = {
    friends: []
};
var friend1 = {
    firstName: "Shahzaib",
    lastName: "Arshad",
    id: 136
};
var friend2 = {
    firstName: "Shahroz",
    lastName: "Asif",
    id: 269
};
var friend3 = {
    firstName: "Taha",
    lastName: "Afzal",
    id: 364
};
// Step 3: Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
console.log(people);
