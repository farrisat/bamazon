# Bamazon

### Purpose
#Bamazon is an app will take in orders from customers and deplete stock from the store's inventory.

### Organization
Linear-flow program that has nested then clauses to handle user input. 

### Overview
1. Ensure that the npm packages "inquirer" and "mysql" are installed. 
2. Initialize the app in Bash by the command "node bamazonCustomer.js"
    ![Image of Node input]
    (⁨bootcamp⁩/Week7⁩/Homework⁩/bamazon⁩/images⁩/1.png)
 
    The app will automatically list all items available to "purchase" and their associated department, price, and available quantity. 

3. The initial menu will prompt, "Do you want to buy an item?" 
    There are two options for responding:
    a) Yes 
    b) Quit

    'Quit' will exit you out of the program. If 'Yes' is selected, PRESS ENTER and proceed to Step 4.

4. The menu will prompt, "What is the item's id?"
    If the desired item in the available list, input it's associated item_id's value. 
    I.e. If buying "your seasonal hipster basil plant to kill off", input the integer 10 into the CLI and PRESS ENTER.

5. The desired item's associated information is called up again. 
    The menu will prompt "How many?"
    Input the integer of the desired quantity and PRESS ENTER.

6. There are two resulting conditions:
    a) If the quantity requested is greater than the available stock quantity, the app will respond with "That's not possible" and return to the initial menu. 

    b) If the quantity requested is available,  the app will congratulate you on your choices. It will give the total cost of the purchase, and then republish the initial menu.

Link to the github repository
https://github.com/farrisat/bamazon.git


### Technologies Used
The npm packages used in this app were:
    - MySql
    - Inquirer


Implemented code per the instructions.