const repeatString = function(s, num) 
{
    if(num < 0)
    {
        return 'ERROR';
    }
    var st = '';
    for(var i = 0; i < num; i++)
    {
        st += s;
    }
    return st;
};

// Do not edit below this line
module.exports = repeatString;
