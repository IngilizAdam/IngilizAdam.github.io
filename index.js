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

    if(!logo){
        response.status(418).send({message: "We need a logo!"});
    }

    response.send({tshirt: "a with your " + logo + " and ID of " + id});
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:" + PORT)
);
