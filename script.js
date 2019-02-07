var presentYear = 2018;
var yearOfBirth = 1973;


function calculateAge(yearOfBirth) {
    var age = presentYear - yearOfBirth;
    return age;
}
var ageJohn = calculateAge(yearOfBirth)
console.log(ageJohn);


function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}
var ageJohn = calculateAge(1973);
var ageIlene = calculateAge(1982);
var ageSam = calculateAge(1960)
console.log( ageJohn, ageIlene, ageSam);




var age = 25

if (age >= 20){
              
  console.log ("John is an adult");           
} else if (age <= 19 && age >= 12 ){
    
  console.log("John is a teenager");            
}
else{
    console.log("John is good");
    
}

var day = "Sunday";
day = prompt("what days do christians go to church");
switch (day) {
    case "Sunday":
        console.log("Welcome to church");
        break;    
    case "Monday":
        console.log("Not a Church day, go to work");
        break;
    case "Tuesday":
        console.log("Not opened today");
        break;
    case "Wednesday":
        console.log("Not a Church day, go to work");
        break;
    case "Thursday":
        console.log("Not opened today");
        break;
    case "Friday":
        console.log("Not a Church day, go to work");
        break;
    default:
        console.log("Really!!");
        
        
        
}

var JohnAge = 20; 
var JohnHeight = 30;
var friendAge = 35;
var friendHeight = 28;

var JohnScore = JohnHeight + 5 * JohnAge;

var friendScore = friendHeight + 5 * friendAge;

if (JohnScore > friendScore) {
   console.log('John is the winner with ' + JohnScore + ' points' ); 
}else if (friendScore > JohnScore) {
    console.log ('Fiend is the winner with ' + friendScore + ' points');
    

}else console.log('This is a draw');
    

var SamAge = 38;
var SamHeight = 31;
var SamScore = SamHeight + 5 * SamAge

if (JohnScore > friendScore && JohnScore > SamScore) {
    console.log('John is the winner with ' + JohnScore + ' points' );
    
}else if (friendScore > JohnScore && friendScore > SamScore) {
    console.log ('Friend is the winner with ' + friendScore + ' points');
}else if (SamScore > friendScore && SamScore > JohnScore) {
    console.log('Sam is the winner with ' + SamScore + ' points' )
}else console.log('This is a draw');





