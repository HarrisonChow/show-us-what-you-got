import Logger from './helpers/logger';
import helloBossHog from './helpers/hello-boss-hog';
let logger = new Logger();

//Your code should go here instead of the welcome message below. Create and modify additional files as necessary.

const welcomeMessage = "Congrats, you're up and running! Welcome to the first moshtix code challenge! " +
    "Please replace this message with your solution and feel free to add " +
    "or modify other files as necessary. Good luck : )";

logger.log(welcomeMessage);

let something = function() {
  for(var i=0; i<=100; i++){
    console.log(helloBossHog(i));
  }
}
