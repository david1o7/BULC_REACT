// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "geography",
    questions: [
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which country has the largest population in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "United States", "South Africa", "New Zealand"],
        correctAnswer: 0,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0,
      },
      {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Denmark"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        correctAnswer: 2,
      },
      {
        question: "Which river flows through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
        correctAnswer: 2,
      },
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most time zones?",
        options: ["United States", "Russia", "Canada", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Germany", "Italy", "Spain", "France"],
        correctAnswer: 3,
      },
      {
        question: "Which is the most populous city in the world?",
        options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain range is located in South America?",
        options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
        correctAnswer: 3,
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
        correctAnswer: 2,
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Italy"],
        correctAnswer: 1,
      },
      {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
        correctAnswer: 1,
      },
      {
        question: "Which ocean is located to the east of Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which is the second largest continent by area?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "mathematics",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "trivia",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
    ],
  },

  {
    "category": "html",
    "questions": [
        {
            "question": "Which HTML element is used to declare metadata that is not visually displayed on the page?",
            "options": ["<meta>", "<data>", "<info>", "<head>"],
            "correctAnswer": 0
        },
        {
            "question": "In HTML5, which attribute of the <script> tag ensures the script executes only after the document has fully loaded?",
            "options": ["async", "defer", "load", "delay"],
            "correctAnswer": 1
        },
        {
            "question": "Which HTML element is used for rendering mathematical expressions?",
            "options": ["<math>", "<mexp>", "<formula>", "<equation>"],
            "correctAnswer": 0
        },
        {
            "question": "Which attribute in an HTML form input field is used for client-side validation to ensure the user enters a value?",
            "options": ["validate", "required", "check", "notnull"],
            "correctAnswer": 1
        },
        {
            "question": "What is the default display property of a <span> element?",
            "options": ["block", "inline-block", "flex", "inline"],
            "correctAnswer": 3
        },
        {
            "question": "Which HTML element is used to group related options within a <select> dropdown?",
            "options": ["<option>", "<optgroup>", "<fieldset>", "<legend>"],
            "correctAnswer": 1
        },
        {
            "question": "Which HTML5 API allows storing data in the user's browser for offline access?",
            "options": ["SessionStorage", "LocalStorage", "IndexedDB", "WebStorage"],
            "correctAnswer": 2
        },
        {
            "question": "Which HTML attribute specifies that an input field should auto-focus when the page loads?",
            "options": ["autofocus", "focus", "default", "start"],
            "correctAnswer": 0
        },
        {
            "question": "Which HTML tag is used for defining embedded SVG graphics?",
            "options": ["<vector>", "<svg>", "<graphics>", "<draw>"],
            "correctAnswer": 1
        },
        {
            "question": "Which HTML element is used for indicating computer code within a webpage?",
            "options": ["<pre>", "<code>", "<kbd>", "<cmd>"],
            "correctAnswer": 1
        },
        {
            "question": "What is the purpose of the HTML5 <mark> element?",
            "options": ["Defines highlighted text", "Creates a bookmark link", "Marks important sections", "Displays text in bold"],
            "correctAnswer": 0
        },
        {
            "question": "Which HTML attribute specifies whether an input field should autocomplete values?",
            "options": ["autocomplete", "autofill", "autosuggest", "fill"],
            "correctAnswer": 0
        },
        {
            "question": "Which HTML tag is used to embed an external CSS file into a document?",
            "options": ["<css>", "<link>", "<style>", "<import>"],
            "correctAnswer": 1
        },
        {
            "question": "Which attribute of the <iframe> element prevents the embedded page from accessing the parent document?",
            "options": ["sandbox", "secure", "isolate", "restrict"],
            "correctAnswer": 0
        },
        {
            "question": "Which HTML event attribute is triggered when an element's content is copied to the clipboard?",
            "options": ["oncopy", "oncut", "onpaste", "onsave"],
            "correctAnswer": 0
        }
    ]
  },

  {
    "category": "css",
    "questions": [
        {
            "question": "Which CSS property is used to control the stacking order of elements?",
            "options": ["order", "position", "z-index", "layer"],
            "correctAnswer": 2
        },
        {
            "question": "What does the 'contain' property in CSS do?",
            "options": ["Controls element visibility", "Prevents layout shifts in an element", "Defines scroll containment", "Restricts rendering outside the element"],
            "correctAnswer": 3
        },
        {
            "question": "Which CSS pseudo-class selects the first element of its type within a parent?",
            "options": [":first-child", ":nth-of-type(1)", ":first-of-type", ":only-child"],
            "correctAnswer": 2
        },
        {
            "question": "What is the difference between relative and absolute positioning in CSS?",
            "options": ["Relative moves an element based on itself, absolute positions it relative to its nearest positioned ancestor", "Absolute positions an element relative to the viewport, relative ignores parent elements", "Both behave the same", "Relative moves the element to the left, absolute moves it to the right"],
            "correctAnswer": 0
        },
        {
            "question": "Which CSS property allows an element to be automatically scaled while maintaining its aspect ratio?",
            "options": ["transform", "object-fit", "resize", "scale-ratio"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS feature allows you to define reusable variables?",
            "options": ["@variables", "CSS functions", "Custom properties (CSS variables)", "inheritance rules"],
            "correctAnswer": 2
        },
        {
            "question": "What does the 'will-change' property do in CSS?",
            "options": ["Prevents elements from being changed", "Optimizes performance by hinting at upcoming changes", "Allows animations on hover", "Modifies z-index dynamically"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS function allows complex calculations within styles?",
            "options": ["math()", "calc()", "compute()", "formula()"],
            "correctAnswer": 1
        },
        {
            "question": "What is the default position value in CSS?",
            "options": ["relative", "absolute", "static", "fixed"],
            "correctAnswer": 2
        },
        {
            "question": "Which CSS property enables creating a smooth scroll experience?",
            "options": ["scroll-behavior", "scroll-action", "smooth-scroll", "scrolling-mode"],
            "correctAnswer": 0
        },
        {
            "question": "What is the difference between the 'vw' and 'vh' units in CSS?",
            "options": ["vw is viewport width, vh is viewport height", "vh is viewport width, vw is viewport height", "They are the same", "vw refers to vertical scrolling only"],
            "correctAnswer": 0
        },
        {
            "question": "What happens when you set 'display: flex' on a parent element?",
            "options": ["Children are placed in a grid", "Children align in a horizontal row by default", "All elements disappear", "The parent becomes invisible"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS property is used to control the transparency of an element?",
            "options": ["opacity", "visibility", "alpha", "filter"],
            "correctAnswer": 0
        },
        {
            "question": "Which CSS function allows for custom cubic-bezier transitions?",
            "options": ["ease()", "transition()", "cubic-bezier()", "animate()"],
            "correctAnswer": 2
        },
        {
            "question": "Which CSS property is used to clip an element to a specific shape?",
            "options": ["mask", "clip-path", "crop", "outline"],
            "correctAnswer": 1
        },
        
        // Easy CSS Questions
        {
            "question": "Which CSS property is used to change text color?",
            "options": ["font-color", "text-style", "color", "background"],
            "correctAnswer": 2
        },
        {
            "question": "Which CSS unit is relative to the size of the parent element?",
            "options": ["px", "em", "vh", "vw"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS property changes the background color of an element?",
            "options": ["background", "bg-color", "background-color", "fill"],
            "correctAnswer": 2
        },
        {
            "question": "Which CSS property makes text bold?",
            "options": ["font-weight", "text-bold", "bold", "strong"],
            "correctAnswer": 0
        },
        {
            "question": "Which CSS property is used to change font size?",
            "options": ["text-size", "font-style", "font-size", "size"],
            "correctAnswer": 2
        },
        {
            "question": "Which CSS property controls the spacing between lines?",
            "options": ["letter-spacing", "line-height", "spacing", "text-gap"],
            "correctAnswer": 1
        },
        {
            "question": "Which property is used to add space inside an element?",
            "options": ["margin", "padding", "gap", "border"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS selector targets all elements in a document?",
            "options": ["*", "body", "html", "all"],
            "correctAnswer": 0
        },
        {
            "question": "Which CSS property controls the space outside an element?",
            "options": ["padding", "margin", "border", "outline"],
            "correctAnswer": 1
        },
        {
            "question": "Which property is used to hide an element but keep its space?",
            "options": ["opacity", "display: none", "visibility: hidden", "hidden"],
            "correctAnswer": 2
        }
    ]
  },

  {
    "category": "frontend",
    "questions": [
        {
            "question": "What does HTML stand for?",
            "options": ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink Text Management Language"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS property is used to change text color?",
            "options": ["font-color", "text-style", "color", "background"],
            "correctAnswer": 2
        },
        {
            "question": "Which HTML element is used to create a hyperlink?",
            "options": ["<link>", "<href>", "<a>", "<hyperlink>"],
            "correctAnswer": 2
        },
        {
            "question": "What is JavaScript used for in web development?",
            "options": ["Styling web pages", "Adding interactivity to web pages", "Creating database connections", "Defining HTML structure"],
            "correctAnswer": 1
        },
        {
            "question": "Which HTTP method is used to send data to the server?",
            "options": ["GET", "POST", "DELETE", "UPDATE"],
            "correctAnswer": 1
        },
        {
            "question": "Which programming language is used for styling web pages?",
            "options": ["JavaScript", "HTML", "CSS", "Python"],
            "correctAnswer": 2
        },
        {
            "question": "What does the `<title>` tag in HTML do?",
            "options": ["Defines the page heading", "Defines the page footer", "Sets the webpage title in the browser tab", "Adds a tooltip to the page"],
            "correctAnswer": 2
        },
        {
            "question": "Which HTML element is used for creating a numbered list?",
            "options": ["<list>", "<ol>", "<ul>", "<li>"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS property is used to add space inside an element?",
            "options": ["margin", "padding", "gap", "border"],
            "correctAnswer": 1
        },
        {
            "question": "Which HTML tag is used to insert an image?",
            "options": ["<img>", "<image>", "<picture>", "<photo>"],
            "correctAnswer": 0
        },
        
        // Advanced Questions (15 Remaining)
        {
            "question": "Which HTTP header prevents clickjacking attacks?",
            "options": ["X-Frame-Options", "Strict-Transport-Security", "Content-Security-Policy", "X-XSS-Protection"],
            "correctAnswer": 0
        },
        {
            "question": "What is the purpose of the Event Loop in JavaScript?",
            "options": ["It handles synchronous function execution", "It enables asynchronous operations by managing the execution stack", "It stores variables in heap memory", "It prevents race conditions in multi-threaded applications"],
            "correctAnswer": 1
        },
        {
            "question": "Which Web API allows a service worker to cache resources for offline use?",
            "options": ["Cache API", "Storage API", "LocalStorage", "SessionStorage"],
            "correctAnswer": 0
        },
        {
            "question": "What is the key advantage of using WebSockets over HTTP?",
            "options": ["WebSockets use encryption by default", "WebSockets maintain a persistent connection for real-time communication", "WebSockets are faster than HTTP in all cases", "WebSockets handle only GET and POST requests"],
            "correctAnswer": 1
        },
        {
            "question": "Which design pattern is commonly used for handling global application state in frontend frameworks?",
            "options": ["Singleton", "Observer", "Factory", "Redux-style State Management"],
            "correctAnswer": 3
        },
        {
            "question": "Which browser feature enables rendering of web pages in a separate memory process for security?",
            "options": ["Site Isolation", "WebAssembly", "Shadow DOM", "Content Security Policy"],
            "correctAnswer": 0
        },
        {
            "question": "What is the primary function of WebAssembly in modern web development?",
            "options": ["To replace JavaScript", "To execute high-performance, compiled code in the browser", "To improve database queries", "To enable AI computations in the frontend"],
            "correctAnswer": 1
        },
        {
            "question": "Which caching strategy ensures that the latest version of an asset is fetched while keeping older versions available?",
            "options": ["Cache First", "Stale-While-Revalidate", "Network First", "Lazy Loading"],
            "correctAnswer": 1
        },
        {
            "question": "Which CSS technique is used to efficiently render a complex web page layout without excessive DOM manipulations?",
            "options": ["CSS Grid", "Flexbox", "CSS Regions", "Contain Property"],
            "correctAnswer": 0
        },
        {
            "question": "What is the primary benefit of using HTTP/3 over HTTP/2?",
            "options": ["It replaces TCP with QUIC for faster and more reliable connections", "It increases server response time by 50%", "It reduces bandwidth consumption", "It supports only JSON requests"],
            "correctAnswer": 0
        },
        {
            "question": "Which JavaScript feature enables lazy loading of modules?",
            "options": ["setTimeout()", "Dynamic Imports using `import()`", "Promise.resolve()", "Web Workers"],
            "correctAnswer": 1
        },
        {
            "question": "Which protocol enables encrypted and authenticated communication between a web browser and a server?",
            "options": ["HTTPS", "HTTP/2", "WebRTC", "SOAP"],
            "correctAnswer": 0
        },
        {
            "question": "What does Content Security Policy (CSP) do in a web application?",
            "options": ["Prevents unauthorized database queries", "Mitigates XSS attacks by restricting script execution sources", "Enhances server response time", "Boosts SEO rankings"],
            "correctAnswer": 1
        },
        {
            "question": "Which JavaScript feature prevents unintended variable hoisting?",
            "options": ["use strict", "Hoisting Prevention API", "Scopes and Closures", "Event Bubbling"],
            "correctAnswer": 0
        }
    ]
  },

  {
    "category": "java",
    "questions": [
        // Very Difficult Java Questions (Senior Level)
        {
            "question": "Which Java feature allows multiple threads to safely modify shared data concurrently?",
            "options": ["volatile keyword", "synchronized block", "CopyOnWriteArrayList", "ThreadLocal"],
            "correctAnswer": 2
        },
        {
            "question": "What is the primary purpose of the Fork/Join framework in Java?",
            "options": ["To manage I/O operations", "To divide large tasks into smaller subtasks and process them in parallel", "To optimize database queries", "To control memory allocation"],
            "correctAnswer": 1
        },
        {
            "question": "Which garbage collection algorithm in Java uses region-based memory management?",
            "options": ["G1 Garbage Collector", "Serial GC", "Parallel GC", "Z Garbage Collector"],
            "correctAnswer": 0
        },
        {
            "question": "What is the purpose of the Java Memory Model (JMM)?",
            "options": ["To improve performance of graphical applications", "To define how threads interact through shared memory", "To regulate heap allocation", "To enhance Java security features"],
            "correctAnswer": 1
        },
        {
            "question": "Which Java interface is designed for handling large streams of data in a lazy and functional manner?",
            "options": ["Spliterator", "Stream", "Collector", "LambdaProcessor"],
            "correctAnswer": 1
        },
        {
            "question": "Which technique ensures an object remains immutable in Java?",
            "options": ["Using final variables only", "Removing setter methods and using defensive copies", "Using volatile keyword", "Declaring the class as static"],
            "correctAnswer": 1
        },
        {
            "question": "What does the CompletableFuture class in Java provide?",
            "options": ["Efficient recursion", "Asynchronous programming with non-blocking calls", "Enhanced object serialization", "Thread-safe global state management"],
            "correctAnswer": 1
        },
        {
            "question": "Which Java construct is used to implement a lock-free thread-safe queue?",
            "options": ["PriorityQueue", "ConcurrentLinkedQueue", "BlockingQueue", "ArrayDeque"],
            "correctAnswer": 1
        },
        {
            "question": "What is the role of a 'volatile' variable in Java concurrency?",
            "options": ["To prevent accidental overwriting of memory", "To ensure visibility of changes to variables across threads", "To optimize CPU usage", "To store immutable objects"],
            "correctAnswer": 1
        },
        {
            "question": "Which Java framework is built for reactive programming with event-driven architecture?",
            "options": ["Spring WebFlux", "JPA", "Struts", "Hibernate"],
            "correctAnswer": 0
        },
        {
            "question": "What is the main difference between shallow copy and deep copy in Java?",
            "options": ["Shallow copy duplicates primitive values only, while deep copy also clones object references", "Shallow copy is faster than deep copy", "Deep copy is only applicable to collections", "Shallow copy is used only for performance optimizations"],
            "correctAnswer": 0
        },
        {
            "question": "Which Java method is used to optimize string performance by interning duplicate string literals?",
            "options": ["concat()", "stringPool()", "intern()", "optimize()"],
            "correctAnswer": 2
        },
        {
            "question": "What does the term 'ClassLoader Delegation Model' refer to in Java?",
            "options": ["A mechanism that ensures classes are loaded in a hierarchical order starting from the parent class loader", "A method for managing serialization", "A way to enforce Singleton patterns in classes", "A technique for controlling memory allocation"],
            "correctAnswer": 0
        },
        {
            "question": "Which Java concurrency class provides atomic operations for variables?",
            "options": ["ThreadLocal", "ReentrantLock", "AtomicInteger", "ExecutorService"],
            "correctAnswer": 2
        },
        {
            "question": "Which Java design pattern is best suited for controlling object instantiation in a multi-threaded environment?",
            "options": ["Factory Pattern", "Singleton Pattern with double-checked locking", "Builder Pattern", "Prototype Pattern"],
            "correctAnswer": 1
        },

        // Easy Java Questions
        {
            "question": "Which keyword is used to declare a class in Java?",
            "options": ["class", "public", "struct", "define"],
            "correctAnswer": 0
        },
        {
            "question": "What is the entry point of a Java program?",
            "options": ["main()", "start()", "execute()", "run()"],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used for addition in Java?",
            "options": ["+", "-", "*", "/"],
            "correctAnswer": 0
        },
        {
            "question": "Which Java data type is used to store whole numbers?",
            "options": ["float", "String", "int", "boolean"],
            "correctAnswer": 2
        },
        {
            "question": "Which keyword is used to define a method in Java?",
            "options": ["function", "method", "void", "return"],
            "correctAnswer": 2
        },
        {
            "question": "What does 'println()' do in Java?",
            "options": ["Prints text on the console with a newline", "Defines a function", "Declares a variable", "Saves data to a file"],
            "correctAnswer": 0
        },
        {
            "question": "Which symbol is used to represent comments in Java?",
            "options": ["//", "/* */", "#", "--"],
            "correctAnswer": 0
        },
        {
            "question": "Which loop structure is used to repeatedly execute a block of code?",
            "options": ["if", "switch", "for", "case"],
            "correctAnswer": 2
        },
        {
            "question": "Which Java keyword is used to create a new object?",
            "options": ["new", "object", "create", "init"],
            "correctAnswer": 0
        },
        {
            "question": "Which Java package is automatically imported in every Java program?",
            "options": ["java.util", "java.lang", "java.io", "java.math"],
            "correctAnswer": 1
        }
    ]
  },

  {
    "category": "python",
    "questions": [
        // Very Difficult Python Questions (Senior Level)
        {
            "question": "Which Python feature allows multiple coroutines to run concurrently using event loops?",
            "options": ["Threading", "Multiprocessing", "Asyncio", "Subprocess"],
            "correctAnswer": 2
        },
        {
            "question": "What is the main advantage of using Python's `__slots__` attribute in a class?",
            "options": ["Allows dynamic attribute creation", "Reduces memory usage by preventing dynamic dictionary creation", "Improves object serialization performance", "Allows private variables"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python module is used for implementing caching mechanisms efficiently?",
            "options": ["CacheControl", "functools.lru_cache", "pickle", "multiprocessing.Manager"],
            "correctAnswer": 1
        },
        {
            "question": "Which method is used to serialize and save Python objects to disk?",
            "options": ["json.dumps()", "pickle.dump()", "marshal.save()", "os.write()"],
            "correctAnswer": 1
        },
        {
            "question": "What is the purpose of the Python Global Interpreter Lock (GIL)?",
            "options": ["To speed up multi-threaded execution", "To prevent multiple threads from executing bytecode simultaneously", "To enhance memory allocation", "To improve multiprocessing performance"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python decorator is used to convert a method into a static method?",
            "options": ["@classmethod", "@staticmethod", "@property", "@abstractmethod"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python feature enables lazy evaluation of sequences?",
            "options": ["Iterators", "Closures", "Generators", "Lambda functions"],
            "correctAnswer": 2
        },
        {
            "question": "What is the purpose of the `__new__` method in Python classes?",
            "options": ["To initialize class attributes", "To modify instance attributes", "To control instance creation before `__init__` is called", "To enforce access control"],
            "correctAnswer": 2
        },
        {
            "question": "Which Python module provides precise control over floating-point arithmetic?",
            "options": ["math", "decimal", "fractions", "numpy"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python feature supports function composition by transforming one function into another?",
            "options": ["Currying", "Memoization", "Decorators", "Introspection"],
            "correctAnswer": 2
        },
        {
            "question": "Which Python framework or library is primarily used for building asynchronous web applications?",
            "options": ["Django", "Flask", "FastAPI", "Pyramid"],
            "correctAnswer": 2
        },
        {
            "question": "What is the primary advantage of using Python's `multiprocessing` module over `threading`?",
            "options": ["Better I/O handling", "Improved concurrency with the Global Interpreter Lock (GIL)", "True parallelism by spawning separate processes", "Reduced memory usage"],
            "correctAnswer": 2
        },
        {
            "question": "What does the `__call__` method do when defined in a Python class?",
            "options": ["Allows an instance to behave like a function", "Creates a private method", "Optimizes object creation", "Restricts attribute modification"],
            "correctAnswer": 0
        },
        {
            "question": "Which method in Python's built-in `unittest` module is used to define setup logic before each test?",
            "options": ["setUp()", "tearDown()", "beforeTest()", "initTest()"],
            "correctAnswer": 0
        },
        {
            "question": "Which Python library is most suitable for high-performance numerical computing and vectorized operations?",
            "options": ["Pandas", "NumPy", "Scipy", "TensorFlow"],
            "correctAnswer": 1
        },

        // Easy Python Questions
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": ["func", "def", "lambda", "function"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python data type is used to store textual data?",
            "options": ["int", "string", "float", "bool"],
            "correctAnswer": 1
        },
        {
            "question": "How do you print 'Hello, World!' in Python?",
            "options": ["echo 'Hello, World!'", "print('Hello, World!')", "console.log('Hello, World!')", "write('Hello, World!')"],
            "correctAnswer": 1
        },
        {
            "question": "Which operator is used for multiplication in Python?",
            "options": ["+", "-", "*", "/"],
            "correctAnswer": 2
        },
        {
            "question": "Which data type is used to store True or False values?",
            "options": ["int", "bool", "char", "string"],
            "correctAnswer": 1
        },
        {
            "question": "How do you start a loop that executes a block of code repeatedly in Python?",
            "options": ["while", "for", "repeat", "loop"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python function is used to get the length of a list?",
            "options": ["size()", "count()", "len()", "length()"],
            "correctAnswer": 2
        },
        {
            "question": "Which method is used to add an item to the end of a Python list?",
            "options": ["push()", "append()", "insert()", "add()"],
            "correctAnswer": 1
        },
        {
            "question": "What will `type(5.0)` return in Python?",
            "options": ["int", "float", "str", "bool"],
            "correctAnswer": 1
        },
        {
            "question": "Which Python keyword is used to create a conditional statement?",
            "options": ["when", "if", "switch", "case"],
            "correctAnswer": 1
        }
    ]
  },

  {
    "category": "javascript",
    "questions": [
        // Easy JavaScript Questions
        {
            "question": "Which keyword is used to declare a variable in JavaScript?",
            "options": ["var", "let", "const", "All of the above"],
            "correctAnswer": 3
        },
        {
            "question": "What is the correct way to write an arrow function in JavaScript?",
            "options": ["function() => {}", "() => {}", "=> () {}", "arrow function() {}"],
            "correctAnswer": 1
        },
        {
            "question": "Which JavaScript method is used to remove the last element from an array?",
            "options": ["pop()", "push()", "shift()", "splice()"],
            "correctAnswer": 0
        },
        {
            "question": "Which data type is used to store multiple values in JavaScript?",
            "options": ["Array", "Object", "String", "Boolean"],
            "correctAnswer": 0
        },
        {
            "question": "How do you display data in the browser console?",
            "options": ["print()", "console.log()", "display()", "write()"],
            "correctAnswer": 1
        },
        {
            "question": "Which symbol is used to access properties of an object?",
            "options": [".", ":", "#", "@@"],
            "correctAnswer": 0
        },
        {
            "question": "How do you write a comment in JavaScript?",
            "options": ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "* This is a comment *"],
            "correctAnswer": 1
        },
        {
            "question": "Which JavaScript function is used to convert a string to an integer?",
            "options": ["parseInt()", "parseFloat()", "toInteger()", "toNumber()"],
            "correctAnswer": 0
        },
        {
            "question": "Which loop is used to iterate over array elements?",
            "options": ["for loop", "while loop", "do-while loop", "All of the above"],
            "correctAnswer": 3
        },
        {
            "question": "What does the `typeof` operator return?",
            "options": ["The type of a variable", "The size of a variable", "The value of a variable", "The memory address of a variable"],
            "correctAnswer": 0
        },

        // Very Difficult JavaScript Questions (Senior Level)
        {
            "question": "What is the purpose of JavaScript closures?",
            "options": ["To secure private variables in a function scope", "To improve execution speed", "To allow multiple inheritance", "To enable asynchronous operations"],
            "correctAnswer": 0
        },
        {
            "question": "What is the primary difference between `null` and `undefined` in JavaScript?",
            "options": ["null is an intentional absence of value, undefined means a variable hasn't been assigned a value", "null is the same as undefined", "undefined is an intentional absence of value", "There is no difference"],
            "correctAnswer": 0
        },
        {
            "question": "Which JavaScript feature enables lazy evaluation of functions?",
            "options": ["Generators", "Closures", "Promises", "Callbacks"],
            "correctAnswer": 0
        },
        {
            "question": "What is the purpose of the Event Loop in JavaScript?",
            "options": ["To handle asynchronous operations in the browser", "To optimize memory allocation", "To manage inheritance", "To create custom events"],
            "correctAnswer": 0
        },
        {
            "question": "Which method allows deep cloning of JavaScript objects?",
            "options": ["Object.assign()", "JSON.parse(JSON.stringify())", "cloneObject()", "Object.clone()"],
            "correctAnswer": 1
        },
        {
            "question": "What does the `async` keyword do when used with a function?",
            "options": ["Turns a function into a Promise", "Makes a function run in a separate thread", "Blocks execution until resolved", "Triggers an automatic retry mechanism"],
            "correctAnswer": 0
        },
        {
            "question": "Which technique is used to optimize performance of large-scale JavaScript applications?",
            "options": ["Memoization", "Polling", "Callbacks", "Recompilation"],
            "correctAnswer": 0
        },
        {
            "question": "What is the purpose of JavaScript Proxies?",
            "options": ["To intercept and redefine operations on objects", "To optimize execution speed", "To enable multi-threading", "To create immutable objects"],
            "correctAnswer": 0
        },
        {
            "question": "Which JavaScript feature allows dynamic property access on objects?",
            "options": ["Computed properties", "Static typing", "Function overloading", "Type inference"],
            "correctAnswer": 0
        },
        {
            "question": "Which method is best for handling multiple asynchronous tasks efficiently?",
            "options": ["Promise.all()", "async/await", "setTimeout()", "Event delegation"],
            "correctAnswer": 0
        },
        {
            "question": "What does JavaScript's `Symbol` type primarily enable?",
            "options": ["Unique property keys", "Improved memory efficiency", "Faster computations", "Automatic type conversion"],
            "correctAnswer": 0
        },
        {
            "question": "Which JavaScript feature allows functions to be composed dynamically?",
            "options": ["Currying", "Memoization", "Decorator pattern", "Closures"],
            "correctAnswer": 0
        },
        {
            "question": "What is the difference between shallow copy and deep copy?",
            "options": ["Shallow copy only copies references, deep copy duplicates the entire structure", "They are the same", "Deep copy is faster", "Shallow copy copies everything including nested objects"],
            "correctAnswer": 0
        },
        {
            "question": "Which ECMAScript feature introduced private class fields?",
            "options": ["ES6", "ES2020", "ES2018", "ES2015"],
            "correctAnswer": 1
        },
        {
            "question": "Which JavaScript function allows dynamic module imports?",
            "options": ["import()", "require()", "fetchModule()", "loadModule()"],
            "correctAnswer": 0
        }
    ]
  },

  {
    "category": "C",
    "questions": [
        // Easy C Questions
        {
            "question": "Which keyword is used to define a constant variable in C?",
            "options": ["const", "define", "static", "final"],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct syntax for printing 'Hello, World!' in C?",
            "options": ["print('Hello, World!');", "printf('Hello, World!');", "console.log('Hello, World!');", "System.out.println('Hello, World!');"],
            "correctAnswer": 1
        },
        {
            "question": "Which format specifier is used to print an integer in C?",
            "options": ["%d", "%f", "%c", "%s"],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used for logical AND in C?",
            "options": ["&&", "||", "&", "|"],
            "correctAnswer": 0
        },
        {
            "question": "Which function is used to get user input in C?",
            "options": ["gets()", "scanf()", "read()", "input()"],
            "correctAnswer": 1
        },
        {
            "question": "How do you declare an array of 10 integers in C?",
            "options": ["int arr(10);", "array<int> arr[10];", "int arr[10];", "int[10] arr;"],
            "correctAnswer": 2
        },
        {
            "question": "Which symbol is used to dereference a pointer in C?",
            "options": ["*", "&", "@", "#"],
            "correctAnswer": 0
        },
        {
            "question": "What does the `sizeof` operator return?",
            "options": ["Size of memory location", "Size of variable in bytes", "Size of function execution time", "Size of integer limits"],
            "correctAnswer": 1
        },
        {
            "question": "Which loop structure is used for iterating a fixed number of times in C?",
            "options": ["while", "for", "do-while", "goto"],
            "correctAnswer": 1
        },
        {
            "question": "Which keyword is used to exit a loop prematurely in C?",
            "options": ["exit", "end", "stop", "break"],
            "correctAnswer": 3
        },

        // Very Difficult C Questions (Senior Level)
        {
            "question": "What is the primary difference between stack and heap memory allocation in C?",
            "options": ["Stack is used for dynamic memory allocation, heap is for static variables", "Stack is faster but has limited space, heap is slower but has more flexibility", "Heap memory is limited, stack memory is unlimited", "Stack memory is persistent across function calls"],
            "correctAnswer": 1
        },
        {
            "question": "Which technique is used to prevent memory leaks in C?",
            "options": ["Using malloc() carefully", "Using smart pointers", "Using garbage collection", "Manually freeing allocated memory using free()"],
            "correctAnswer": 3
        },
        {
            "question": "What happens if a pointer is dereferenced without being initialized?",
            "options": ["It will hold a default value", "It will cause undefined behavior", "It will automatically point to NULL", "It will produce a segmentation fault"],
            "correctAnswer": 1
        },
        {
            "question": "Which function is used for dynamic memory allocation in C?",
            "options": ["malloc()", "new()", "allocate()", "create()"],
            "correctAnswer": 0
        },
        {
            "question": "Which C feature allows creating new data types using existing ones?",
            "options": ["typedef", "union", "macro", "enum"],
            "correctAnswer": 0
        },
        {
            "question": "What does the term 'dangling pointer' mean in C?",
            "options": ["A pointer that no longer points to valid memory", "A pointer pointing to a static variable", "A pointer automatically freed by the compiler", "A pointer used for recursion"],
            "correctAnswer": 0
        },
        {
            "question": "Which C function is used to compare two strings?",
            "options": ["strcomp()", "strcmp()", "compare()", "cmpstr()"],
            "correctAnswer": 1
        },
        {
            "question": "What is the purpose of a header file in C?",
            "options": ["To define main() function", "To include function declarations and macros", "To execute program logic", "To store output of a program"],
            "correctAnswer": 1
        },
        {
            "question": "Which data structure is commonly implemented using pointers in C?",
            "options": ["Array", "Linked List", "Enum", "Struct"],
            "correctAnswer": 1
        },
        {
            "question": "What happens if `free()` is called twice on the same pointer?",
            "options": ["It deallocates memory twice", "It leads to undefined behavior", "The pointer is set to NULL", "Nothing happens"],
            "correctAnswer": 1
        },
        {
            "question": "Which concept allows passing functions as arguments in C?",
            "options": ["Function pointers", "Macros", "Global variables", "Templates"],
            "correctAnswer": 0
        },
        {
            "question": "How do you avoid buffer overflow vulnerabilities in C?",
            "options": ["Use gets() instead of fgets()", "Use strncpy() instead of strcpy()", "Store all data in global variables", "Disable runtime checks"],
            "correctAnswer": 1
        },
        {
            "question": "What is the effect of using 'volatile' keyword in C?",
            "options": ["Prevents compiler optimizations", "Improves code execution speed", "Enables parallel execution", "Ensures automatic memory allocation"],
            "correctAnswer": 0
        },
        {
            "question": "Which feature allows defining functions with variable arguments in C?",
            "options": ["Function overloading", "Variadic functions using `va_list`", "Macros", "Inline functions"],
            "correctAnswer": 1
        },
        {
            "question": "What does the 'restrict' keyword do in C?",
            "options": ["Ensures that pointers do not alias", "Limits memory allocation", "Restricts function execution", "Enhances integer precision"],
            "correctAnswer": 0
        }
    ]
  },

  {
    "category": "c++",
    "questions": [
        // Easy C++ Questions
        {
            "question": "Which keyword is used to define a constant variable in C++?",
            "options": ["const", "define", "static", "final"],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct syntax for outputting text in C++?",
            "options": ["print('Hello, World!');", "cout << 'Hello, World!';", "System.out.println('Hello, World!');", "console.log('Hello, World!');"],
            "correctAnswer": 1
        },
        {
            "question": "Which format specifier is used to print an integer in C++?",
            "options": ["%d", "%f", "%c", "%s"],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used for logical AND in C++?",
            "options": ["&&", "||", "&", "|"],
            "correctAnswer": 0
        },
        {
            "question": "Which function is used to get user input in C++?",
            "options": ["gets()", "cin", "read()", "input()"],
            "correctAnswer": 1
        },
        {
            "question": "How do you declare an array of 10 integers in C++?",
            "options": ["int arr(10);", "array<int> arr[10];", "int arr[10];", "int[10] arr;"],
            "correctAnswer": 2
        },
        {
            "question": "Which symbol is used to dereference a pointer in C++?",
            "options": ["*", "&", "@", "#"],
            "correctAnswer": 0
        },
        {
            "question": "What does the `sizeof` operator return?",
            "options": ["Size of memory location", "Size of variable in bytes", "Size of function execution time", "Size of integer limits"],
            "correctAnswer": 1
        },
        {
            "question": "Which loop structure is used for iterating a fixed number of times in C++?",
            "options": ["while", "for", "do-while", "goto"],
            "correctAnswer": 1
        },
        {
            "question": "Which keyword is used to exit a loop prematurely in C++?",
            "options": ["exit", "end", "stop", "break"],
            "correctAnswer": 3
        },

        // Very Difficult C++ Questions (Senior Level)
        {
            "question": "What is the primary difference between stack and heap memory allocation in C++?",
            "options": ["Stack is used for dynamic memory allocation, heap is for static variables", "Stack is faster but has limited space, heap is slower but has more flexibility", "Heap memory is limited, stack memory is unlimited", "Stack memory is persistent across function calls"],
            "correctAnswer": 1
        },
        {
            "question": "Which technique is used to prevent memory leaks in C++?",
            "options": ["Using malloc() carefully", "Using smart pointers", "Using garbage collection", "Manually freeing allocated memory using free()"],
            "correctAnswer": 1
        },
        {
            "question": "What happens if a pointer is dereferenced without being initialized?",
            "options": ["It will hold a default value", "It will cause undefined behavior", "It will automatically point to NULL", "It will produce a segmentation fault"],
            "correctAnswer": 1
        },
        {
            "question": "Which function is used for dynamic memory allocation in C++?",
            "options": ["malloc()", "new()", "allocate()", "create()"],
            "correctAnswer": 1
        },
        {
            "question": "Which C++ feature allows creating new data types using existing ones?",
            "options": ["typedef", "union", "macro", "enum"],
            "correctAnswer": 0
        },
        {
            "question": "What does the term 'dangling pointer' mean in C++?",
            "options": ["A pointer that no longer points to valid memory", "A pointer pointing to a static variable", "A pointer automatically freed by the compiler", "A pointer used for recursion"],
            "correctAnswer": 0
        },
        {
            "question": "Which C++ function is used to compare two strings?",
            "options": ["strcomp()", "strcmp()", "compare()", "cmpstr()"],
            "correctAnswer": 2
        },
        {
            "question": "What is the purpose of a header file in C++?",
            "options": ["To define main() function", "To include function declarations and macros", "To execute program logic", "To store output of a program"],
            "correctAnswer": 1
        },
        {
            "question": "Which data structure is commonly implemented using pointers in C++?",
            "options": ["Array", "Linked List", "Enum", "Struct"],
            "correctAnswer": 1
        },
        {
            "question": "What happens if `delete` is called twice on the same pointer?",
            "options": ["It deallocates memory twice", "It leads to undefined behavior", "The pointer is set to NULL", "Nothing happens"],
            "correctAnswer": 1
        },
        {
            "question": "Which concept allows passing functions as arguments in C++?",
            "options": ["Function pointers", "Macros", "Global variables", "Templates"],
            "correctAnswer": 0
        },
        {
            "question": "How do you avoid buffer overflow vulnerabilities in C++?",
            "options": ["Use gets() instead of fgets()", "Use strncpy() instead of strcpy()", "Store all data in global variables", "Disable runtime checks"],
            "correctAnswer": 1
        },
        {
            "question": "What is the effect of using 'volatile' keyword in C++?",
            "options": ["Prevents compiler optimizations", "Improves code execution speed", "Enables parallel execution", "Ensures automatic memory allocation"],
            "correctAnswer": 0
        },
        {
            "question": "Which feature allows defining functions with variable arguments in C++?",
            "options": ["Function overloading", "Variadic functions using `va_list`", "Macros", "Inline functions"],
            "correctAnswer": 1
        },
        {
            "question": "What does the 'restrict' keyword do in C++?",
            "options": ["Ensures that pointers do not alias", "Limits memory allocation", "Restricts function execution", "Enhances integer precision"],
            "correctAnswer": 0
        }
    ]
  },

  {
    "category": "jesus the messiah 1",
    "questions": [
      {
        "question": "What is another name for the Inter-testamental Period?",
        "options": [
          "400 Silent Years",
          "Deuterocanonical Period",
          "Intertestamental Years",
          "The Fading Prophetic Era"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How long was the Inter-testamental Period?",
        "options": [
          "400 years",
          "200 years",
          "100 years",
          "500 years"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What are the six periods that the Inter-testamental period can be separated into?",
        "options": [
          "Restoration, Persian, Hellenistic, Maccabean, Hasmonean, and Herodian periods",
          "Babylonian, Persian, Greek, Roman, Byzantine, and Islamic periods",
          "Exilic, Post-Exilic, Persian, Hellenistic, Hasmonean, and Herodian periods",
          "Pre-Exilic, Exilic, Post-Exilic, Hellenistic, Hasmonean, and Roman periods"
        ],
        "correctAnswer": 0
      },
      {
        "question": "By the time Christ was born, which period was the world under?",
        "options": [
          "Persian Period",
          "Hellenistic Period",
          "Hasmonean Period",
          "Herodian Period"
        ],
        "correctAnswer": 3
      },
      {
        "question": "In A.D. 70, what did the Romans do to Jerusalem?",
        "options": [
          "They appointed a new king",
          "They besieged and destroyed the city and the Second Temple",
          "They established a trade agreement",
          "They rebuilt the city walls"
        ],
        "correctAnswer": 1
      },
      {
        "question": "How many provinces was the entire Roman Empire made up of?",
        "options": [
          "30",
          "40",
          "48",
          "60"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Who appointed governors to administer the provinces?",
        "options": [
          "Local city councils",
          "The Roman Senate",
          "Provincial assemblies",
          "Hereditary succession"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Why was Pontius Pilate appointed to oversee Palestine?",
        "options": [
          "Because he was a native of the region",
          "Because of his experience in managing volatile provinces and maintaining order for Rome",
          "Because he was elected by the local Jewish population",
          "Because he was a military general with no civil duties"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Under whose rule was Christ executed?",
        "options": [
          "Under Jewish rule",
          "Under Roman rule",
          "Under Persian rule",
          "Under Greek rule"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What were those who ruled as kings in Palestine generally referred to as in the New Testament?",
        "options": [
          "Client kings",
          "Tetrarchs",
          "Herods",
          "Ethnarchs"
        ],
        "correctAnswer": 2
      },
      {
        "question": "How long did Herod the Great rule?",
        "options": [
          "33 years",
          "40 years",
          "25 years",
          "50 years"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What nationality was Herod the Great?",
        "options": [
          "Roman",
          "Hebrew",
          "Idumean (of Arab descent)",
          "Greek"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What did Herod the Great order after the visit of the wise men from the East?",
        "options": [
          "He ordered a festival of rejoicing",
          "He ordered the massacre of the infants in Bethlehem",
          "He ordered a temple renovation",
          "He ordered a census of the population"
        ],
        "correctAnswer": 1
      },
      {
        "question": "After Herod's death, how did Rome divide Palestine?",
        "options": [
          "They unified it as a single province",
          "They divided it among his sons into client kingdoms (tetrarchies and ethnarchies)",
          "It was given entirely to the Jewish state",
          "It merged with Syria"
        ],
        "correctAnswer": 1
      },
      {
        "question": "How long did Herod Archelaus reign?",
        "options": [
          "Approximately 10 years",
          "20 years",
          "5 years",
          "15 years"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Where did Herod Archelaus reign?",
        "options": [
          "Galilee and Perea",
          "Judea, Samaria, and Idumea",
          "The entire region of Palestine",
          "Judea only"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What was Herod Archelaus known for?",
        "options": [
          "For his benevolent and popular rule",
          "For his oppressive and tyrannical governance that led to unrest",
          "For his extensive building projects",
          "For his military conquests"
        ],
        "correctAnswer": 1
      },
      {
        "question": "How long did Herod Philip reign?",
        "options": [
          "38 years",
          "20 years",
          "10 years",
          "50 years"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Where did Herod Philip reign?",
        "options": [
          "Galilee and Perea",
          "Judea, Samaria, and Idumea",
          "The northeastern part of his father's kingdom including Iturea, Trachonitis, Batanea, and Auranitis",
          "The entirety of Roman Syria"
        ],
        "correctAnswer": 2
      },
      {
        "question": "How long did Herod Antipas reign?",
        "options": [
          "20 years",
          "10 years",
          "40 years",
          "50 years"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Where did Herod Antipas reign?",
        "options": [
          "Judea",
          "Galilee and Perea",
          "Idumea",
          "Greece"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Who did Herod Antipas imprison and kill?",
        "options": [
          "Jesus",
          "John the Baptist",
          "Peter",
          "James"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What did Herod Antipas expect Christ to perform?",
        "options": [
          "A miracle",
          "A legal judgment",
          "A defeat of the Roman army",
          "A new law"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Where was Jesus born and raised?",
        "options": [
          "Born in Jerusalem and raised in Nazareth",
          "Born in Nazareth and raised in Bethlehem",
          "Born in Bethlehem and raised in Nazareth",
          "Born and raised in Capernaum"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the Hebrew word for Palestine?",
        "options": [
          "Eretz Yisrael",
          "Plishtim",
          "Canaan",
          "Judea"
        ],
        "correctAnswer": 1
      }
    ]
  },

  {
    "category": "jesus the messiah 2",
    "questions": [
      {
        "question": "How many times is the word Pelesheth translated as Palestina in the King James Version Bible?",
        "options": [
          "3 times",
          "4 times",
          "5 times",
          "6 times"
        ],
        "correctAnswer": 1
      },
      {
        "question": "When did the area become a Roman province and officially designated Palestine?",
        "options": [
          "6 AD",
          "70 AD",
          "135 AD",
          "136 AD"
        ],
        "correctAnswer": 3
      },
      {
        "question": "How many political regions was Palestine organized into for ease of administration?",
        "options": [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Where was Jesus born?",
        "options": [
          "Nazareth",
          "Jerusalem",
          "Bethlehem",
          "Capernaum"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Where did Jesus grow up and live?",
        "options": [
          "Bethlehem",
          "Jerusalem",
          "Nazareth",
          "Bethany"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What was the main occupation in Galilee?",
        "options": [
          "Farming",
          "Fishing",
          "Trading",
          "Carpentry"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What lake in Galilee was famous for its fishing?",
        "options": [
          "Sea of Galilee",
          "Dead Sea",
          "Lake Tiberias",
          "Lake Gennesaret"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What surrounded Galilee in the time of Jesus?",
        "options": [
          "It was an isolated island",
          "It was mainly flat and surrounded by deserts",
          "It was bordered by mountains, hills, and valleys, with the Jordan River on its eastern edge",
          "It was surrounded by dense forests"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What was the most prominent group of Greek towns known as?",
        "options": [
          "The Decapolis",
          "The Peloponnese",
          "The Cyclades",
          "The Dodecapolis"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Where was Samaria located?",
        "options": [
          "In southern Judea",
          "In northern Galilee",
          "In the central region of ancient Israel, between Judea and Galilee (modern West Bank)",
          "On the eastern coast of the Mediterranean Sea"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What was the relationship like between the Samaritans and the Jews?",
        "options": [
          "They were harmonious allies",
          "They were indifferent toward each other",
          "They coexisted peacefully",
          "They had deep-seated hostility and enmity"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What was the chief city of Judea?",
        "options": [
          "Jerusalem",
          "Bethlehem",
          "Hebron",
          "Jericho"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What was the official language at the time of Jesus Christ?",
        "options": [
          "Hebrew",
          "Latin",
          "Aramaic",
          "Greek"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What was the major religious practice of the Jews?",
        "options": [
          "Worshipping Greek gods",
          "Temple worship and observance of Mosaic Law, including sacrifices",
          "Buddhist meditation",
          "Christian sacraments"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What did the Pharisees adhere to?",
        "options": [
          "Only the written Torah",
          "Only the Oral Law",
          "Both the written Torah and Oral traditions",
          "Roman legal principles"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Which Jewish group was elitist and influential, with better connections?",
        "options": [
          "Pharisees",
          "Sadducees",
          "Essenes",
          "Zealots"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What does the word \"Sadducees\" come from?",
        "options": [
          "From the Greek word for 'wise'",
          "From the Aramaic word for 'teacher'",
          "From the Hebrew name Zadok, meaning 'righteous'",
          "From the Latin word for 'lawful'"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What were the Priests and Levites responsible for?",
        "options": [
          "Collecting taxes",
          "Leading military campaigns",
          "Maintaining the sanctuary and performing sacrifices in the temple",
          "Writing poetry"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What were some of the categories of Priests?",
        "options": [
          "High priests, chief priests, and ordinary priests",
          "Elders, prophets, and teachers",
          "Scribes, rabbis, and prophets",
          "Kings, generals, and magistrates"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What did the Scribes do?",
        "options": [
          "They were architects",
          "They copied and interpreted the scriptures",
          "They were fishermen",
          "They were merchants"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Where did the Essenes live?",
        "options": [
          "In the city of Jerusalem",
          "In urban centers across Galilee",
          "In desert communities near the Dead Sea, such as Qumran",
          "On the coast of the Mediterranean"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What was a faction that supported the policies and government of the Herodian family?",
        "options": [
          "Zealots",
          "Pharisees",
          "Sadducees",
          "Herodians"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What was one of the several different \"revolutionary\" groups that sought the downfall of the Romans?",
        "options": [
          "Sadducees",
          "Pharisees",
          "Zealots",
          "Herodians"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What are the books that give the story of the life of Christ?",
        "options": [
          "The Epistles",
          "The Gospels",
          "The Acts of the Apostles",
          "The Book of Revelation"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What does the word \"gospel\" mean?",
        "options": [
          "Good news",
          "Sacred law",
          "Divine judgment",
          "Holy ritual"
        ],
        "correctAnswer": 0
      }
    ]
  },

  {
    "category": "jesus the messiah 3",
    "questions": [
      {
        "question": "What is the significance of the Inter-testamental Period for understanding the New Testament context?",
        "options": [
          "It bridged the Old and New Testaments, influencing the religious, political, and cultural background",
          "It was a time of decline and fragmentation",
          "It was merely a historical gap with little impact",
          "It marked the beginning of the Roman era"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did Herod's rule impact the socio-political environment during Jesus' time?",
        "options": [
          "It created a tense environment marked by political maneuvering and oppression",
          "It ushered in an era of stability and prosperity",
          "It had little to no influence on Jewish expectations",
          "It was solely focused on grand architectural projects"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What were the main factors contributing to tensions between the Jews and the Samaritans?",
        "options": [
          "Different historical origins, religious practices, and disputes over sacred sites",
          "Economic rivalry exclusively",
          "Political alliances between governing entities",
          "Differences in language and dress only"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did the beliefs and practices of the Pharisees and the Sadducees differ, and how did these differences influence their interactions with Jesus?",
        "options": [
          "Pharisees emphasized oral traditions and the resurrection, while Sadducees rejected these beliefs, leading to theological debates with Jesus",
          "Both groups held virtually identical views on the law and the afterlife",
          "Sadducees were more concerned with prophecy, while Pharisees focused on established ritual",
          "Their differences were only for show and had no real effect on their debates"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What was the role of the Scribes in Jewish society and how did their approach affect their relationship with other religious groups?",
        "options": [
          "They were law scholars often aligned with the Pharisees and were criticized for their strict adherence to legalism",
          "They functioned primarily as political advisors with little religious influence",
          "They served as temple musicians and ritual custodians",
          "They were largely irrelevant in everyday religious debates"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What possible connection exists between the Essenes, John the Baptist, and Jesus?",
        "options": [
          "Their ascetic lifestyle and apocalyptic beliefs may have influenced John the Baptist, establishing thematic links to Jesus' ministry",
          "The Essenes were a Roman sect with no relevance to early Christianity",
          "They operated in completely different regions and eras",
          "John the Baptist was a high priest within the Essene community"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What was the significance of the Herodians in the political landscape of the New Testament, and how did they interact with Jesus?",
        "options": [
          "They supported Herod's dynasty and collaborated with the Pharisees to challenge Jesus over issues such as Roman taxation",
          "They were early followers of Jesus who later turned against him",
          "They were a minor group with no political influence",
          "They only dealt with economic policies, not religious debates"
        ],
        "correctAnswer": 0
      },
      {
        "question": "In what ways is the term \"gospel\" used in the New Testament?",
        "options": [
          "It denotes the good news of Jesus' kingdom and salvation, being used both in personal proclamation and in written accounts",
          "It exclusively refers to miraculous healings",
          "It is just another term for prophecy",
          "It is a label for all poetic literature in the Bible"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did the canonization process influence the authority of the New Testament texts?",
        "options": [
          "It established doctrinal consistency and anchored the texts in apostolic tradition through a gradual, community-driven selection process",
          "It was an arbitrary process that had little impact",
          "It diminished the diversity of early Christian thought",
          "It was imposed overnight by political powers"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What is the theological significance of Jesus being called \"Immanuel\"?",
        "options": [
          "It means \"God with us,\" signifying his divine presence among humanity and fulfilling Old Testament prophecy",
          "It highlights his role solely as a moral teacher",
          "It refers only to his earthly lineage",
          "It was a title later adopted by church leaders"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How can Psalm 2:7 be interpreted in relation to Jesus as the Son of God?",
        "options": [
          "As a messianic prophecy affirming divine sonship and prefiguring Jesus' unique role in redemption",
          "As a statement with purely historical context relevant only to ancient kings",
          "As a passage with no connection to the New Testament",
          "As an illustration of human lineage rather than divinity"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What impact did the various Jewish groups in Jesus' time (Pharisees, Sadducees, Essenes, Zealots) have on the religious landscape?",
        "options": [
          "They helped shape religious debates, expectations, and practices through their distinct beliefs and traditions",
          "They were fragmented and had little collective influence",
          "Only one group, the Pharisees, affected the religious climate",
          "Their roles were entirely symbolic and did not affect actual practice"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How do the portrayals of Jesus differ between the Synoptic Gospels and the Gospel of John?",
        "options": [
          "The Synoptic Gospels emphasize his teachings, actions, and miracles, while John focuses on his divine nature and theological meaning",
          "They are essentially identical in content and tone",
          "John excludes any mention of miracles",
          "The Synoptics focus only on historical events without deeper theological insight"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did the political climate of the time influence the perception of the Messiah?",
        "options": [
          "Roman oppression, coupled with Jewish hopes for liberation, led to mixed reception—viewing the Messiah as both a potential liberator and a threat",
          "Political factors had no role in shaping messianic expectations",
          "It resulted in a uniform, widely accepted view of the Messiah",
          "The idea of Messiah was influenced solely by ancient prophecy, independent of politics"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What teaching methods did Jesus employ to engage diverse audiences?",
        "options": [
          "He used parables, direct instructions, and symbolic acts to make his message accessible and memorable",
          "He relied exclusively on long, academic discourses",
          "He taught only using written texts",
          "He favored dramatic public debates over storytelling"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Why did Jesus use figurative and symbolic language in his teachings?",
        "options": [
          "To convey deeper spiritual truths and encourage reflection, rather than merely presenting literal facts",
          "Because he was unable to articulate his ideas clearly",
          "To obscure meaning from those who were unworthy",
          "Simply to follow the literary style of his time without deeper intent"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What challenges arise in interpreting the Sermon on the Mount in today's context?",
        "options": [
          "Modern cultural diversity and evolving values make it hard to apply its radical teachings in the same way as in ancient times",
          "There are no significant challenges as its message is timeless and universally clear",
          "Contemporary society has fully embraced all its teachings without conflict",
          "The text has been completely reinterpreted by modern scholars, eliminating historical challenges"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What deeper meaning is behind Jesus' teachings on anger and adultery in the Sermon on the Mount?",
        "options": [
          "He redefined sin by emphasizing internal attitudes over mere external actions",
          "He intended his listeners to focus only on external legal compliance",
          "His teachings were purely symbolic with no practical consequences",
          "They were meant to be interpreted metaphorically without moral weight"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How is the balance between physical healing and spiritual teaching portrayed in Jesus' ministry?",
        "options": [
          "He combined miraculous healings with profound spiritual instruction to address both bodily and soul needs",
          "He completely separated physical healing from his spiritual message",
          "His ministry was focused exclusively on either physical or spiritual matters, not both",
          "There is no clear balance; the emphasis shifts randomly"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How can the organizational structure of Jesus' ministry be characterized?",
        "options": [
          "It was centered around discipleship, teaching, and service, allowing for an effective spread of his message",
          "It was chaotic and lacked clear direction",
          "It was modeled strictly after contemporary political organizations",
          "It relied solely on spontaneous gatherings without any consistent structure"
        ],
        "correctAnswer": 0
      },
      {
        "question": "In what ways did Jesus challenge prevailing social and cultural norms?",
        "options": [
          "By associating with outcasts, redefining leadership, and promoting love and inclusion over strict legalism",
          "He simply maintained existing norms without criticism",
          "He focused only on spiritual issues without addressing social norms",
          "His actions reinforced the prevailing social standards of his time"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did Jesus' teachings address issues of social justice and human relations?",
        "options": [
          "They emphasized compassion, equity, and care for the marginalized as central to the kingdom of God",
          "They primarily focused on personal salvation with little reference to social issues",
          "They promoted a strict hierarchical order that minimized social justice concerns",
          "They were indifferent to matters of human relations, focusing solely on abstract theology"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What key events led up to Jesus' arrest, and what is their theological significance?",
        "options": [
          "Betrayal, trial, and sacrifice that fulfilled prophecy and demonstrated obedience to God's redemptive plan",
          "A series of random events with no deeper theological meaning",
          "Political maneuvering unrelated to divine prophecy",
          "Events that were later exaggerated by his followers"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What are the emotional and spiritual dimensions of Jesus' experience in Gethsemane?",
        "options": [
          "They reveal his profound human anguish and submission to God's will in the face of impending sacrifice",
          "They are minor details that have been overemphasized by tradition",
          "They indicate a state of calm and detachment before his arrest",
          "They serve only as a narrative device without real emotional depth"
        ],
        "correctAnswer": 0
      },
      {
        "question": "How are the crucifixion and resurrection connected to Old Testament prophecy and Christ's overall mission?",
        "options": [
          "They are viewed as the fulfillment of prophecy, confirming Jesus' messianic identity and the means of salvation",
          "They are largely independent events with no prophetic connection",
          "They only have symbolic value and do not fulfill any prophecy",
          "They contradict the expectations set forth in the Old Testament"
        ],
        "correctAnswer": 0
      }
    ]
  },

  {
    "category": "jesus the messiah 4",
    "questions": [
      {
        "question": "Analyze the significance of the various titles given to Jesus in the New Testament and how they contribute to our understanding of his identity and mission.",
        "options": [
          "They reflect His multifaceted divine identity and highlight His role as Redeemer, Savior, and King.",
          "They are only honorific labels without deep theological meaning.",
          "They are borrowed from Old Testament traditions without adding new insight.",
          "They serve primarily a liturgical purpose and do not impact our understanding of His mission."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the implications of Jesus' rejection of the devil's temptations in the wilderness for his ministry and message.",
        "options": [
          "It demonstrates His unwavering commitment to God's will and shows how Scripture guided Him against temptation.",
          "It reveals that Jesus was indifferent to physical challenges during his ministry.",
          "It was a minor event that had little influence on his overall message.",
          "It underscores a human struggle that did not affect his divine nature."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Explain how Jesus' concept of the Kingdom of God differed from the prevailing Jewish expectations of a Messiah.",
        "options": [
          "Jesus presented a spiritual kingdom based on repentance and grace rather than a political, military deliverer.",
          "He promised an immediate political revolution to restore national sovereignty.",
          "He avoided the topic altogether, leaving the Jewish expectations unchallenged.",
          "He fully embraced the traditional Jewish view without offering any new perspective."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Evaluate the effectiveness of Jesus' teaching methods in communicating complex spiritual truths to diverse audiences.",
        "options": [
          "His use of parables, everyday examples, and direct challenges made His teachings accessible and enduring.",
          "He relied solely on scholarly debate, which was not understood by common people.",
          "His methods were overly ambiguous and required later interpretations to be understood.",
          "He used techniques that catered only to a select, educated group of listeners."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did Jesus' teachings on anger and reconciliation challenge the traditional interpretations of the Law of Moses?",
        "options": [
          "He emphasized inner transformation and the condition of the heart over mere external ritual obedience.",
          "He simply reinforced the literal requirements of the Law of Moses.",
          "He ignored the issues of anger entirely, leaving reconciliation unaddressed.",
          "He proposed minor adjustments that did not impact traditional interpretations significantly."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the social and ethical implications of Jesus' teachings on love for one's enemies.",
        "options": [
          "They call for radical empathy and reconciliation, urging believers to overcome retaliation with love.",
          "They mandate passive acceptance of injustice without resistance.",
          "They limit love to only those within one's immediate community.",
          "They have no real impact on modern social or ethical thought."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Analyze the reasons behind the opposition Jesus faced from various Jewish groups, such as the Pharisees and Sadducees.",
        "options": [
          "They opposed Him because His teachings radically reinterpreted the Law and threatened their established authority and understanding of prophecy.",
          "They rejected Him solely because of ethnic differences.",
          "They were universally supportive, and any opposition was later exaggeration.",
          "They opposed Him only for political reasons unrelated to his religious message."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Explain the importance of the Sermon on the Mount in understanding Jesus' ethical teachings and their relevance for contemporary Christians.",
        "options": [
          "It provides a comprehensive ethical framework emphasizing humility, mercy, and inner righteousness that remains relevant today.",
          "It is an outdated set of rules that applies only to first-century followers.",
          "It focuses solely on ceremonial laws without offering moral guidance.",
          "It was intended only for a select group and has limited contemporary applications."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the significance of Jesus' miracles in validating his claims about the Kingdom of God and his divine authority.",
        "options": [
          "They serve as powerful signs of divine authority and the in-breaking of God's kingdom, confirming His identity as the Son of God.",
          "They are merely symbolic acts with no deeper theological import.",
          "They were limited acts of healing that do not speak to his divine nature.",
          "They are embellishments added by later followers and hold little weight today."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did Jesus' approach to ministry differ from that of other religious leaders of his time?",
        "options": [
          "He combined spiritual authority with servant leadership, inclusivity, and a focus on internal transformation rather than external ritual.",
          "He emphasized strict adherence to established religious customs.",
          "He was primarily a political activist rather than a spiritual guide.",
          "He maintained a distance from ordinary people, focusing only on elite circles."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Analyze the strategic importance of Jesus' structural organization of his ministry.",
        "options": [
          "His intentional selection of disciples, emphasis on oral teaching, and delegation of ministries ensured the long-term spread of his message.",
          "His ministry was entirely spontaneous with no clear organizational strategy.",
          "He focused solely on miracles, leaving little room for structured teaching.",
          "His organization was improvised and did not contribute meaningfully to his mission."
        ],
        "correctAnswer": 0
      },
      {
        "question": "In what ways did Jesus' teachings on forgiveness and reconciliation challenge the prevailing social norms of his time?",
        "options": [
          "He promoted radical forgiveness that countered the common practice of strict retributive justice, calling for personal and communal healing.",
          "He reinforced the traditional cycle of revenge.",
          "He only addressed forgiveness in private settings without public implications.",
          "He temporarily set aside forgiveness in favor of strict law enforcement."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the events leading up to the Last Supper and their theological significance.",
        "options": [
          "They include betrayal, mounting tension with religious authorities, and prophetic warnings, all of which set the stage for instituting the new covenant.",
          "They are described as routine happenings with little deeper meaning.",
          "They reflect purely human failings without any theological purpose.",
          "They were episodes that were later added and do not tie into the core message."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Explain the emotional and spiritual significance of Jesus' experience in the Garden of Gethsemane.",
        "options": [
          "It reveals His deep human vulnerability, intense inner struggle, and ultimate submission to God's will as a model for believers facing trials.",
          "It shows that His emotions overwhelmed Him to the point of weakness.",
          "It suggests that He hesitated in fulfilling His mission.",
          "It is portrayed as a moment of anxiety that undermines His divine plan."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How does the text portray the crucifixion of Jesus as both a historical event and a theological turning point?",
        "options": [
          "It is depicted as a genuine historical occurrence that fulfilled prophecy, provided atonement, and marked the transformative moment of divine redemption.",
          "It is presented as a mere accident in history with no lasting theological impact.",
          "It is shown as an event overshadowed by later miracle claims.",
          "It is depicted as a purely symbolic narrative without historical basis."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Analyze the accounts of Jesus' resurrection in the Gospels and their implications for Christian faith and theology.",
        "options": [
          "They consistently affirm Jesus' victory over death and validate the hope of eternal life, forming the cornerstone of Christian belief.",
          "They are contradictory accounts that create more questions than answers.",
          "They serve as allegories with no real promise of resurrection.",
          "They are secondary narratives with limited influence on Christian doctrine."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the evidence for the reliability of the Gospel accounts, considering the challenges posed by the Synoptic Problem.",
        "options": [
          "Multiple attestations, early sources, and internal consistency offer strong evidence for the overall reliability of the Gospels despite minor variations.",
          "The differences render the Gospels entirely historically unreliable.",
          "There is no scholarly basis that supports the historical accuracy of any Gospel account.",
          "The Synoptic Problem completely disproves any coherent narrative."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How does the text explain the relationship between the Old Testament prophecies and the life and ministry of Jesus?",
        "options": [
          "It shows that Jesus fulfills numerous prophecies, thereby validating His messianic identity and establishing continuity with God's redemptive plan.",
          "It suggests that the prophecies are vague and unrelated to Jesus' actions.",
          "It downplays the importance of prophecy in shaping His ministry.",
          "It argues that Old Testament prophecies were misinterpreted by later audiences."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Evaluate the role of the Holy Spirit in Jesus' ministry and its continuing significance for the church today.",
        "options": [
          "The Holy Spirit empowered Jesus throughout His ministry and continues to guide, inspire, and strengthen the church in fulfilling its mission.",
          "The Holy Spirit played a minimal role during His ministry and is largely irrelevant today.",
          "Jesus operated independently of the Holy Spirit, whose role began only after His ascension.",
          "The influence of the Holy Spirit was a later theological addition with little basis in the Gospel accounts."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Explain how Jesus' teachings on wealth and possessions challenge both ancient and modern perspectives on materialism.",
        "options": [
          "He taught that true wealth is found in spiritual treasures rather than accumulation of material goods, warning that greed leads to spiritual emptiness.",
          "He promoted the idea that material success is the key to divine favor.",
          "He largely ignored the issue of wealth in favor of discussing other social matters.",
          "He encouraged the hoarding of wealth as a sign of blessing from God."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Discuss the importance of understanding the historical and cultural context of Jesus' teachings for their accurate interpretation.",
        "options": [
          "Context illuminates the original intent of His words and allows modern readers to apply His teachings appropriately in today's diverse cultural settings.",
          "Historical context is unnecessary because His words are universally clear without it.",
          "Cultural background only serves to overcomplicate or obscure His simple message.",
          "It is irrelevant since the teachings are timeless and require no contextual analysis."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How did Jesus address the issue of hypocrisy among religious leaders, and what are the implications for contemporary religious practice?",
        "options": [
          "He openly condemned the hypocrisy of the religious elite, calling for integrity and authenticity in leadership—a challenge that remains relevant for modern faith communities.",
          "He overlooked hypocrisy, focusing solely on personal salvation.",
          "He merely hinted at the problem without offering any direct criticism.",
          "He endorsed certain traditional practices that later generations would later reinterpret."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Analyze the ways in which Jesus used parables to convey spiritual truths, and discuss the challenges of interpreting them.",
        "options": [
          "Jesus used everyday imagery in parables to reveal profound truths, though their strong symbolism can lead to diverse interpretations requiring careful study.",
          "His parables were straightforward teachings with only one clear meaning.",
          "They were intentionally vague to confuse His critics and need not be interpreted literally.",
          "The parables were outdated stories that lost relevance immediately after His ministry."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Explain the significance of Jesus' teaching on the narrow and wide gates in the context of salvation.",
        "options": [
          "It emphasizes that the path to salvation requires deliberate, disciplined discipleship, in contrast to the easy, self-serving paths that lead to destruction.",
          "It reveals that salvation is universally available without any effort.",
          "It implies that most people will inevitably find salvation because the gate is wide.",
          "It only pertains to social conduct rather than one's eternal destiny."
        ],
        "correctAnswer": 0
      },
      {
        "question": "How does the text portray Jesus as both fully human and fully divine, and why is this important for Christian theology?",
        "options": [
          "By showing that Jesus experienced real human emotions and suffering while also performing divine acts, the text affirms His ability to empathize with humanity and perfectly reveal God's nature.",
          "It portrays Him solely as a divine figure with no true human experiences.",
          "It emphasizes only His humanity, thereby diminishing His divine attributes.",
          "It suggests that His dual nature was a later doctrinal formulation rather than a foundational truth."
        ],
        "correctAnswer": 0
      }
    ]
  },

  {
    "category": "health principles 1",
    "questions": [
      {
        "question": "Which of these dimensions of health relates most closely to the individual's relationship with nature and his most profound faith-based beliefs?",
        "options": [
          "Spiritual dimension",
          "Physical dimension",
          "Social dimension",
          "Emotional dimension"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following vitamins is directly involved in facilitating wound healing?",
        "options": [
          "Vitamin C",
          "Vitamin D",
          "Vitamin K",
          "Vitamin E"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The end product of carbohydrate digestion important to the body is;",
        "options": [
          "Glucose",
          "Amino acids",
          "Fatty acids",
          "Glycerol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Proteins are useful in the body as;",
        "options": [
          "They build and repair tissues",
          "They are primarily stored as fat",
          "They function only as enzymes",
          "They serve exclusively as hormones"
        ],
        "correctAnswer": 0
      },
      {
        "question": "One of the following cells confer immunity",
        "options": [
          "White blood cells",
          "Red blood cells",
          "Platelets",
          "Neurons"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is the major vehicle for transporting all materials such as salt, nutrients, and waste products within the system?",
        "options": [
          "Blood",
          "Lymph",
          "Cerebrospinal fluid",
          "Interstitial fluid"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The process by which particular traits or characteristics are transmitted from parents to their offspring is",
        "options": [
          "Inheritance",
          "Evolution",
          "Mitosis",
          "Metamorphosis"
        ],
        "correctAnswer": 0
      },
      {
        "question": "A living organism is characterized by the following EXCEPT",
        "options": [
          "Metabolism",
          "Growth",
          "Reproduction",
          "Inability to adapt to changes"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Which one of the following is NOT associated with lipid/fat digestion?",
        "options": [
          "Emulsification",
          "Lipase activity",
          "Amylase activity",
          "Bile secretion"
        ],
        "correctAnswer": 2
      },
      {
        "question": "The digestion of protein begins in the",
        "options": [
          "Stomach",
          "Mouth",
          "Small intestine",
          "Large intestine"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The water-soluble vitamins are designated because they dissolve well in?",
        "options": [
          "Water",
          "Fat",
          "Alcohol",
          "Acid"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The following may provide rich sources of protein EXCEPT",
        "options": [
          "Meats",
          "Legumes",
          "Fruits",
          "Dairy products"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following may be an appropriate source of protein for a vegetarian diet?",
        "options": [
          "Tofu",
          "Chicken",
          "Fish",
          "Beef"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The issue of health is not a new concept.",
        "options": [
          "True",
          "False",
          "Depends on cultural context",
          "No one really knows"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The Biblical foundations of health and wellbeing involve",
        "options": [
          "Stewardship of the body as a temple",
          "Reliance solely on modern medicine",
          "Strict adherence to ritual sacrifice",
          "Prioritizing economic wealth above physical care"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Health care services include the following EXCEPT",
        "options": [
          "Preventative care",
          "Surgical procedures",
          "Cosmetic enhancements",
          "Emergency treatment"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Taking appropriate amounts of all nutrients in the correct proportion to meet the requirement of the body cells is regarded as",
        "options": [
          "A balanced diet",
          "Malnutrition",
          "Overeating",
          "Undernutrition"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which ONE of these describes the social dimension of health?",
        "options": [
          "Quality of interpersonal relationships and community support",
          "Physical fitness and bodily strength",
          "Genetic heritage",
          "Metabolic efficiency"
        ],
        "correctAnswer": 0
      },
      {
        "question": "In drug abuse, cellular changes which develop enabling the individual to function normally only as the drug is present may be regarded as",
        "options": [
          "Tolerance",
          "Dependence",
          "Withdrawal",
          "Sensitization"
        ],
        "correctAnswer": 1
      },
      {
        "question": "The following are substances with abuse potential, which of them is a stimulant?",
        "options": [
          "Heroin",
          "Cocaine",
          "Alcohol",
          "Marijuana"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Indian hemp is also known as",
        "options": [
          "Dogbane",
          "Cannabis",
          "Hempcrete",
          "Marijuana"
        ],
        "correctAnswer": 0
      },
      {
        "question": "When Indian hemp is smoked one of the following is the effect produced",
        "options": [
          "It produces a mild sedative effect",
          "It induces intense euphoria",
          "It causes vivid hallucinations",
          "It has no noticeable psychoactive effect"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following drugs may be abused?",
        "options": [
          "Aspirin",
          "Cocaine",
          "Vitamin C",
          "Water"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Any drug that has abuse potential must produce its effects",
        "options": [
          "Rapidly",
          "Slowly",
          "Unnoticeably",
          "Only when injected"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Who among the following is in particular at greater risk of HIV infection?",
        "options": [
          "Men who have sex with men (MSM)",
          "Non-injecting heterosexual women",
          "Elderly individuals",
          "Infants"
        ],
        "correctAnswer": 0
      }
    ]
  },

  {
    "category": "health principles 2",
    "questions": [
      {
        "question": "These constitute high-risk behavior EXCEPT",
        "options": [
          "Excessive alcohol consumption",
          "Smoking",
          "Regular physical exercise",
          "Unprotected sexual intercourse"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Our behavior is an important factor in health because",
        "options": [
          "It can either promote or hinder healthy lifestyles",
          "It directly alters our genetic makeup",
          "It solely determines infectious disease risk",
          "It has no impact on overall health"
        ],
        "correctAnswer": 0
      },
      {
        "question": "One of the methods for treating alcoholism may involve the use of",
        "options": [
          "Medications such as naltrexone or acamprosate",
          "Ancient bloodletting techniques",
          "Exclusive reliance on herbal teas",
          "Only homeopathic remedies"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following systems will help in homeostatic control within the body?",
        "options": [
          "The endocrine system",
          "The lymphatic system",
          "The digestive system",
          "The reproductive system"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Part of the human system that pumps and channels blood to and from the body is",
        "options": [
          "The circulatory (cardiovascular) system",
          "The respiratory system",
          "The nervous system",
          "The skeletal system"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Functionally specialized cells grouped together are known as",
        "options": [
          "Tissues",
          "Organs",
          "Organ systems",
          "Cell clusters"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is not an example of Vitamins B complex?",
        "options": [
          "Thiamine",
          "Riboflavin",
          "Folic Acid",
          "Ascorbic Acid"
        ],
        "correctAnswer": 3
      },
      {
        "question": "____________ is the body system that fights against infectious organisms that cause diseases.",
        "options": [
          "The immune system",
          "The endocrine system",
          "The nervous system",
          "The digestive system"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Part of the human system that processes food",
        "options": [
          "The digestive system",
          "The respiratory system",
          "The circulatory system",
          "The excretory system"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Genetic material is located within the cell",
        "options": [
          "In the nucleus",
          "In the cytoplasm",
          "In the mitochondria only",
          "In the lysosomes"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The normal blood pressure is",
        "options": [
          "120/80 mm Hg",
          "140/90 mm Hg",
          "100/60 mm Hg",
          "160/100 mm Hg"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The following are functions of the skeleton EXCEPT",
        "options": [
          "Providing support",
          "Protecting vital organs",
          "Producing blood cells",
          "Digesting food"
        ],
        "correctAnswer": 3
      },
      {
        "question": "The ________ is the outermost layer of skin",
        "options": [
          "Epidermis",
          "Dermis",
          "Hypodermis",
          "Subcutaneous tissue"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Blood carrying oxygen is called _______",
        "options": [
          "Oxygenated blood",
          "Deoxygenated blood",
          "Venous blood",
          "Lymph"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following are not components of blood",
        "options": [
          "Plasma",
          "Red blood cells",
          "Nerve cells",
          "White blood cells"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Parts of the brain consist of the following EXCEPT",
        "options": [
          "Cerebrum",
          "Cerebellum",
          "Spinal cord",
          "Brainstem"
        ],
        "correctAnswer": 2
      },
      {
        "question": "The following are methods of preserving foods",
        "options": [
          "Canning",
          "Freezing",
          "Fermentation",
          "Photosynthesis"
        ],
        "correctAnswer": 3
      },
      {
        "question": "The strong whitish cord that connects the bone to the bone is called________",
        "options": [
          "Ligament",
          "Tendon",
          "Cartilage",
          "Muscle"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The human skeleton consists of _________ bones bound together by tough and relatively inelastic connective tissues",
        "options": [
          "206",
          "208",
          "210",
          "212"
        ],
        "correctAnswer": 0
      },
      {
        "question": "The cardiovascular system has three types of blood vessels, EXCEPT",
        "options": [
          "Arteries",
          "Veins",
          "Capillaries",
          "Lymphatic vessels"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Different types of bone are these except",
        "options": [
          "Long bones",
          "Short bones",
          "Flat bones",
          "Elastic bones"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Chlamydiaceae is a ________ disease",
        "options": [
          "Bacterial",
          "Viral",
          "Fungal",
          "Parasitic"
        ],
        "correctAnswer": 0
      },
      {
        "question": "All these are vectors of the following diseases except",
        "options": [
          "Mosquitoes",
          "Ticks",
          "Fleas",
          "Bacteria"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Which of these is not possible ways by which HIV/AIDs can be transmitted?",
        "options": [
          "Unprotected sexual intercourse",
          "Sharing needles",
          "Mosquito bites",
          "Blood transfusion with infected blood"
        ],
        "correctAnswer": 2
      }
    ]
  },

  {
    category: "busen108",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High-level Text Manipulation Language",
          "Hyperlink and Text Management Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is the root element of an HTML page?",
        options: ["<head>", "<body>", "<html>", "<title>"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<dl>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag is used to define an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<dd>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<hyperlink>", "<a>", "<href>"],
        correctAnswer: 2,
      },
      {
        question: "What attribute is used to specify the URL of a hyperlink?",
        options: ["src", "href", "url", "link"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag is used to display an image?",
        options: ["<image>", "<src>", "<img>", "<picture>"],
        correctAnswer: 2,
      },
      {
        question: "What attribute is used to specify the source of an image?",
        options: ["href", "url", "src", "link"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML tag defines a table?",
        options: ["<grid>", "<table>", "<row>", "<data>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag defines a row in a table?",
        options: ["<row>", "<td>", "<th>", "<tr>"],
        correctAnswer: 3,
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style System",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correctAnswer: 2,
      },
      {
        question:
          "Which CSS property is used to change the background color of an element?",
        options: [
          "background-color",
          "color-background",
          "bg-color",
          "element-background",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How do you insert an external CSS file into your HTML document?",
        options: [
          '<style src="styles.css">',
          '<link rel="stylesheet" type="text/css" href="styles.css">',
          '<css file="styles.css">',
          '@import url("styles.css"); (within `<style>` tags)',
        ],
        correctAnswer: 1,
      },
      {
        question: "Which CSS selector targets all `<p>` elements on a page?",
        options: [".p", "#p", "p", "* p"],
        correctAnswer: 2,
      },
      {
        question:
          'Which CSS selector targets an element with the ID "myElement"?',
        options: [".myElement", "#myElement", "element.myElement", "myElement"],

        correctAnswer: 1,
      },
      {
        question:
          'Which CSS selector targets all elements with the class "container"?',
        options: ["#container", ".container", "container", "* container"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property controls the size of the text?",
        options: ["text-size", "font-size", "size", "text-style"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property is used to make text bold?",
        options: [
          "font-weight: bold;",
          "text-style: bold;",
          "bold-text: yes;",
          "text-weight: bold;",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which CSS property is used to add space inside an element's border?",
        options: ["margin", "border", "padding", "spacing"],
        correctAnswer: 2,
      },
      {
        question: "What does JS stand for?",
        options: [
          "Java Style",
          "JavaScript",
          "Joint Scripting",
          "Just Scripting",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["variable", "var", "let", "const"],
        correctAnswer: 2,
      },
      {
        question:
          "Which of the following is a primitive data type in JavaScript?",
        options: ["Array", "Object", "Boolean", "Function"],
        correctAnswer: 2,
      },
      {
        question: "How do you write a single-line comment in JavaScript?",
        options: [
          "// This is a comment",
          "/* This is a comment */",
          "-- This is a comment",
          "#This is a comment",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which operator is used for strict equality in JavaScript (checks both value and type)?",
        options: ["==", "=", "===", "!="],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `2 + '2'` in JavaScript?",
        options: ["4 (number)", "22 (string)", "error", "NaN"],
        correctAnswer: 1,
      },
      {
        question:
          "Which built-in JavaScript function is used to display output in the console?",
        options: ["alert()", "prompt()", "console.log()", "document.write()"],
        correctAnswer: 2,
      },
      {
        question: "What is an array in JavaScript?",
        options: [
          "A single variable that can store multiple data types.",
          "An ordered collection of elements, which can be of different data types.",
          "A data structure that stores key-value pairs.",
          "A function that returns multiple values.",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "How do you access the first element of an array named `myArray`?",
        options: ["myArray[1]", "myArray.first()", "myArray(0)", "myArray[0]"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a loop structure in JavaScript?",
        options: [
          "if statement",
          "switch statement",
          "for loop",
          "function declaration",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of a web browser?",
        options: [
          "To create web pages.",
          "To store website files.",
          "To display web pages to users.",
          "To manage website databases.",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is a URL (Uniform Resource Locator)?",
        options: [
          "The language used to write web pages.",
          "The design and layout of a website.",
          "The address of a resource on the internet.",
          "A program that runs on a web server.",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the role of a web server?",
        options: [
          "To design the user interface of a website.",
          "To store, process, and deliver website files to browsers.",
          "To handle client-side scripting.",
          "To manage the website's domain name.",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "What is the difference between the front-end and the back-end of a website?",
        options: [
          "Front-end is what the user sees, back-end is the server-side logic.",
          "Front-end handles data storage, back-end handles user interaction.",
          "Front-end is written in JavaScript, back-end is written in HTML/CSS.",
          "There is no difference.",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is primarily a front-end technology?",
        options: ["Python", "Node.js", "HTML", "MySQL"],
        correctAnswer: 2,
      },
      {
        question:
          "Which of the following is often used for back-end development?",
        options: ["CSS", "JavaScript", "HTML", "React"],
        correctAnswer: 1,
      },
      {
        question: "What does HTTP stand for?",
        options: [
          "Hyper Text Transfer Protocol",
          "High-level Text Transmission Process",
          "Hyperlink Transferring Protocol",
          "Home Text Processing Protocol",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is a DNS (Domain Name System)?",
        options: [
          "A system for designing website layouts.",
          "A system that translates domain names into IP addresses.",
          "A language for styling web pages.",
          "A type of web server software.",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a web API (Application Programming Interface)?",
        options: [
          "A graphical user interface for web development tools.",
          "A set of rules and protocols that allow different software applications to communicate with each other over the web.",
          "A specific programming language used for web development.",
          "A method for securing web pages with passwords.",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is responsive web design?",
        options: [
          "Designing websites that load very quickly.",
          "Designing websites that adapt their layout to different screen sizes and devices.",
          "Designing websites with a lot of animations and interactive elements.",
          "Designing websites that use only text and no images.",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a function in JavaScript?",
        options: [
          "A type of variable that can store multiple values.",
          "A block of code designed to perform a specific task.",
          "A way to style HTML elements.",
          "A method for handling user input.",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "How do you call (execute) a function named `myFunction` in JavaScript?",
        options: [
          "call myFunction;",
          "execute myFunction();",
          "myFunction();",
          "run myFunction;",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the `document` object in JavaScript?",
        options: [
          "To represent the browser window.",
          "To represent the HTML DOM (Document Object Model) of the page.",
          "To handle user events like clicks and mouse movements.",
          "To store website cookies.",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which method is commonly used to find an HTML element by its ID in JavaScript?",
        options: [
          "document.getElementByName()",
          "document.getElementByClass()",
          "document.getElementById()",
          'document.querySelector("#myId")',
        ],
        correctAnswer: 2,
      },
      {
        question: "What is an event listener in JavaScript?",
        options: [
          "A function that is called when a specific HTML element is created.",
          "A mechanism that waits for a specific event (like a click) to occur and then executes a function.",
          "A variable that stores information about user interactions.",
          "A way to style elements based on user actions.",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a framework in web development?",
        options: [
          "A reusable set of pre-written code and rules that provides a structure for building software applications.",
          "A collection of pre-written code and tools that provides a structure for building web applications.",
          "A specific programming language used for complex websites.",
          "A type of web server.",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following is a popular JavaScript framework/library for front-end development?",
        options: ["Django", "Ruby on Rails", "React", "Spring"],
        correctAnswer: 2,
      },
      {
        question: "What is version control (e.g., using Git)?",
        options: [
          "A way to optimize website loading speed.",
          "A system for tracking changes to code over time.",
          "A method for deploying websites to a server.",
          "A tool for designing user interfaces.",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a database used for in web development?",
        options: [
          "To store and manage website files (HTML, CSS, JavaScript).",
          "To handle user authentication and security.",
          "To store and retrieve structured data, such as user information or product details.",
          "To define the visual appearance of a website.",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of testing in web development?",
        options: [
          "To make the website look more appealing.",
          "To ensure the website functions correctly and is free of errors.",
          "To optimize website performance for search engines.",
          "To gather user feedback on the website's design.",
        ],
        correctAnswer: 1,
      },
      {
        "question": "A network within a home or small office is typically a:",
        "options": ["WAN", "LAN", "MAN", "PAN"],
        "correctAnswer": 1
      },
      {
        "question": "Connecting devices using Bluetooth creates a:",
        "options": ["LAN", "WAN", "MAN", "PAN"],
        "correctAnswer": 3
      },
      {
        "question": "A network that connects multiple cities is classified as a:",
        "options": ["LAN", "MAN", "WAN", "VPN"],
        "correctAnswer": 2
      },
      {
        "question": "Which network type uses a secure, encrypted connection over a public network?",
        "options": ["LAN", "WAN", "MAN", "VPN"],
        "correctAnswer": 3
      },
      {
        "question": "In a bus topology, what happens if the main cable breaks?",
        "options": ["Only one workstation is affected", "The entire network can fail", "Data is rerouted automatically", "A new connection is established"],
        "correctAnswer": 1
      },
      {
        "question": "What is a primary disadvantage of a star topology?",
        "options": ["High cost of cabling", "Difficult to add new nodes", "Reliance on the central hub/switch", "Low fault tolerance"],
        "correctAnswer": 2
      },
      {
        "question": "In a ring topology, how is data typically transmitted?",
        "options": ["Bidirectionally", "Randomly", "Unidirectionally", "Simultaneously to all nodes"],
        "correctAnswer": 2
      },
      {
        "question": "Which topology offers multiple paths for data transmission between nodes?",
        "options": ["Star", "Bus", "Ring", "Mesh"],
        "correctAnswer": 3
      },
      {
        "question": "A hierarchical network structure is characteristic of which topology?",
        "options": ["Mesh", "Ring", "Tree", "Bus"],
        "correctAnswer": 2
      },
      {
        "question": "The physical layer of the OSI model is concerned with:",
        "options": ["Logical addressing", "Data framing", "Signal encoding", "Application protocols"],
        "correctAnswer": 2
      },
      {
        "question": "MAC addressing is handled at which OSI layer?",
        "options": ["Network", "Transport", "Data Link", "Physical"],
        "correctAnswer": 2
      },
      {
        "question": "Which OSI layer is responsible for end-to-end reliable data transfer?",
        "options": ["Network", "Session", "Transport", "Application"],
        "correctAnswer": 2
      },
      {
        "question": "Establishing, maintaining, and terminating sessions occurs at the:",
        "options": ["Transport Layer", "Network Layer", "Session Layer", "Presentation Layer"],
        "correctAnswer": 2
      },
      {
        "question": "Data encryption and decryption are typically handled at the:",
        "options": ["Session Layer", "Presentation Layer", "Application Layer", "Transport Layer"],
        "correctAnswer": 1
      },
      {
        "question": "Which OSI layer provides services directly to the end-user?",
        "options": ["Transport", "Network", "Presentation", "Application"],
        "correctAnswer": 3
      },
      {
        "question": "The 'client-side' of web development is also known as:",
        "options": ["Backend", "Server-side", "Frontend", "Database management"],
        "correctAnswer": 2
      },
      {
        "question": "Which of these is NOT primarily a backend technology?",
        "options": ["Python", "Node.js", "PHP", "HTML"],
        "correctAnswer": 3
      },
      {
        "question": "What is the purpose of an IP address?",
        "options": ["To identify a physical network cable", "To uniquely identify a device on a network", "To define the style of a web page", "To translate domain names"],
        "correctAnswer": 1
      },
      {
        "question": "What does API stand for in the context of web development?",
        "options": ["Advanced Programming Interface", "Application Protocol Interface", "Application Programming Interface", "Automated Program Interaction"],
        "correctAnswer": 2
      },
      {
        "question": "React and Angular are examples of:",
        "options": ["Backend databases", "Server-side languages", "Frontend frameworks/libraries", "Network protocols"],
        "correctAnswer": 2
      },
      {
        "question": "A collection of pre-written code that helps simplify development is called a:",
        "options": ["Framework", "Protocol", "Library", "Compiler"],
        "correctAnswer": 2
      },
      {
        "question": "Making a website work well on desktops, tablets, and phones is the goal of:",
        "options": ["Server-side rendering", "Progressive enhancement", "Responsive design", "Mobile-first development"],
        "correctAnswer": 2
      },
      {
        "question": "WordPress and Drupal are examples of:",
        "options": ["JavaScript frameworks", "CSS preprocessors", "Content Management Systems", "Backend languages"],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary function of Git?",
        "options": ["Package management", "Task automation", "Version control", "Code compilation"],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is used to store and manage structured data for a website?",
        "options": ["Web server", "Browser cache", "Database", "Text editor"],
        "correctAnswer": 2
      }
    ],
  },
  
];

export const quizData = {
  CSS: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correct: 0
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "background-color", "bgcolor", "background"],
      correct: 1
    },
    {
      question: "How do you add a comment in CSS?",
      options: ["/* comment */", "// comment", "<!-- comment -->", "comment"],
      correct: 0
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-size", "text-style", "font-style"],
      correct: 1
    },
    {
      question: "How do you make the text bold?",
      options: ["font: bold", "font-weight: bold", "style: bold", "text: bold"],
      correct: 1
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "font-size"],
      correct: 0
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: ["#demo", ".demo", "demo", "*demo"],
      correct: 0
    },
    {
      question: "How do you select elements with class 'test'?",
      options: [".test", "#test", "test", "*test"],
      correct: 0
    },
    {
      question: "Which property is used to create space between the element's border and content?",
      options: ["margin", "padding", "border", "spacing"],
      correct: 1
    },
    {
      question: "Which value of the 'display' property makes an element a block element?",
      options: ["inline", "block", "flex", "grid"],
      correct: 1
    }
  ],
  JAVASCRIPT: [
    {
      question: "What is JavaScript?",
      options: ["A programming language", "A markup language", "A styling language", "A database"],
      correct: 0
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      correct: 3
    },
    {
      question: "What is the correct way to write an array?",
      options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = {1:'red', 2:'green', 3:'blue'}"],
      correct: 1
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function myFunction"],
      correct: 0
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "myFunction()", "call function myFunction", "function myFunction()"],
      correct: 1
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i = 5 then"],
      correct: 2
    },
    {
      question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: ["if i <> 5", "if (i != 5)", "if i =! 5 then", "if (i <> 5)"],
      correct: 1
    },
    {
      question: "How does a WHILE loop start?",
      options: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)", "while (i <= 10) {i++}"],
      correct: 1
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/", "Both B and C"],
      correct: 3
    },
    {
      question: "How do you insert a comment that has more than one line?",
      options: ["/*This comment has more than one line*/", "//This comment has more than one line//", "<!--This comment has more than one line-->", "//This comment has more than one line"],
      correct: 0
    }
  ],
  HTML: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correct: 0
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<head>", "<header>"],
      correct: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<line>"],
      correct: 2
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: ["<body bg='yellow'>", "<body style='background-color:yellow'>", "<background>yellow</background>", "<body background='yellow'>"],
      correct: 1
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<title>", "<head>", "<meta>", "<header>"],
      correct: 0
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<section>", "<div>", "<bottom>"],
      correct: 0
    },
    {
      question: "Which HTML element is used to display a scalar measurement within a range?",
      options: ["<gauge>", "<range>", "<measure>", "<meter>"],
      correct: 3
    },
    {
      question: "Which HTML element is used to create an HTML form for user input?",
      options: ["<input>", "<form>", "<formset>", "<inputform>"],
      correct: 1
    },
    {
      question: "Which HTML element is used to create a drop-down list?",
      options: ["<list>", "<dropdown>", "<select>", "<input type='list'>"],
      correct: 2
    },
    {
      question: "Which HTML element is used to create a multi-line text input?",
      options: ["<text>", "<textarea>", "<input type='text'>", "<input type='textarea'>"],
      correct: 1
    }
  ],
  FRONTEND: [
    {
      question: "What is React?",
      options: ["A database", "A programming language", "A JavaScript library", "A CSS framework"],
      correct: 2
    },
    {
      question: "What is JSX?",
      options: ["A database", "A programming language", "A syntax extension for JavaScript", "A CSS framework"],
      correct: 2
    },
    {
      question: "What is the virtual DOM?",
      options: ["A real DOM element", "A lightweight copy of the real DOM", "A database", "A programming language"],
      correct: 1
    },
    {
      question: "How do you create a React component?",
      options: ["function MyComponent()", "class MyComponent", "const MyComponent = () =>", "All of the above"],
      correct: 3
    },
    {
      question: "How do you pass data to a child component?",
      options: ["Using props", "Using state", "Using context", "Using refs"],
      correct: 0
    },
    {
      question: "What is the correct way to write a conditional rendering in React?",
      options: ["if(condition) return <div>Hello</div>", "{condition && <div>Hello</div>}", "if condition: return <div>Hello</div>", "All of the above"],
      correct: 1
    },
    {
      question: "How do you handle events in React?",
      options: ["onClick={handleClick}", "onclick={handleClick}", "onClick={handleClick()}", "onclick={handleClick()}"],
      correct: 0
    },
    {
      question: "What is the purpose of useState in React?",
      options: ["To create global variables", "To manage component state", "To create functions", "To import components"],
      correct: 1
    },
    {
      question: "What is the purpose of useEffect in React?",
      options: ["To create effects", "To handle side effects", "To create animations", "To handle events"],
      correct: 1
    },
    {
      question: "How do you render a list in React?",
      options: ["Using map()", "Using forEach()", "Using for loop", "Using while loop"],
      correct: 0
    }
  ]
};
