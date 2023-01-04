console.log("*****Exercise 1 : Divisible By Three*****")

let numbers = [123, 8409, 100053, 333333333, 7]

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0) {
        console.log(`${numbers[i]} : `, true)
    } else {
        console.log(`${numbers[i]} : `, false)
    }
}

console.log("*****Exercise 2 : Attendance*****")

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

// Prompt the student for their name
let userName = prompt("Enter your name : ")

// If the name is in the object, console.log the name of the student and the country they come from
// Hint: You don’t need to use a for loop, just look up the statement if ... in
if (userName in guestList) {
    console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`)
} else {
    // If the name is not in the object, console.log: "Hi! I'm a guest
    console.log("Hi! I'm a guest")
}

console.log("*****Exercise 3 : Playing With Numbers*****")

let age = [20, 5, 12, 43, 98, 55]

// Console.log the sum of all the numbers in the age array
let sum = 0
for (let counter = 0; counter < age.length; counter++) {
    sum += age[counter]
}
console.log(`Sum : ${sum}`)

// Console.log the highest age in the array
let highestAge = age[0]

for (let item = 0; item < age.length; item++) {
    if (age[item] > highestAge) {
        highestAge = age[item]
    }
    
}

console.log(`Max : ${highestAge}`)