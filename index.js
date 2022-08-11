const express = require("express");
const app = express();
//const fs = require("fs");
const PORT = 80;

app.use(express.json());

var data = ["red:12", "green:34", "blue:56"];

app.get("/desk/:led", (request, response) => {
    /*const contents = fs.readFileSync("test.txt", "utf-8").split("\n");
    for(let i = 0; i < contents.length; i++) {
        const content = contents[i];
        if(content.split(":")[0] == request.params.led) {
            response.status(200).send(content.split(":")[1]);
            console.log(content.split(":")[1]);
            break;
        }
    }*/
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
    console.log(request.params);
    
    /*var text = "";
    const contents = fs.readFileSync("test.txt", "utf-8").trim().split("\n");
    for(let i = 0; i < contents.length; i++) {
        var content = contents[i];
        if(content.split(":")[0] == request.params.led) {
            content = led + ":" + id;
        }
        text += content + "\n";
    }

    fs.writeFile('test.txt', text, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });*/

    for(let i = 0; i < data.length; i++) {
        var content = data[i];
        if(content.split(":")[0] == request.params.led) {
            data[i] = led + ":" + id;
            break;
        }
    }

    response.send(id);
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:" + PORT)
);
