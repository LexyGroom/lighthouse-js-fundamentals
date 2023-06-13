function ageCalculator(name, yearOfBirth, currentYear) {

let age = currentYear - yearOfBirth;

return name + " is " + age + " years old.";
}

//use to verify if it works properly
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
