# FizzBuzz

This is a simple script that prints the numbers from 1 to 100, but for multiples of 3 it prints the word "Fizz" instead and for multiples of 5 it prints the word "Buzz" instead. For numbers that are multiples of both 3 and 5 it prints the word "FizzBuzz".

1. Create a loop that counts from 1 to 100 
2. Create an "output" variable that's equal to "i" by default 
3. Create an empty "word" variable  
4. Use the condition "if (i % 3 === 0)" to append "Fizz" to the "word" variable for numbers divisible by 3  
5. Use the condition "if (i % 5 === 0)" to append "Buzz" to the "word" variable for numbers divisible by 5  
6. Use a condition to change the value of "output" to "word" if "word" is not empty (meaning it's "Fizz", "Buzz", or "FizzBuzz")
7. Print the output to the console

### Bonus 1:

8. Use createElement and append() to print our output into an html element

### Bonus 2:

9. Make everything pretty with CSS. Apply different styles based on whether the output is a number, "Fizz", "Buzz", or "FizzBuzz"