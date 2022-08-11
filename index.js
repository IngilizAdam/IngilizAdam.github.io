const app = require("express")();
const PORT = 80;

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
