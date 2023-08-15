//Decimal to Binarry covert code...
function convertToBinarry() {
  let x;
  let binarry = Number(document.getElementById("binarry_number").value);
  if (isNaN(binarry)){
    x = "It's not a binarry number😔. " + "<br/>" + " Please enter a simple binarry number \
    for convert to decimal number!";
  } else {
    let y = "0b" + binarry;
    let z = Number(y);
    x = z.toString(10);
  };
  document.getElementById("demo").innerHTML = "Answer:  " + x;
};

//Binarry to Decimal convert code...
function convertToDecimal() {
  let x;
  let decimal = Number(document.getElementById("decimal_number").value);
  if (isNaN(decimal)){
    x = "It's not a Deciaml number😔. " + "<br/>" + "Please enter a simple Deciaml number \
    for convert to Binarry number!";
  } else {
    x = decimal.toString(2);
  };
  document.getElementById("demo1").innerHTML = "Answer:  " + x;
};

//Your type accroding to your age...
function ageQuality() {
  let x;
  let age = Number(document.getElementById("input_age").value);
  if (isNaN(age)) {
    x = "It's not a age number😔. " + "<br/>" + "Please enter your simple age like to decimal number..."
  } else {
    x = (age >= 100) ? "Yuo are so old👴" : (age >= 80) ? "You are old👨‍🦳" : (age >= 60) ?
      "You have been just barely old👳‍♂️" : (age >= 40) ? "Yuo are matchiud🧔" : (age >= 18) ?
        "You are adult👨‍🦱" : (age >= 10) ? "You are young👦" : (age >= 1) ? "You are so sweet babby👶" : "";
  };
  document.getElementById("demo2").innerHTML = "Result: " + x;
};

// let nill = Math.floor(Math.random() * 10) + 1;
// console.log(nill);

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// };
// ran = random(1, 6);
// console.log(ran);

// Random code....
function randomNumber() {
  function rann(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let y = Number(document.getElementById("firstNumber").value);
  let o = Number(document.getElementById("lastNumber").value);
  x = rann(y, o);
  document.getElementById("demo3").innerHTML = "Ramdom result: " + x;
};

// Random funtion use guild test..
function giuld() {
  document.getElementById("demo4").innerHTML =
    "✅ If you want to see any random value then You will " + "<br/>" +
    " have type any number as like startingrandom point in this first input section.";
  document.getElementById("demo5").innerHTML =
    "✅ And you will have type any number as like finishing " + "<br/>" +
    " random point in the last input section. And keep to tap refresh button as long " +
    "<br/>" + "as you want to seeing this random value.";
};