console.log("Hello World");
console.log("hi");
console.log("hello");

// if-else conditional control-flow statement
var adam = "czesc";
if (adam == "suh dude") {
    console.log("adam was suh dude");
} else if (adam == "hello"){
    console.log('adam was hello');
} else if (adam == "yo") {
    console.log('adam was yo');
} else {
    console.log('adam wasn\'t any of the above');
}


// while loops
var counter = 0;
while ( counter < 10 ) {
    console.log(counter)
    counter = counter + 1;
}

console.log("we're done with our first while loop!")

var string = "";
while (string != "aaaaa") {
    console.log(string)
    string = string + "a";
}

console.log("we're done with our first while loop!")

var array = [];
while (array.length < 5) {
    array.push("adam");
    console.log(array)
}

// for loops
for (var i=0; i<10; i = i + 1) {
    console.log('im in a for loop')
}



// functions
function adamsFunc() {
    console.log('im in a function')
}

adamsFunc();

// anonymous functions
var anonFunction = function () {
    console.log('anon');
}

anonFunction();


function hello(){
    console.log('hello')
}







var adamsArray = ["a", "b", "c", "d"];

var reversed = [];

while (adamsArray.length > 0) {
    var popped = adamsArray.pop();
    reversed.push(popped);

    // reversed.push(adamsArray.pop());
}

console.log(reversed);