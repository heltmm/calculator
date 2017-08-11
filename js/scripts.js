// Business interface
var add = function(number1, number2) {
  return number1 + number2;
};

var subbtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//User interface
$(document).ready(function() {
  //user interface for addition
  $('form#calc').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#input1').val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add"){
      result = add(number1, number2)
    }else if (operator === "subtract"){
      result = subbtract(number1, number2)
    }else if (operator === "multiply"){
      result = multiply(number1, number2)
    }else if (operator === "divide"){
      result = divide(number1, number2)
    }

    $(".hiddenAnswer").text(result);
    $("#results").show();
  });
});
