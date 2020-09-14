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

const quotes = [
  {
    quote: 'Nothing vast enter the life of mortals without a curse.',
    source: 'Sophocles'
  },
  {
    quote: "There are only two industries that call thier customers 'users': illegal drugs and software.",
    source: 'Edward Tufte'
  },
  {
    quote: 'Any Sufficiently advanced technology is indistinguishable from magic.',
    source: 'Arthur C. Clarke'
  },
  {
    quote: 'Optimism is the faith that leads to achievement.',
    source: 'Helen Keller'
  },
  {
    quote: 'Art, freedom and creativity will change society faster than politics.',
    source: 'Victor Pinchuk'
  },
  {
    quote: 'You can do anything but not everything',
    source: 'David Allen'
  },
  {
    quote: 'Make it so!',
    source: 'Captain Jean Luc Picard',
    citation: 'Star Trek: The Next Generation'
  },
  {
    quote: 'Humility is no substitute for a good personality.',
    source: 'Fran Leibowitz',
    citation: 'Metropolitan Life',
    year: '1978'
  },
  {
    quote: 'You have your moments. Not many of them, but you do have them.',
    source: 'Princess Leia',
    citation: 'The Empire Strikes Back',
    year: '1980'
  }
]

/***
 * `getRandomQuote` function
***/

/**
 * Returns a random quote from quotes array using randomNum.
 * 
 * @param {number} array - The array of quotes.
 * @return {string} randomQuote - The random Quote.
 */

function getRandomQuote(array) {
  const randomNum = Math.floor(Math.random() * array.length);
  const randomQuote = array[randomNum];
  return randomQuote;
}

console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/
/**
 * Returns full HTML string displaying a random quote.
 * 
 */

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let displayString = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    displayString += `<span class="citation">${randomQuote.citation}</span>`;
  }  
  if (randomQuote.year){
    displayString += `<span class="year">${randomQuote.year}</span>`;
  }
  displayString += `</p>`
  return displayString;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);