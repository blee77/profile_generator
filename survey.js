const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let responseValue = "";
let responseArray = [];

rl.question("What's your name? Nicknames are also acceptable :) ? ", (answer) => {
  responseArray.push(`My name is ${answer}`);
  rl.question("What's an activity you like doing? ", (answer) => {
    responseArray.push(`I like ${answer}`);
    rl.question("What do you listen to while doing that? ", (answer) =>{
      responseArray.push(`I listen to ${answer}`);
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ? ", (answer) =>{
        responseArray.push(` My favorite meal is ${answer}`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) =>{
          responseArray.push(` My favorite thing to eat is ${answer}`);
          rl.question("Which sport is your absolute favourite? ", (answer) =>{
            responseArray.push(` My favorite sport is ${answer}`);
            rl.question("WWhat is your superpower? In a few words, tell us what you are amazing at! ", (answer) =>{
              responseArray.push(` My favorite superpower is ${answer}`);
              console.log(responseArray);
              rl.close();
            });
          });
        });
      });
    });
  });
});

