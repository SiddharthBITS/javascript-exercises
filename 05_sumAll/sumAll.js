const sumAll = function(a , b) 
{
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
    {
        return 'ERROR';
    }
    var sum = 0;
    for(var i = Math.min(a,b); i <= Math.max(a,b); i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
