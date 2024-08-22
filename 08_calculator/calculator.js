const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	var sum = 0;
  array.forEach((item) =>
  {
    sum += item;
  });
  return sum;
};

const multiply = function(array) 
{
  var sum = 1;
  array.forEach((item) =>
  {
    sum *= item;
  });
  return sum;
};

const power = function(a,b) 
{
	return Math.pow(a,b);
};

const factorial = function(num) 
{
  if(num <= 1)
  {
    return 1;
  }
	var fact = 1;
  for(var i = 2; i <= num; i++)
  {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
