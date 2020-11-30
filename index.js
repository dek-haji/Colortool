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
const convertHexToRGB = (hex) => {
    if (!isValidHex(hex)) return null;

    let strippedHex = hex.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] +
            strippedHex[1] + strippedHex[1] +
            strippedHex[2] + strippedHex[2];
    }
   const r  = parseInt(strippedHex.substring(0,2), 16);
  const g  = parseInt(strippedHex.substring(2,4), 16);
  const b   = parseInt(strippedHex.substring(4,6), 16);
  return {r,g,b}
}
//slice method
//toString
const convertRGBToHex = (r, g, b) => {
    const firstPair = ("0" + r.toString(16)).slice(-2);
    const secondPair = ("0" + g.toString(16)).slice(-2);
    const thirdPair = ("0" + b.toString(16)).slice(-2);
    const hex = "#" + firstPair + secondPair + thirdPair;
    return hex;
}

//get a reference to the slider and sliderText DOM elements
const sliderText = document.getElementById("sliderText")
const slider = document.getElementById("slider");
//create an input event listener
// Iused .textcontent to manipulate the dom value
slider.addEventListener("input", () => {
    console.log(slider.value);
    sliderText.textContent = `${slider.value}%`;
})
//display the value of the slider 


console.log(convertRGBToHex(0,255,255));
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
