/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 Schitts Creek `quotes` array
  quotes: string of what character said
  source: string of name of character speaking
  year: number of the year the season was released
  season: number of the season
  citation: string of episode name
***/
const quotes = [
  {
    quote: "Like Beyoncé, I excel as a solo artist.",
    source: "David",
    year: 2018,
    season: 4,
  },
  {
    quote: "I'm trying very hard not to connect with people right now.",
    source: "David",
    year: 2015,
    season: 1,
    citation: "The Drip",
  },
  {
    quote: "Stop doing that with your face.",
    source: "Alexis",
    year: 2016,
    season: 2,
  },
  {
    quote:
      "I don't skate through life, David. I walk through life, in really nice shoes.",
    source: "Alexis",
    year: 2017,
    season: 3,
    citation: "Driving Test",
  },
  {
    quote: "I'm positively bedeviled with meetings et cetera.",
    source: "Moira",
  },
  {
    quote: "I would be pleased to RSVP as pending.",
    source: "Moira",
    year: 2017,
    season: 3,
    citation: "Murder Mystery",
  },
  {
    quote:
      "I never heard someone say so many wrong things, one after the other, consecutively, in a row.",
    source: "David",
    year: 2018,
    season: 4,
    citation: "Girls' Night",
  },
  {
    quote:
      "We can talk about this anytime you'd like. Preferably not before 10am, because I'm not really a morning person.",
    source: "David",
    season: 3,
    citation: "Grad Night",
  },
  {
    quote: "David, stop acting like a disgruntled pelican.",
    source: "Moira",
    year: 2017,
    season: 3,
    citation: "Opening Night",
  },
  {
    quote: "Tweet us on Facebook!",
    source: "Johnny",
    year: 2017,
    season: 3,
    citation: "Motel Review",
  },
  {
    quote: "It's almost dark and my son is afraid of moths",
    source: "Johnny",
    season: 1,
    citation: "Our Cup Runneth Over",
  },
];

//variables
let repeatNumberArray = []; //stores randomNumber returns to check for repetition
let randomQuoteObject; //stores return from the getRandomQuote function
let htmlString = ""; //stores string assembled by the printQuote function
const button = document.getElementById("load-quote");
let timerId = 0;

/***
 * `getRandomQuote` function: uses a random number generating function to pull a random quote object.
 checks for repetition: quotes will repeat at most at a frequency of quotes.length-2.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length); //random number variable produces a number between 0 and quotes length
  /***the first if statement checks to see if the randomNumber has been recently called (already in repeatNumberArray)
  and adds the number to the repeatNumberArray if the array contains fewer than the quotes.length-2 which allows
  for some variation rather than setting an initial random order and then recalling that random order. It returns the
  quote object indexed by the randomNumber.
  ***/
  if (
    !repeatNumberArray.includes(randomNumber) &&
    repeatNumberArray.length < quotes.length - 2
  ) {
    repeatNumberArray.push(randomNumber);
    return quotes[randomNumber];
    /***the second if statement checks to see if the randomNumber has been recently called (already in repeatNumberArray)
    and now that the array contains quotes.length-2, it removes the oldest randomNumber and
    adds the newst randomNumber to the repeatNumberArray. It returns the quote object indexed by the randomNumber.
    ***/
  } else if (
    !repeatNumberArray.includes(randomNumber) &&
    repeatNumberArray.length >= quotes.length - 2
  ) {
    repeatNumberArray.shift();
    repeatNumberArray.push(randomNumber);
    return quotes[randomNumber];
    /***this else is for when the boolean returned by the includes function is true, or when the randomNumber
      already exists in the array. It returns the string "oops" which can be used by the printQuote function to rerun
      the getRandomQuote function until a nonrepeating number is produced.
      ***/
  } else {
    return "oops";
  }
}
/***
`printQuote` function calls the getRandomQuote function and runs it again if it doesn't pull a nonrepeating quote
 confirms if the quote selected has a season, citation, and year. concatinates the properties from the selected quote
 into an htmlString and writes them onto the page.
***/
function printQuote() {
  resetTimer();
  //do while function calls the getRandomQuote again if it selects a repeating quote
  do {
    randomQuoteObject = getRandomQuote();
  } while (randomQuoteObject === "oops");
  //confirms that season & citation exist in the quote property
  htmlString = `<p class="quote"> ${randomQuoteObject.quote}</p>
<p class="source"> ${randomQuoteObject.source} Rose`;
  if (randomQuoteObject.season && randomQuoteObject.citation) {
    htmlString += `<span class= "citation">Season ${randomQuoteObject.season}: "${randomQuoteObject.citation}"</span>`;
  } else if (randomQuoteObject.season && !randomQuoteObject.citation) {
    htmlString += `<span class= "citation">Season ${randomQuoteObject.season}</span>`;
  } else if (!randomQuoteObject.season && randomQuoteObject.citation) {
    htmlString += `<span class= "citation">"${randomQuoteObject.citation}"</span>`;
  }

  //confirms that year exists in the quote property
  if (randomQuoteObject.year) {
    htmlString += `<span> ${randomQuoteObject.year}.</span>`;
  }
  //closes p tag
  htmlString += `</p>`;
  //displays the htmlString on the page
  document.getElementById("quote-box").innerHTML = htmlString;
  //random jewel-tone background color
  const randomColor = () => Math.floor(Math.random() * 100);
  function randomRGB(value) {
    const color = `rgb(${value()}, ${value()}, ${value()})`;
    return color;
  }
  document.body.style.backgroundColor = randomRGB(randomColor);
  timerId = setInterval(function () {
    button.click();
  }, 3000);
}

//formating
// changing titles to the TV Show
document.querySelector("h1").innerHTML = "Schitt's Creek Quotes";
document.querySelector("title").innerHTML = "Schitt's Creek Quotes";

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
function resetTimer() {
  clearInterval(timerId);
}
button.addEventListener("click", printQuote, false);
