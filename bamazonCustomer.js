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
        // if (err) throw err;
        // address price presentation on screen (2) decimal places...look up javascript, string
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity+ "\n");
        }
        console.log("-----------------------------------");
      askforID(res);  
      });
    }

var askforID = function(res){
    inquirer.prompt({
      type: 'input',
      name: 'choice',
      message:  "which product would you like to purchase; choose by ID 1..5]" + "[type exit to leave program]" + "\n"
    }).then(function(answer){
      if (answer.choice === "exit"){
        console.log("Bye");
      //google find command to exit
        return
      }
      var correct = false;
      for (var i = 0; i < res.length; i++){
        if(res[i].item_id==answer.choice){
          correct=true;
          var idSelection= answer.choice;
          var id  = i;
          // Quantity query
          inquirer.prompt({
            type:'input',
            name:'quantity',
            message:  'how many would you like to buy?' + "\n",
            validate: function(value) {
              if (isNaN(value) == false) {
                return true;
              } else{
                  return false;
              }  
            }    

          }).then(function(answer){
            if((res[id].stock_quantity-answer.quantity)>0){
              connection.query("UPDATE products SET stock_quantity= " + (res[id].stock_quantity-answer.quantity) + " where item_id=" + idSelection, function(err,res2){
                
                if(err){console.log(err)
              } else { console.log("success") 
              showTable();
            };

              
                
                // console.log("Table Updated after Purchase");
               
              })
              
            }else{
              console.log("Not a valid choice");
              askforID(res);  
            }
          })
        }
        if(i==res.length && correct==false){
          console.log("Not Valid");
          askforID(res);
      }  
      }
    })
}
