"use strict";

const power = (num, up) => {
    if (up === 0) return 1;
    return num * power(num, up - 1)
};

console.log(
    power(2, 0)
);