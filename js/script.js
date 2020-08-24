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
    citation: 'goodreads.com',
    year: 1769
  },

  number3 = {
    quote: 'If you cannot teach me to fly, teach me to sing.',
    source: 'Sir James Barrie',
    citation: 'Peter Pan',
    year: 1904
  },

  number4 = {
    quote: 'To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it.',
    source: 'Osho',
  },

  number5 = {
    quote: 'If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.',
    source: 'Albert Einstein',
    citation: 'goodreads.com',
    year: 1929
  }
];

// console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
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
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}`;
    
    if (randomQuote.citation) {
      message += `<span class="citation"> ${randomQuote.citation} </span>`
    }

    if (randomQuote.year) {
      message += `<span class="year"> ${randomQuote.year} </span>`
    }
    message += `</p>`;
  document.getElementById('quote-box').innerHTML = message; 
}












/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);