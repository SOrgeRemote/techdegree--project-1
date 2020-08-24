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

let quotes = [
  number1 = {
    quote: 'There is nothing like a dream to create the future',
    source: 'Victor Hugo',
    citation: 'Les Miserables',
    year: 1862
  },

  number2 = {
    quote: 'The most wasted of all days is one without laughter',
    source: 'Nicholas Chamfort',
    year: 1769
  },

  number3 = {
    quote: 'If you cannot teach me to fly, teach me to sing.',
    source: 'Sir James Barrie',
    citation: 'Peter Pan',
    year: 1904
  },
  //need at least one quote with missing properties for if statements
  number4 = {
    quote: 'To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it.',
    source: 'Osho',
  },

  number5 = {
    quote: 'If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.',
    source: 'Albert Einstein',
    citation: 'goodreads.com',
  }
];

// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length); // quotes.length caps max random number
  // console.log(randomNumber);
  return quotes[randomNumber];
}


/***
 *`printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  console.log(randomQuote);
  let message = `
    <p class="quote"> ${randomQuote.quote} </p> // used template literal to inject javascript
    <p class="source"> ${randomQuote.source}`;

  // check if citation is truthy
  if (randomQuote.citation) {
    message += `<span class="citation"> ${randomQuote.citation} </span>` // used  += to add on to message
  }

  // check if year is truthy
  if (randomQuote.year) {
    message += `<span class="year"> ${randomQuote.year} </span>`
  }

  // finally always add </p> tag
  message += `</p>`;

  // update quote in window
  document.getElementById('quote-box').innerHTML = message;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);