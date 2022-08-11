const express = require("express");
const app = express();
const PORT = 80;

app.use(express.json());

var data = ["red:12", "green:34", "blue:56"];
var salonIsik = "1023";

app.get("/desk/:led", (request, response) => {
    for(let i = 0; i < data.length; i++) {
        const content = data[i];
        if(content.split(":")[0] == request.params.led) {
            response.status(200).send(content.split(":")[1]);
            console.log(content.split(":")[1]);
            break;
        }
    }
});

app.get("/desk/:led/:id", (request, response) => {
    const led = request.params.led;
    const id = request.params.id;

    for(let i = 0; i < data.length; i++) {
        var content = data[i];
        if(content.split(":")[0] == request.params.led) {
            data[i] = led + ":" + id;
            console.log(id);
            response.send(id);
            break;
        }
    }
});

app.get("/salon/isik", (request, response) => {
    response.status(200).send(salonIsik);
});

app.get("/salon/isik/:id", (request, response) => {
    const id = request.params.id;

    if(id == "ac" || id == "1" || id == "1023") {
        salonIsik = "1023";
    }
    else if(id == "kapat" || id == "0") {
        salonIsik = "0";
    }

    response.status(200).send(salonIsik);
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:" + PORT)
);
