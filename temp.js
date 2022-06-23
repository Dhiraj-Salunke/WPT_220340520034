const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'latur',
	port:3306
});

const mysql = require('mysql2');
JSON.stringify(result);

const express = require('express');
const app = express();

app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

var result;
app.get('/read',(req,res) =>{
	
	const {bookid} =req.body
	const statement ='select *from book wherebookid = ?'
	
	connection.query={statement, [bookid]:(error,res)=>{
		
		if(error)
		{
			res.send(error);
		}
		else
		{
			res.send(res);
		}
	}}
		
});


app.post('/read', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });







app.listen(8081, function () {
    console.log("server listening at port 8081...");
});