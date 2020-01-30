const countUniqueValues = ((array) => {
    let existingObj = {};
    let countUnique = 0;
    //loop through the values
    array.map(el => {
        //check if it is exist on obj if not increase add to obj and increase count
        if (!existingObj[el]) {
            existingObj[el] = 1;
            countUnique++;
        }
    });
    //return the count
    return countUnique;
});

const shortCountUniqueValues = ((array) => {
    const unique = [...new Set(array)];
    return unique.length;
});

console.log(countUniqueValues([1, 1, 1, 2, 3, 5]));
console.log(shortCountUniqueValues([1, 1, 1, 2, 3, 5]));