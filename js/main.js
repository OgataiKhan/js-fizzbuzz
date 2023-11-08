'use strict';

// 1. Create a loop that counts from 1 to 100 

for (let i = 1; i <= 100; i++) {
    // 2. Create an empty "word" variable  
    let word = '';

    // 3. Use the condition "if (i % 3 === 0)" to append "Fizz" to the "word" variable for numbers divisible by 3  
    if (i % 3 === 0) word += 'Fizz';

    // 4. Use the condition "if (i % 5 === 0)" to append "Buzz" to the "word" variable for numbers divisible by 5  
    if (i % 5 === 0) word += 'Buzz';
    
    // 5. Use a condition to output "i" if "word" is empty (meaning the number isn't divisibe by 3 or 5) and "word" in all other cases, which will result in "Fizz", "Buzz", or "FizzBuzz"
    if (word === '') {
      console.log(i);
    } else {
      console.log(word);
    }
  }
  