//find the amplitude in an array of temperatures
//Amplitude = max - min

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 95];

let maxTemp = temps[0];
let minTemp = temps[0];

function calcAmplitude(temps) {
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > maxTemp) {
      maxTemp = curTemp;
    }

    if (curTemp < minTemp) {
      minTemp = curTemp;
    }
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
}

console.log(calcAmplitude(temps));

//merge two arrays together

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array = array1.concat(array2);
console.log(array);
