//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorList) => {
  let colorOneIndex = colorCode(colorList[0])
  let colorTwoIndex = colorCode(colorList[1])
  
  let result = (colorOneIndex * 10) + colorTwoIndex

  return result
};

const colorCode = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];