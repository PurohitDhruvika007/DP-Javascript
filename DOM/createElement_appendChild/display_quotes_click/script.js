const quotesList = [
  { "id": 1, "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.", "author": "Rumi" },
  { "id": 2, "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.", "author": "Abdul Kalam" },
  { "id": 3, "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.", "author": "Abdul Kalam" },
  { "id": 4, "quote": "If You Can't Make It Good, At Least Make It Look Good.", "author": "Bill Gates" },
  { "id": 5, "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.", "author": "Rumi" },
  { "id": 6, "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.", "author": "Abu Bakr (R.A)" },
  { "id": 7, "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.", "author": "Albert Einstein" },
  { "id": 8, "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.", "author": "Abu Bakr (R.A)" },
  { "id": 9, "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.", "author": "Abdul Kalam" },
  { "id": 10, "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.", "author": "Abraham Lincoln" },
  { "id": 11, "quote": "I Don't Believe In Failure. It Is Not Failure If You Enjoyed The Process.", "author": "Oprah Winfrey" },
  { "id": 12, "quote": "Do not get elated at any victory, for all such victory is subject to the will of God.", "author": "Abu Bakr (R.A)" },
  { "id": 13, "quote": "Wear gratitude like a cloak and it will feed every corner of your life.", "author": "Rumi" },
  { "id": 14, "quote": "If you even dream of beating me you'd better wake up and apologize.", "author": "Muhammad Ali" },
  { "id": 15, "quote": "I Will Praise Any Man That Will Praise Me.", "author": "William Shakespeare" },
  { "id": 16, "quote": "One Of The Greatest Diseases Is To Be Nobody To Anybody.", "author": "Mother Teresa" },
  { "id": 17, "quote": "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.", "author": "Muhammad Ali" },
  { "id": 18, "quote": "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.", "author": "Nelson Mandela" },
  { "id": 19, "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.", "author": "Rumi" },
  { "id": 20, "quote": "The less of the World, the freer you live.", "author": "Umar ibn Al-Khattāb (R.A)" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('button');
const copyBtn = document.getElementById('copyBtn');

// Typewriter effect
function typeWriter(text, element, speed = 40) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotesList.length);
  const quoteObj = quotesList[randomIndex];

  typeWriter(`"${quoteObj.quote}"`, quoteEl, 35);
  authorEl.textContent = `~ ${quoteObj.author}`;
});

// Copy to clipboard
copyBtn.addEventListener('click', () => {
  const textToCopy = `${quoteEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    copyBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
    }, 1500);
  });
});
