var express = require("express");

var app = express();

app.get("/getDemo", (req, res, next) => {
 res.json(
 	{
 		success: true, 
 		data: [
 			{
 				name: "Hiren Dave",
 				designation: "Programmer"
 			}
 		]
 	});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});