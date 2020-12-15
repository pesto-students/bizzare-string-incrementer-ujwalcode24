// Start your implementation here
let str = "f99oo0099";

function stringCheck(str, i) {
  if (/^\d+$/.test(str[i])) {
    return "number";
  } else {
    return "string";
  }
}

function getOnlyNumbersAtEnd(str) {
  if (isNaN(str[str.length - 1])) {
    return null;
  } else {
    let startPointer = str.length - 1;
    while (stringCheck(str, startPointer) !== "string") {
      startPointer = startPointer - 1;
    }

    const stringToIncrement = str.slice(startPointer + 1, str.length);
    return stringToIncrement;
  }
}

function getString(str) {
  if (isNaN(str)) {
    let startPointer = str.length - 1;

    while (stringCheck(str, startPointer) !== "string") {
      startPointer = startPointer - 1;
    }

    const InitalString = str.slice(0, startPointer + 1);
    return InitalString;
  } else {
    return "";
  }
}

function bizarreStringIncrementer(str) {
  const InitialString = getString(str);
  const getNumber = getOnlyNumbersAtEnd(str);
  let prefixZero = "";
  if (getNumber !== null) {
    for (let i = 0; i < getNumber.length; i++) {
      if (getNumber[i] === "0") {
        prefixZero += "0";
      } else {
        break;
      }
    }

    let intNumber = parseInt(getNumber);
    let finalNumber = (intNumber + 1).toString();

    if (intNumber.toString().length < finalNumber.length) {
      prefixZero = prefixZero.slice(0, -1);
    }
    console.log(prefixZero);
    return InitialString + prefixZero + finalNumber;
  }
  return InitialString + "1";
}

const res = bizarreStringIncrementer(str);
console.log(res);
