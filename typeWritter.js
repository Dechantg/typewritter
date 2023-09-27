

// create function to printing the sentence string

const typeWritter = (sentance) => {

// set a timer to incement up each loop  
let timer = 0;

// create a loop for of the sentence
for (const char of sentence) {
  // set a timeout of timer with the process of printing the character
  setTimeout(() => {
    process.stdout.write(char);
  }, (timer));
  // increase the timer before repeating loop to make sure there is an increased delay in the setTimeout each time
  timer += 50;

}

};

  




const sentence = "hello there from lighthouse labs\n";
typeWritter(sentence);

