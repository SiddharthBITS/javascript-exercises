const getAge = function(birth, death)
{
    if(!death)
    {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(people) 
{
    return people.reduce((oldest, person) => 
    {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const age = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge < age ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
