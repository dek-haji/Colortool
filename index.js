const isValidHex = (hex) => {
    if (!hex) return false;
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}
console.log(isValidHex("#00000"));
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if (!isValidHex(hex)) return;

    const strippedHex = hex.replace('#', '');

    inputColor.style.backgroundColor = "#" + strippedHex;
})
//Create a function to convert Hex to RGB
const convertHexToRGB = () => {
    if (!hex) return false;
}
//this should work with 3 or 6 character hex values
//Hint - useParseInt(16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases






// const hexColor = (hex) => {
//     if (hex.includes([0 - 9] || ["a", "b", "c", "d", "e", "f"]))
//     return true;
//     else {
//         return false;
//     };
// }
// console.log(hexColor(123))
