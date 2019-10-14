var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "TESTPASSWORD",
  database: "b_amazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
   showTable();
});

var showTable = function(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity+ "\n");
        }
        console.log("-----------------------------------");
      askforID();  
      });
    }

var askforID = function(res){
    inquirer.prompt([{
      type: 'input',
      name: 'choice',
      message:  "which product would you like to purchase; choose by ID 1..5]" + "\n"
    }]).then(function(answer){
      var correct = false;
      for (var i = 0; i < res.length; i++){
        if(res[i].item_id==answer.choice){
          correct=true;
          var idSelection= answer.choice;
          var item_id  = i;
          // Quantity query
          inquirer.prompt({
            type:'input',
            name:'quantity',
            message:  'how many would you like to buy?' + "\n",
            validate: function(value) {
              if (isNaN(value) === false) {
                return true;
              }
              return false;
            }    

          }).then(function(answer){
            if((res[i].stock_quantity.answer.quantity)>0){
              connection.query("Updated product stock count= '" + (res[item_id].stock_quantity.answer.quantity)+ "'where id='" + idSelection + "'", function(err,res2){
                console.log("Product ID of Purchase");
                showTable();
              })
              
            }else{
              console.log("Not a valid choice");
              askforID(res);  
            }
          })
        }
      }
    })
}
