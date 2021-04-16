//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  let colorOneIndex = colorCode(color1)
  let colorTwoIndex = colorCode(color2)
  
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