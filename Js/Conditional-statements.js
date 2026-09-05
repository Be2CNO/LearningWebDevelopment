// If Statement

let age = 74;
if (age >= 30) {
    console.log("too old to ride")
}

let a = 185;
if (a >= 18 && a <= 50){
    console.log('come in sir')
}
else {
    console.log('kamine sir')
}

console.log("Logical And Op")

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log("Logical Or Op")

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log("Logical Not Op")
console.log(!true)
console.log(!false)


console.log("Solve Practice Questions")

//question 1

let str = 'ajkafkdshj';
if (str[0]=== "a" && str.length >3){
    console.log(`${str} is a good string :)`)
} else {
    console.log(`${str} Not a Good String :(`)
}