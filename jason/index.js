import fs from "fs";
const bioData = {
  name: "jason",
  age: 20,
  life: ["programming", "reading", "coding"],
};

const jasonData = JSON.stringify(bioData);
fs.writeFile("jason1.json", jasonData, (err) => {
  console.log("Done");
});

fs.readFile("jason1.json",'utf-8', (err, data) => {
    console.log(JSON.parse(data));
    });