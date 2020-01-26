function Truthy(array) {
    if (!array || typeof array !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return array.filter((value) => {
        return value;
    });
}
console.log(Truthy(["hello", "hey", "", false]));