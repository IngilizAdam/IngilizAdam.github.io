const express = require("express");
const app = express();
const PORT = 80;

app.use(express.json());

app.get("/tshirt", (request, response) => {
    response.status(200).send({
        tshirt: "black",
        size: "large"
    });
});

app.post("/tshirt/:id", (request, response) => {
    const {id} = request.params;
    const {logo} = request.body;

    var fs = require('fs');
    fs.writeFile("test.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });

    response.send({tshirt: "a with your " + logo + " and ID of " + id});
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:" + PORT)
);
