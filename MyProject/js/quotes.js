const quotes =[
    {
        quote:"Life is a foreign language; all men mispronounce it.",
        author:"Christopher Morley",
    },
    {
        quote:"Life's a voyage that's homeward bound.",
        author:"Herman Melville",
    },
    {
        quote:"Life is a long lesson in humility.",
        author:"James M. Barrie",
    },
    {
        quote:"Life is an unbroken succession of false situations.",
        author:"Thornton Wilder",
    },
    {
        quote:"A man's character is his fate.",
        author:"Heraclitus",
    },
    {
        quote:"The purpose of life is to fight maturity.",
        author:"Dick Werthimer",
    },
    {
        quote:"Life is either a daring adventure or nothing.",
        author:"Helen Keller",
    },
    {
        quote:"There is more to life than increasing its speed.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"A man has to have a code, a way of life to live by.",
        author:"John Wayne",
    },
    {
        quote:"He not busy being born is busy dying.",
        author:"Bob Dylan",
    }
];

const quote = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;