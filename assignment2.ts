// Assignment no 2

// Manipulating an Array: Rearranging Words

// Objective:

const scrambleArray = ["Student", "of", true, 123, "am", "a", "GIAIC", "abc"];

scrambleArray.splice(2, 2);
scrambleArray.pop();
scrambleArray.unshift("I");
scrambleArray[1] = "am";
scrambleArray[2] = "a";
scrambleArray[3] = "student";
scrambleArray[4] = "of";
scrambleArray[5] = "GIAIC";

const arrays = scrambleArray.join(" ");

console.log(arrays);