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
  //user interface for addition
  $('form#add').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#add1').val());
    var number2 = parseInt($("#add2").val());
    var theSumOf = add(number1, number2);

    $(".hiddenAnswer").text(theSumOf);
    $("#results").show();
  });
  //user interface for subtraction
  $('form#sub').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#sub1').val());
    var number2 = parseInt($("#sub2").val());
    var theSumOf = sub(number1, number2);

    $(".hiddenAnswer").text(theSumOf);
    $("#results").show();
  });
  //user interface for multiplication
  $('form#mult').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#mult1').val());
    var number2 = parseInt($("#mult2").val());
    var theSumOf = mult(number1, number2);

    $(".hiddenAnswer").text(theSumOf);
    $("#results").show();
  });
  //user interface for division
  $('form#div').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#div1').val());
    var number2 = parseInt($("#div2").val());
    var theSumOf = divide(number1, number2);

    $(".hiddenAnswer").text(theSumOf);
    $("#results").show();
  });
});
