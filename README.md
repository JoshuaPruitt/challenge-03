# challenge-03 (Employee tracker)

## Introduction
Welcome to my challenge 03 site. This site was made to complete the 3rd week challenge for the coding bootcamp. Its an employee tracker made to help track employees, first name, last name, and salary.

## Usage
To use this site simply open the page. This automatically prompts the user for a full name and salary of an employee. After the prompt it will then ask if you would like to make another employee. This loops untill cancel is selected. Then the employees that were logged will be displayed in a list on the screen. If you want to add more employees you can hit the add employees button and start the loop again. 

Within the console there is an salary average calculator (which takes in all the employees salarys and recieves an average), as well as a random employee selector (which selects a random employee and gives them a reward).

## Code Snippit
This is a piece of code from the script. This is what creates the employees. Whenever the function is ran it will prompt the user for employee data. Split the first name and last name and push them to seperate categorys within an array. Then it prompts the user for the employee salary, which is then pushed into the array as well. It then asks if the user wishes to create another employee. If the answer was yes then the while loop keeps running untill the user selects cancel. Then it returns the information it created. 

````
const collectEmployees = function () {
  let row = document.createElement("tr")
  
  
  while (redo == true){
    // prompt for the users name
    let person = prompt("Please enter your first and last name!");

    //take name and split to be a first name and a last name. Push the 
    const fullname = person.split(" ", 2);
    employee.firstName.push(fullname[0]);
    employee.lastName.push(fullname[1]);

    //prompt user for salary
    let salaryP = prompt("Please enter your salary.");
    // let convSal = parseInt(salary)
    employee.salary.push(parseInt(salaryP));

    //add 1 to emplength
    empLength++

    redo = confirm("Would you like to log another employee?")

  }

  // reset redo so that the loop can run again when the button is pressed again.
  redo = true;

  // return the data from employee Data 
  return employee
};
````

## Credits

- Joshua pruitt (me), I created all of the new code. Functionallity for the website works because I added it. 

- Coding bootcamp team, the base javascript for displaying employees, the css styling, and the html file were all provided by them.

## Technologies Used 

- Visual Studio Code, for writting code, debuging, and loging changes to the git repository.
- Google Chrome, for displaying the page and debugging said page using the console. 
- GitBash, for logging my changes and uploading my data.
- GitHub, for putting the page on the web and for providing cloud storage for storing the site and its changes.

