const fibonacci = function(val) 
{
    let at;
    if(typeof val !== 'number')
    {
        at = parseInt(val);
    }
    else
    {
        at = val;
    }
    if(at < 0)
    {
        return 'OOPS';
    }
    if(at == 0 || at == 1)
    {
        return at;
    }
    let minus2 = 0;
    let minus1 = 1;
    let fibo = 0;
    for(let i = 2; i <= at; i++)
    {
        fibo = minus1 + minus2;
        minus2 = minus1;
        minus1 = fibo;
    }
    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
