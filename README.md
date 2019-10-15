# Node_js-MySQL

This "app" is an Amazon-like storefront.  Utilizing MySQL the app will take in orders from customers and deplete stock from the store's inventory

Utilizing command line from terminal, is how the user will access the app:
    "node bamazonCustomer.js"

Upon entering the command, the first line retured will confirm that your connected and the ID# for the connection to the database.

The following table will be furnished:
        1 | Puma | Clothing | 100 | 200

        2 | SmartPhone | Electronics | 1000 | 1000

        3 | Harry_Potter | Literature | 30 | 500

        4 | Flatscreen | Electronics | 399.99 | 200

        5 | crockpot | Cooking | 199.99 | 250


Note the table column headings are the following:
    - item_id (unique id for each product)
    - product_name (Name of product)
    - department_name
    - price (cost to customer)
    - stock_quantity (how much of the product is available in stores)

At the bottom of the table, also returned after entering the node command, will be the following query:
    _ which product would you like to purchase; choose by ID 1..5]

Upon furnisha an appropriate response there will be another query
    _ how many would you like to buy?

If the product is available at the appropriate quantity as specified by the user, a confirmation of the purchase is made and the inventory will be decremented in the appropriate amount.


            connected as id 64
            1 | Puma | Clothing | 100 | 200 <----------

            2 | SmartPhone | Electronics | 1000 | 1000

            3 | Harry_Potter | Literature | 30 | 500

            4 | Flatscreen | Electronics | 399.99 | 200

            5 | crockpot | Cooking | 199.99 | 250

            -----------------------------------

            ? which product would you like to purchase; choose by ID 1..5]
            1 <---------- 1 | Puma | Clothing | 100 | 200 
            
            
            ? how many would you like to buy?
            5   <---------- (200-5)
            

            -----------------------------------

            Table Updated after Purchase
            1 | Puma | Clothing | 100 | 195 <---------- (200-5)

            2 | SmartPhone | Electronics | 1000 | 1000

            3 | Harry_Potter | Literature | 30 | 500

            4 | Flatscreen | Electronics | 399.99 | 200

            5 | crockpot | Cooking | 199.99 | 250



<!-- ![Image description](link-to-image) -->

![mysqldbTable](Node_js-MySQL/images/mysqldb_Screen Shot 2019-10-13 at 11.34.32 PM.png)

![terminalScreenShot_Not_Working](Node_js-MySQL/images/Terminal_Screen Shot 2019-10-14 at 1.25.44 AM.png)

![mysqldbTable_Updated_Working](Node_js-MySQL/images/SQL_WorkingScreen Shot 2019-10-14 at 10.03.22 PM.png)

![terminalScreenShot_Working](Node_js-MySQL/images/CLI_FINALScreen Shot 2019-09-08 at 9.38.22 PM.png)


App recap:

The app will prompt users with two messages.

    1) Make a product selection by ID
    2) Advise of quantity to be purchased.

Once order placed, inventory check performed for fulfillment.

If unable to fulfill, message advising unable to fulfill rendered, and the order does not go through.

However, if fulfillment is possible, order fulfilled.

SQL database updated to reflect transaction i.e. adjustment to remaining quantity.

Once the update goes through, show the customer the total cost of their purchase.