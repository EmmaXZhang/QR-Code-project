

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
    messsage:"Type your URL:",
    //"URL" is the object name
    name:"URL"
  },
])
  .then((answers) => {
    // 1. Use the inquirer npm package to get user input.
    const url = answers.URL;
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });


  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
 
    }
  });