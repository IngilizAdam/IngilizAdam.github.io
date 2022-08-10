const app = require("express")();
const PORT = 8080;

app.get("/tshirt", (request, response) => {
    response.status(200).send({
        tshirt: "black",
        size: "large"
    });
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:" + PORT)
);
