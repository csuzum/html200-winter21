// Lesson 02-01: 4 variables, using operators
let cheesePizza = 17;
let pepperoni = 3;
let olives = 2;
let coupon = -1.5;


console.log((cheesePizza + ++pepperoni) * (cheesePizza + --olives) + coupon);


if ((cheesePizza + olives + pepperoni) * 2 >= 30) {
   console.log((cheesePizza + olives + pepperoni) * 2 + coupon);
}  else {
   console.log((cheesePizza + olives + pepperoni) * 2);
}
