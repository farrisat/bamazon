var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function(err, res){
        console.log(res);
        askUserQuestions();
    });
    connection.commit();
  });


  function askUserQuestions(){
     
      inquirer.prompt({
          type:"list",
          name:"thingToDo",
          choices:["YES","QUIT"],
          message:"Do you want to buy an item?"
      }).then(function(answers){
        if(answers.thingToDo==="YES"){
            inquirer.prompt({
                type:"number",
                name:"ID",
                message: "What is the item's id?"
            }).then(function(answers) {
                connection.query("SELECT * FROM products WHERE item_id = ?", [answers.ID], function(err, res) {
                    if (err) throw err;
                    console.log(res);
                        inquirer.prompt({
                            type: "number",
                            name:"stock_quantity",
                            message: "How many?"
                        }).then(function(answers){
                            if (answers.stock_quantity > res[0].stock_quantity) {
                                console.log("That's not possible");
                                askUserQuestions();
                            }

                            else {
                                let totalCost = res[0].price*answers.stock_quantity;
                                console.log("Good choice on spending your wages");
                                connection.query(
                                    "UPDATE products SET ? WHERE ?",
                                    [
                                      {
                                        stock_quantity: answers.stock_quantity
                                      },
                                      {
                                        item_id: res[0].item_id
                                      }
                                    ],
                                    function(err, res) {
                                      if (err) throw err;
                                    console.log("The total cost is $"+totalCost);
                                    askUserQuestions();
                                    }

                                )
                            }

                        


                        } )
                
        });})
        }else {
            connection.end();
        }
      })
  }

