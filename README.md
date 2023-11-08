# FizzBuzz

This is a simple script that prints the numbers from 1 to 100, but for multiples of 3 it prints the word "Fizz" instead and for multiples of 5 it prints the word "Buzz" instead. For numbers that are multiples of both 3 and 5 it prints the word "FizzBuzz".

1. Create a loop that counts from 1 to 100  
2. Create an empty "word" variable  
3. Use the condition "if (i % 3 === 0)" to append "Fizz" to the "word" variable for numbers divisible by 3  
4. Use the condition "if (i % 5 === 0)" to append "Buzz" to the "word" variable for numbers divisible by 5  
5. Use a condition to output "i" if "word" is empty (meaning the number isn't divisibe by 3 or 5) and "word" in all other cases, which will result in "Fizz", "Buzz", or "FizzBuzz"

Bonus 1:

6. Use createElement and append() to print our output into an html element

Bonus 2:

7. Make everything pretty with CSS. Apply different styles based on whether the output is a number, "Fizz", "Buzz", or "FizzBuzz"