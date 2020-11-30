const isValidHex = (hex) => {
    if (!hex) return false;
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}
console.log(isValidHex("#00000"));
const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor");

hexInput.addEventListener("keyup", (event) => {
    const hex = hexInput.value
    if (!isValidHex(hex)) return;
    inputColor.style.backgroundColor = hex;
})







// const hexColor = (hex) => {
//     if (hex.includes([0 - 9] || ["a", "b", "c", "d", "e", "f"]))
//     return true;
//     else {
//         return false;
//     };
// }
// console.log(hexColor(123))
