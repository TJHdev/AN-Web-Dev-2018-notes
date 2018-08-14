/* 
Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const testArray = ['1',2,4,591,392,391,2,5,10,2,1,'1',1,20,20];

debugger;
const cleanYourRoom = (array) => {
  let reassignedArray = [...array]
  let sortedArray = reassignedArray.sort((a, b) => a > b ? 1 : -1);
  const newArray = [];
  const indexedValues = [];
  
  sortedArray.forEach((element) => {
    if (indexedValues.indexOf(element) !== -1) {
      return;
    }
    indexedValues.push(element);
    let groupedValues = sortedArray.filter((value) => {
      return value === element;
    });
    if (groupedValues.length < 2) {
      groupedValues = groupedValues[0];
    }
    newArray.push(groupedValues);
  });
  console.log('newArray: ', newArray);
  return newArray;
}

cleanYourRoom(testArray);
console.log('Unchanged test array: ', testArray);

/*
Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, 
give the target number. For example: answer([1,2,3], 4)should return [1,3].
*/

targetAddingArray = [1,3,16,5,2,1,7];
targetResult = 7;

const addTwoNumbers = (targetArray, result) => {
  let finalArray;
  targetArray.forEach((value, i) => {
    for(var i = i + 1; i < targetArray.length; i++) {
      if (value + targetArray[i] === result) {
        return finalArray = [value, targetArray[i]];
      }
    }

    if (finalArray) {
      return;
    }
  });
  return finalArray;
};

addTwoNumbers(targetAddingArray, targetResult);

/*
Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter 
HEX color format it returns RGB and if you enter RGB color format it returns HEX.
*/

const convertHexToRGB = (hex) => {
  hex = hex.toUpperCase().split("");
  hex.shift();
  let resultArray = [];
  const newArray = hex.map((base16) => {
    base16 = base16.charCodeAt(0);
    if (base16 < 58) {
      return base16 - 48;
    } else {
      return base16 - 55;
    }
  });

  for (var i = 0; i < newArray.length; i+= 2) {
    resultArray.push(newArray[i] * 16 + newArray[i + 1]);
  };
  resultArray = `(${resultArray.join(",")})`;
  console.log('newArray: ', newArray);
  return resultArray;
};


const convertBase10toBase16 = (hex) => {
  if (hex > 9) {
    return String.fromCharCode(hex + 55);
  } else {
    return hex;
  }
};



const convertRGBToHex = (RGB) => {
  let resultArray = [];
  let result = RGB.slice(1, -1);
  result = result.split(",");
  result.forEach((color256) => {
    color256 = Number(color256);
    let modulus = (color256 + 1) % 16;
    let firstHex = Math.floor(color256 / 16);
    let secondHex = modulus - 1 < 0 ? 15 : modulus - 1;
    firstHex = convertBase10toBase16(firstHex);
    secondHex = convertBase10toBase16(secondHex);
    resultArray = resultArray.concat([firstHex, secondHex]);
  });
  return "#" + resultArray.join("");
};



const convertHexRGB = (color) => {
  if(color[0] === '#') {
    return convertHexToRGB(color);
  } else {
    return convertRGBToHex(color);
  }
};

console.log(convertHexRGB('#FFFFFF'));
console.log(convertHexRGB('(255,255,255)'))

console.log(convertHexRGB('#F0AB99'))
console.log(convertHexRGB('(240,171,153)'))

console.log(convertHexRGB('#155115'))
console.log(convertHexRGB('(21,81,21)'))
