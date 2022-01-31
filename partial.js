// Step 1
// Take the json file as an argument
const args = process.argv.slice(2);
const fs = require('fs');


// Step 2
// Parse the document string

fs.readFile(args[0], 'utf-8', (err, jsonString) => {
    const parsedString = JSON.parse(jsonString); // parse is currently a black box.... 
    console.log(parsedString);
})

// Step 3
// Break down the and organize the parsed object
//     - What are they observations of?
//          - what are the objects? What data type are they?
//     - What other information is there?
//     - Is some of the information nested? Extract that information as well.
//          - are there arrays with multiple entries?
//     - Store this information is a type of table of database so that we can use it more easily
//          - does javascript have a dataframe?


// Step 4
// Convert the information to html formatted on the page
//     - Use an html table 
//     - depending on how data is stored, uses a loop or something to help us quickly populate table

/* <table>
    <tr>
        <th> <!-- insert column name(s) -->
        </th>

    </tr>
    <tr>
        <th> <!-- insert first observation -->
        </th>
    </tr>
    <! -- create some sort of loop to autopopulate this information -->
</table> */


// Step 5
// Display/output the table on the page

//  This step might also be done in conjuction with step 4