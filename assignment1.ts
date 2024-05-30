//  Assignment 01

// Building your Friend List
// Task: Create a program that manages a simple friend list.

let people = {
    friends: [] as friend []
};

// Step 2: Create three seprate objects each representing a friend, with properties like firstName, lastName, and id.

type friend = {
    firstName: string,
    lastName: string,
    id?: number
};

let friend1: friend = {
    firstName: "Shahzaib",
    lastName: "Arshad",
    id: 136
};

let friend2:friend = {
    firstName: "Shahroz",
    lastName: "Asif",
    id: 269
};

let friend3: friend = {
    firstName: "Taha",
    lastName: "Afzal",
    id: 364
};

// Step 3: Add these friend objects to the friends array within the people object.

people.friends.push(friend1, friend2, friend3);

console.log(people);