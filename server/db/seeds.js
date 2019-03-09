use game;
db.dropDatabase();

db.question.insertMany(
  [
    {
      genre: "History",
      question: "Which of these is a Greek temple?",
      answer: "Pantheon",
      hint: "Ancient Greek architechture features columns."
    },
    {
      genre: "Mathematics",
      question: "Paul has 7 boxes of 14 balls. He lost 6 balls. How many balls does he have now?",
      answer: 92,
      hint: "7 x 14 = 98. Now subtract 6!"
    },
    {
      genre: "Science",
      auestion: "What is the temperature at which water boils?",
      answer: 100,
      hint: "0 Celsius is the temperature at which water freezes. 5600 Celsius is the temperature of the Sun."
    }
  ]
);