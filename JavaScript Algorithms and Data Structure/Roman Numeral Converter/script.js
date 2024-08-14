// event listener for the button click that checks for valid input and gives a message if not
document.getElementById('convert-btn').addEventListener('click', () => {
    const input = document.getElementById('number').value;
    const outputDiv = document.getElementById('output');

    //have the class of output div be toggled hidden until the button is clicked

  

    outputDiv.classList.toggle('hidden');
    outputDiv.classList.toggle('hidden-border');
  if(input === '') {
    // if the input is empty, display a message to the user on the output div
    document.getElementById('output').innerHTML = 'Please enter a number';
  }
  else if (input < 1) {
    // If the input is less than 1, display a message to the user on the output div
    outputDiv.innerHTML = 'Please enter a number greater than or equal to 1';
} else if (input > 3999) {
    // If the input is greater than 3999, display a message to the user on the output div
    outputDiv.innerHTML = 'Please enter a number less than or equal to 3999';
}
  else{
    // if the input is valid, call the convertToRoman function and display the result on the output div
    document.getElementById('output').innerHTML = convertToRoman(Number(input));
  }
   
});
const convertToRoman = (input) => {
    // create an array of roman numeral characters
    const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // create an array of numbers that represent the values of the roman numeral characters
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // create an empty string to store the roman numeral result
    let roman = '';
    // loop through the decimal array
    for (let i = 0; i < decimal.length; i++) {
        // while the input is greater than or equal to the current decimal value
        while (input >= decimal[i]) {
        // add the roman numeral character to the result string
        roman += romanNumeral[i];
        // subtract the decimal value from the input
        input -= decimal[i];
        }
    }
    // return the result string
    return roman;
}