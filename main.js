alert("good morning");
alert("Abimbola");
console.log(10 + 5);
console.log(20 - 5);
console.log(2 + 2 - 5);

document.body.innerHTML = "Good morning";

var tshirt = 10;
var socks = 8;
var dinner = 20;
console.log(tshirt + socks + dinner);

var balance = 100;
var lunch = 20;
var dinner = 50;
var job = 100;
console.log(balance - lunch + dinner + job);
document.body.innerHTML = "";

var soup = 10;
var burger = 8 * 3;
var icecream = 5;

console.log(soup + burger + icecream);

var total = (soup + burger + icecream) / 3;
console.log(total);

var toaster = 18.5;
var shirts = 7.5 * 2;
var tax = 10 / 100;
var Tax = 20 / 100;
var sum = toaster + shirts;
console.log(toaster + shirts);
console.log(tax * sum);
console.log(Tax * sum);

var a = "my name is";
var b = " Abimbola";
console.log(a + b);

var coffee = 5;
var bagel = 3;

var c = "total cost:$";
var total = coffee + bagel;
console.log(c + total);

alert(c + total);

var coffee = 5.99;
var bagel = 2.95;
var total = coffee + bagel;
console.log(coffee + bagel);

var sum = "total cost:$";
var thank = "thank you come again";
var total = total.toFixed(2);
console.log(sum + total);

alert(sum + total + thank);

var hour = 10;
var name = "Abimbola";

if (hour >= 6 && hour <= 12) {
  console.log(`good morning ${name}`);
} else if (hour >= 13 && hour <= 17) {
  console.log("good afternoon");
} else {
  console.log("good night");
}

var age = 6;
if (age <= 6) {
  console.log(`discount`);
} else if (age > 6) {
  console.log(`No discount`);
}
