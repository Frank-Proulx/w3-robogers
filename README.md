# Mr. Roboger's Neighborhood

#### By Frank Proulx

#### A website that takes a number and returns an array of numbers between 0 and the inputted number, with numbers containing 1, 2 and 3 replaced.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

This website has an animated image of a Mr. Rogers robot moving back and forth across the screen when loaded. It has an input field and asks for a number. When a number is inputted and submitted it changes the image to a static image of the Mr. Rogers robot wearing a cardigan. It displays an array of values from 0 to the number inputted (inclusive). It modifies the array such that if there is a 3 in a particular number, instead of that number it displays "Won't you be my neighbor?", if there isn't a 3 but there is a 2 it displays "Boop!", if there is neither a 3 nor a 2 but there is a 1 it displays "Beep!" instead of that number. If none of those conditions are met it displays the original number. If the user inputs a negative number they get a message to enter a positive number, if they don't enter an input they get a message to enter a number.

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* Initialize a git repository by typing **git init** in the terminal.
* Type **git clone https://github.com/Frank-Proulx/w3-robogers** to clone the repository to your local machine.
* Open the file "index.html" in the newly created "portfolio-landing" folder using either the GUI in your finder window, or typing **cd w3-robogers** and pressing return to navigate into the project folder, and then typing **open index.html** in the terminal from within the w3-robogers folder.  

## Link to [GitHub Pages](https://frank-proulx.github.io/w3-robogers/)

## Known Bugs

No known bugs

## License

[MIT](https://opensource.org/licenses/MIT)

If you have any issues, questions, ideas or concerns, please reach out to me at my email and/or make a contribution to the code via GitHub.

Copyright (c) 2021 Frank Proulx



## **Tests**

Describe: arrayMaker()  

Test: "It should take a number and return an array of numbers between 0 and the inputted number (inclusive)"  
Code: arrayMaker(27);  
Expected Output: [0, 1, 2,... 27]  

Describe: numberSplitter()  

Test: "It should take a number and turn it into an array of it's digits (one or more) and then return that array"  
Code: numberSplitter(11);  
Expected Output: [1, 1]  

Describe: numberChecker()  

Test: "It should take an array of 1 or more numbers and run a loop on that array, looking for a 3, if a 3 is found, it will return 'Won't you be my neighbor?'"  
Code: numberChecker([4, 3, 1]);  
Expected Output: "Won't you be my neighbor?"  

Test: "It should, if having determined a 3 is not present, check for a 2, and if found, return 'Boop!'"
Code: ([1, 2, 9]);  
Expected Output: "Boop!"  

Test: "It should, if having determined neither 3 nor 2 is present, check for a 1, and if found, return 'Beep!'"  
Code: ([4, 9, 1]);  
Expected Output: "Beep!"  

Test: "It should use .map() to perform the above tasks on an array of number arrays and return an array of numbers/strings"  
Code: ([9, 9], [1, 0, 0], [1, 0, 1], [1, 0, 2]);  
Expected Output: [99, "Beep!", "Beep!", "Boop!"]

Describe: robogers()

Test: "It should return an array with only a 0 if the number 0 is inputted"  
Code: robogers(0);  
Expected Output: [0]  

Test: "It should return an array with 0 and 'Beep!' if the number 1 is inputted"  
Code: robogers(1);  
Expected Output: [0, "Beep!"]  

Test: "It should return an array with 0, 'Beep!', and 'Boop!' if the number 2 is inputted"  
Code: robogers(2);  
Expected Output: [0, "Beep!", "Boop!"]  

Test: "It should return an array with 0, 'Beep!', 'Boop!', and 'Won't you be my neighbor?' if the number 3 is inputted"  
Code: robogers(3);  
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]  

Test: "It should return an array with 0 through 9 if a 9 is inputted, with 1, 2, and 3 replaced with 'Beep!', 'Boop!', and 'Won't you be my neighbor?' respectively"  
Code: robogers(9);  
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9]  

Test: "It should take a number of any value and return an array of 0 to that number, replacing any numbers with 3 with 'Won't you be my neighbor?', and numbers with 2 but not 3 with 'Boop!' and any numbers with 1 but not 2 or 3 with 'Beep!'  
Code: robogers(5);  
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]  

Test: "It should receive an array from arrayMaker() and run numberSplitter() on each number in the array to transform that number into an array of one or more elements, then run numberChecker() to transform the appropriate numbers, finally returning an array of numbers/strings based on the project specifications"  
Code: robogers(5);  
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]  