// module.exports.getDate = getDate;
// function getDate(){
//     const date = new Date();
//     const options = {
//         weekdays: "long",
//         month: "long",
//         year: 'numeric',
//         day: "numeric"
//     };
//     return date.toLocaleDateString("en-US",options);
// }
//OR
module.exports.getDate = function (){
    const date = new Date();
    const options = {
        weekdays: "long",
        month: "long",
        year: 'numeric',
        day: "numeric"
    };
    return date.toLocaleDateString("en-US",options);
}

module.exports.getDay = getDay;
function getDay(){
    const date = new Date();
    const options = {
        weekdays: "long"
    };
    return date.toLocaleDateString("en-US",options);
}
console.log(module.exports);