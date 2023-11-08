'use strict';

const numbers = document.getElementById('numbers');

// 1. Create a loop that counts from 1 to 100 

for (let i = 1; i <= 100; i++) {

    // Bonus 1: 8. Use createElement and append() to print our output into an html element
    const numberBox = document.createElement('div');
    numberBox.classList.add('number-box');

    // 2. Create an "output" variable that's equal to "i" by default
    let output = i;

    // 3. Create an empty "word" variable  
    let word = '';

    // 4. Use the condition "if (i % 3 === 0)" to append "Fizz" to the "word" variable for numbers divisible by 3  
    if (i % 3 === 0) word += 'Fizz';

    // 5. Use the condition "if (i % 5 === 0)" to append "Buzz" to the "word" variable for numbers divisible by 5  
    if (i % 5 === 0) word += 'Buzz';
    
    // 6. Use a condition to change the value of "output" to "word" if "word" is not empty (meaning it's "Fizz", "Buzz", or "FizzBuzz") 
    if (word !== '') {
        output = word;
    }

    // 7. Print the output to the console
    console.log(output);

    numberBox.append(output);
    numbers.append (numberBox);
  }
  