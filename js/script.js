/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Schitts Creek `quotes` array
  quotes
  source or character
  year the season was released
  season
  citation or episode
***/
const quotes = [
  {
    quote:"Like Beyoncé, I excel as a solo artist.",
    source:"David",
    year:2018,
    season:4,
    citation:"Girls Night",
  },
  {
    quote:"I'm trying very hard not to connect with people right now.",
    source:"David",
    year:2015,
    season:1,
    citation:"The Drip",
  },
  {
    quote:"Stop doing that with your face.",
    source:"Alexis",
    year:2016,
    season:2,
    citation:"The Candidate",
  },
  {
    quote:"I don't skate through life, David. I walk through life, in really nice shoes.",
    source:"Alexis",
    year:2017,
    season:3,
    citation:"Driving Test",
  },
  {
    quote:"I'm positively bedeviled with meetings et cetera.",
    source:"Moira",
    year:2018,
    season:4,
    citation:"Dead Guy in Room 4",
  },
  {
    quote:"I would be pleased to RSVP as pending.",
    source:"Moira",
    year:2017,
    season:3,
    citation:"Murder Mystery",
  },
  {
    quote:"I never heard someone say so many wrong things, one after the other, consecutively, in a row.",
    source:"David",
    year:2018,
    season:4,
    citation:"Girls' Night",
  },
  {
    quote:"We can talk about this anytime you'd like. Preferably not before 10am, because I'm not really a morning person.",
    source:"David",
    year:2017,
    season:3,
    citation:"Grad Night",
  },
  {
    quote:"David, stop acting like a disgruntled pelican.",
    source:"Moira",
    year:2017,
    season:3,
    citation:"Opening Night",
  },
  {
    quote:"Tweet us on Facebook!",
    source:"Johnny",
    year:2017,
    season:3,
    citation:"Motel Review",
  },
  {
    quote:"It's almost dark and my son is afraid of moths",
    source:"Johnny",
    season:1,
    citation:"Our Cup Runneth Over",
  },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);   //random number variable produces a number between 0 and quotes length
    return quotes[randomNumber];
  }

/***
 * `printQuote` function
 You will program the printQuote function to perform three tasks:
 1.call the getRandomQuote function,
 2.use the returned quote object to build a string of HTML and quote properties,
 3.then use that string to display a random quote in the browser.
***/
function printQuote () {
  let randomQuoteObject = getRandomQuote()
  let htmlString = `<p class="quote"> ${randomQuoteObject.quote}</p>
<p class="source"> ${randomQuoteObject.source} Rose.`


;
console.log (htmlString);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);
