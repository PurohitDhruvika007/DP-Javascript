const data = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Saturn", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1950"],
    answer: "1945",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Avocado", "Tomato", "Cucumber", "Pepper"],
    answer: "Avocado",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["1", "2", "3", "0"],
    answer: "2",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["India", "South Africa", "Australia", "Brazil"],
    answer: "Australia",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au",
  },
];

const answer=[
  "Paris",
  "Mars",
  "William Shakespeare",
  "Blue Whale",
  "1945",
  "Avocado",
  "2",
  "Carbon Dioxide",
  "Australia",
  "Au"
];

const question=document.querySelector('#question');
const options=document.querySelectorAll('.option');
const input=document.querySelectorAll('.form-check-input');
const submit=document.querySelector('#submit');
let current=0;

function check(index)
{
    question.textContent="Q"+(index+1)+" "+data[index].question;
    options.forEach((options,i)=>{
        options.textContent=data[index].options[i];
    });
}
check(current);
submit.addEventListener('click',()=>{
    current+=1;
    if(current<data.length)
    {
        check(current);
    }
    else
    {
        current=0;
        check(current);
    }
    
});

