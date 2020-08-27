/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//added additional tag 
let quotes = [
  number1 = {
    quote: 'There is nothing like a dream to create the future',
    source: 'Victor Hugo',
    citation: 'Les Miserables',
    year: 1862,
    genre: 'motivation'
  },

  number2 = {
    quote: 'The most wasted of all days is one without laughter',
    source: 'Nicholas Chamfort',
    citation: null,
    year: 1769,
    genre: 'wisdom'
  },

  number3 = {
    quote: 'If you cannot teach me to fly, teach me to sing.',
    source: 'Sir James Barrie',
    citation: 'Peter Pan',
    year: 1904,
    genre: 'playbook'
  },
  //null value because I need at least one quote with missing properties for my if statements
  number4 = {
    quote: 'To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it.',
    source: 'Osho',
    citation: null,
    year: null,
    genre: 'life'
  },

  number5 = {
    quote: 'If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.',
    source: 'Albert Einstein',
    citation: '<a href="https://www.goodreads.com/author/show/9810.Albert_Einstein" target=_blank" Goodreads <a>', //wanted to take reader to external source
    year: null,
    genre: 'music'
  }
];

// console.log(quotes);

/***
 * `getRandomQuote` function
***/
//created the getRandomQuote function
function getRandomQuote() { 
  // quotes.length caps max random number
  const randomNumber = Math.floor(Math.random() * quotes.length); 
  // console.log(randomNumber); Testing functionality 
  return quotes[randomNumber]; 
  // will be calling function in my printQuote function
};

//created array of colors I want my function  iterate through
const colors = ['pink', 'purple', 'yellow', 'blue', 'green', 'red', 'black']; //created array

//setting starting color to violet. Project instructions said do not modify HTML or CSS
document.body.style.backgroundColor = 'violet'; 


//created backgroundRandomColor  function that will iterate through my colors array
function backgroundRandomColor() {
  const colorIndex = Math.floor(Math.random() * colors.length + 1); //used previous 
  document.body.style.backgroundColor = colors[colorIndex];
};

/***
 *`printQuote` function
***/
//Created printQuote function
function printQuote() {
  const randomQuote = getRandomQuote();
  console.log(randomQuote);
  // used template literal to inject javascript
  let message = `
    <p class="quote"> ${randomQuote.quote} </p> 
    <p class="source"> ${randomQuote.source}
    `;

  // checking to see if citation is truthy
  if (randomQuote.citation) {
    message += `<span class="citation"> ${randomQuote.citation} </span>` // used  += to add on to message
  }

  // checking if year is truthy
  if (randomQuote.year) {
    message += `<span class="year"> ${randomQuote.year} </span>`
  }

   if (randomQuote.genre) {
    message += `<span class="year"> ${randomQuote.genre} </span>`

  }
  // finally always add </p> tag
  message += `</p>`;
  
    // update quote in window
  document.getElementById('quote-box').innerHTML = message;

  //called my 
  backgroundRandomColor();
};

setInterval(printQuote,5000);
 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);