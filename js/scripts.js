// Business interface
var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//User interface
$(document).ready(function() {
  $('form#add').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#add1').val());
    var number2 = parseInt($("#add2").val());
    var theSumOf = add(number1, number2);

    $(".hiddenAnswer").text(theSumOf);
    $("#results").show();
  });
});

//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
var result = sub(number1, number2);
//alert(result);
