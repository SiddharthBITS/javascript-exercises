const palindromes = function (string) 
{
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = string
    .toLowerCase()
    .split('')
    .filter(charac => alphanumerical.includes(charac))
    .join('');

    let start = 0;
    let end = cleanString.length - 1;

    while(start <= end)
    {
        if(cleanString[start] !== cleanString[end])
        {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;