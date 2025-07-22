

export const quizData = {
  FRONTEND:[
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-level Text Manipulation Language",
        "Hyperlink and Text Management Language",
        "Home Tool Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which of the following is the root element of an HTML page?",
      options: ["<head>", "<body>", "<html>", "<title>"],
      correct: 2,
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to define an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<dd>"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<hyperlink>", "<a>", "<href>"],
      correct: 2,
    },
    {
      question: "What attribute is used to specify the URL of a hyperlink?",
      options: ["src", "href", "url", "link"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["<image>", "<src>", "<img>", "<picture>"],
      correct: 2,
    },
    {
      question: "What attribute is used to specify the source of an image?",
      options: ["href", "url", "src", "link"],
      correct: 2,
    },
    {
      question: "Which HTML tag defines a table?",
      options: ["<grid>", "<table>", "<row>", "<data>"],
      correct: 1,
    },
    {
      question: "Which HTML tag defines a row in a table?",
      options: ["<row>", "<td>", "<th>", "<tr>"],
      correct: 3,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style System",
      ],
      correct: 2,
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "foreground-color"],
      correct: 2,
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
      correct: 0,
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
      correct: 1,
    },
    {
      question: "Which CSS selector targets all `<p>` elements on a page?",
      options: [".p", "#p", "p", "* p"],
      correct: 2,
    },
    {
      question:
        'Which CSS selector targets an element with the ID "myElement"?',
      options: [".myElement", "#myElement", "element.myElement", "myElement"],

      correct: 1,
    },
    {
      question:
        'Which CSS selector targets all elements with the class "container"?',
      options: ["#container", ".container", "container", "* container"],
      correct: 1,
    },
    {
      question: "Which CSS property controls the size of the text?",
      options: ["text-size", "font-size", "size", "text-style"],
      correct: 1,
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: [
        "font-weight: bold;",
        "text-style: bold;",
        "bold-text: yes;",
        "text-weight: bold;",
      ],
      correct: 0,
    },
    {
      question:
        "Which CSS property is used to add space inside an element's border?",
      options: ["margin", "border", "padding", "spacing"],
      correct: 2,
    },
    {
      question: "What does JS stand for?",
      options: [
        "Java Style",
        "JavaScript",
        "Joint Scripting",
        "Just Scripting",
      ],
      correct: 1,
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["variable", "var", "let", "const"],
      correct: 2,
    },
    {
      question:
        "Which of the following is a primitive data type in JavaScript?",
      options: ["Array", "Object", "Boolean", "Function"],
      correct: 2,
    },
    {
      question: "How do you write a single-line comment in JavaScript?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "-- This is a comment",
        "#This is a comment",
      ],
      correct: 0,
    },
    {
      question:
        "Which operator is used for strict equality in JavaScript (checks both value and type)?",
      options: ["==", "=", "===", "!="],
      correct: 2,
    },
    {
      question: "What is the output of `2 + '2'` in JavaScript?",
      options: ["4 (number)", "22 (string)", "error", "NaN"],
      correct: 1,
    },
    {
      question:
        "Which built-in JavaScript function is used to display output in the console?",
      options: ["alert()", "prompt()", "console.log()", "document.write()"],
      correct: 2,
    },
    {
      question: "What is an array in JavaScript?",
      options: [
        "A single variable that can store multiple data types.",
        "An ordered collection of elements, which can be of different data types.",
        "A data structure that stores key-value pairs.",
        "A function that returns multiple values.",
      ],
      correct: 1,
    },
    {
      question:
        "How do you access the first element of an array named `myArray`?",
      options: ["myArray[1]", "myArray.first()", "myArray(0)", "myArray[0]"],
      correct: 2,
    },
    {
      question: "Which of the following is a loop structure in JavaScript?",
      options: [
        "if statement",
        "switch statement",
        "for loop",
        "function declaration",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of a web browser?",
      options: [
        "To create web pages.",
        "To store website files.",
        "To display web pages to users.",
        "To manage website databases.",
      ],
      correct: 2,
    },
    {
      question: "What is a URL (Uniform Resource Locator)?",
      options: [
        "The language used to write web pages.",
        "The design and layout of a website.",
        "The address of a resource on the internet.",
        "A program that runs on a web server.",
      ],
      correct: 2,
    },
    {
      question: "What is the role of a web server?",
      options: [
        "To design the user interface of a website.",
        "To store, process, and deliver website files to browsers.",
        "To handle client-side scripting.",
        "To manage the website's domain name.",
      ],
      correct: 1,
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
      correct: 0,
    },
    {
      question: "Which of the following is primarily a front-end technology?",
      options: ["Python", "Node.js", "HTML", "MySQL"],
      correct: 2,
    },
    {
      question:
        "Which of the following is often used for back-end development?",
      options: ["CSS", "JavaScript", "HTML", "React"],
      correct: 1,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hyper Text Transfer Protocol",
        "High-level Text Transmission Process",
        "Hyperlink Transferring Protocol",
        "Home Text Processing Protocol",
      ],
      correct: 0,
    },
    {
      question: "What is a DNS (Domain Name System)?",
      options: [
        "A system for designing website layouts.",
        "A system that translates domain names into IP addresses.",
        "A language for styling web pages.",
        "A type of web server software.",
      ],
      correct: 1,
    },
    {
      question: "What is a web API (Application Programming Interface)?",
      options: [
        "A graphical user interface for web development tools.",
        "A set of rules and protocols that allow different software applications to communicate with each other over the web.",
        "A specific programming language used for web development.",
        "A method for securing web pages with passwords.",
      ],
      correct: 1,
    },
    {
      question: "What is responsive web design?",
      options: [
        "Designing websites that load very quickly.",
        "Designing websites that adapt their layout to different screen sizes and devices.",
        "Designing websites with a lot of animations and interactive elements.",
        "Designing websites that use only text and no images.",
      ],
      correct: 1,
    },
    {
      question: "What is a function in JavaScript?",
      options: [
        "A type of variable that can store multiple values.",
        "A block of code designed to perform a specific task.",
        "A way to style HTML elements.",
        "A method for handling user input.",
      ],
      correct: 1,
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
      correct: 2,
    },
    {
      question: "What is the purpose of the `document` object in JavaScript?",
      options: [
        "To represent the browser window.",
        "To represent the HTML DOM (Document Object Model) of the page.",
        "To handle user events like clicks and mouse movements.",
        "To store website cookies.",
      ],
      correct: 1,
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
      correct: 2,
    },
    {
      question: "What is an event listener in JavaScript?",
      options: [
        "A function that is called when a specific HTML element is created.",
        "A mechanism that waits for a specific event (like a click) to occur and then executes a function.",
        "A variable that stores information about user interactions.",
        "A way to style elements based on user actions.",
      ],
      correct: 1,
    },
    {
      question: "What is a framework in web development?",
      options: [
        "A reusable set of pre-written code and rules that provides a structure for building software applications.",
        "A collection of pre-written code and tools that provides a structure for building web applications.",
        "A specific programming language used for complex websites.",
        "A type of web server.",
      ],
      correct: 0,
    },
    {
      question:
        "Which of the following is a popular JavaScript framework/library for front-end development?",
      options: ["Django", "Ruby on Rails", "React", "Spring"],
      correct: 2,
    },
    {
      question: "What is version control (e.g., using Git)?",
      options: [
        "A way to optimize website loading speed.",
        "A system for tracking changes to code over time.",
        "A method for deploying websites to a server.",
        "A tool for designing user interfaces.",
      ],
      correct: 1,
    },
    {
      question: "What is a database used for in web development?",
      options: [
        "To store and manage website files (HTML, CSS, JavaScript).",
        "To handle user authentication and security.",
        "To store and retrieve structured data, such as user information or product details.",
        "To define the visual appearance of a website.",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of testing in web development?",
      options: [
        "To make the website look more appealing.",
        "To ensure the website functions correctly and is free of errors.",
        "To optimize website performance for search engines.",
        "To gather user feedback on the website's design.",
      ],
      correct: 1,
    },
    {
      "question": "A network within a home or small office is typically a:",
      "options": ["WAN", "LAN", "MAN", "PAN"],
      "correct": 1
    },
    {
      "question": "Connecting devices using Bluetooth creates a:",
      "options": ["LAN", "WAN", "MAN", "PAN"],
      "correct": 3
    },
    {
      "question": "A network that connects multiple cities is classified as a:",
      "options": ["LAN", "MAN", "WAN", "VPN"],
      "correct": 2
    },
    {
      "question": "Which network type uses a secure, encrypted connection over a public network?",
      "options": ["LAN", "WAN", "MAN", "VPN"],
      "correct": 3
    },
    {
      "question": "In a bus topology, what happens if the main cable breaks?",
      "options": ["Only one workstation is affected", "The entire network can fail", "Data is rerouted automatically", "A new connection is established"],
      "correct": 1
    },
    {
      "question": "What is a primary disadvantage of a star topology?",
      "options": ["High cost of cabling", "Difficult to add new nodes", "Reliance on the central hub/switch", "Low fault tolerance"],
      "correct": 2
    },
    {
      "question": "In a ring topology, how is data typically transmitted?",
      "options": ["Bidirectionally", "Randomly", "Unidirectionally", "Simultaneously to all nodes"],
      "correct": 2
    },
    {
      "question": "Which topology offers multiple paths for data transmission between nodes?",
      "options": ["Star", "Bus", "Ring", "Mesh"],
      "correct": 3
    },
    {
      "question": "A hierarchical network structure is characteristic of which topology?",
      "options": ["Mesh", "Ring", "Tree", "Bus"],
      "correct": 2
    },
    {
      "question": "The physical layer of the OSI model is concerned with:",
      "options": ["Logical addressing", "Data framing", "Signal encoding", "Application protocols"],
      "correct": 2
    },
    {
      "question": "MAC addressing is handled at which OSI layer?",
      "options": ["Network", "Transport", "Data Link", "Physical"],
      "correct": 2
    },
    {
      "question": "Which OSI layer is responsible for end-to-end reliable data transfer?",
      "options": ["Network", "Session", "Transport", "Application"],
      "correct": 2
    },
    {
      "question": "Establishing, maintaining, and terminating sessions occurs at the:",
      "options": ["Transport Layer", "Network Layer", "Session Layer", "Presentation Layer"],
      "correct": 2
    },
    {
      "question": "Data encryption and decryption are typically handled at the:",
      "options": ["Session Layer", "Presentation Layer", "Application Layer", "Transport Layer"],
      "correct": 1
    },
    {
      "question": "Which OSI layer provides services directly to the end-user?",
      "options": ["Transport", "Network", "Presentation", "Application"],
      "correct": 3
    },
    {
      "question": "The 'client-side' of web development is also known as:",
      "options": ["Backend", "Server-side", "Frontend", "Database management"],
      "correct": 2
    },
    {
      "question": "Which of these is NOT primarily a backend technology?",
      "options": ["Python", "Node.js", "PHP", "HTML"],
      "correct": 3
    },
    {
      "question": "What is the purpose of an IP address?",
      "options": ["To identify a physical network cable", "To uniquely identify a device on a network", "To define the style of a web page", "To translate domain names"],
      "correct": 1
    },
    {
      "question": "What does API stand for in the context of web development?",
      "options": ["Advanced Programming Interface", "Application Protocol Interface", "Application Programming Interface", "Automated Program Interaction"],
      "correct": 2
    },
    {
      "question": "React and Angular are examples of:",
      "options": ["Backend databases", "Server-side languages", "Frontend frameworks/libraries", "Network protocols"],
      "correct": 2
    },
    {
      "question": "A collection of pre-written code that helps simplify development is called a:",
      "options": ["Framework", "Protocol", "Library", "Compiler"],
      "correct": 2
    },
    {
      "question": "Making a website work well on desktops, tablets, and phones is the goal of:",
      "options": ["Server-side rendering", "Progressive enhancement", "Responsive design", "Mobile-first development"],
      "correct": 2
    },
    {
      "question": "WordPress and Drupal are examples of:",
      "options": ["JavaScript frameworks", "CSS preprocessors", "Content Management Systems", "Backend languages"],
      "correct": 2
    },
    {
      "question": "What is the primary function of Git?",
      "options": ["Package management", "Task automation", "Version control", "Code compilation"],
      "correct": 2
    },
    {
      "question": "Which of the following is used to store and manage structured data for a website?",
      "options": ["Web server", "Browser cache", "Database", "Text editor"],
      "correct": 2
    }
  ],
  JAVASCRIPT: [
    {
      "question": "What is JavaScript primarily used for?",
      "options": [
        "Styling web pages",
        "Creating interactive web experiences",
        "Structuring web content",
        "Managing databases"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which keyword is used to declare a variable that cannot be reassigned?",
      "options": [
        "var",
        "let",
        "const",
        "static"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nconsole.log(typeof null);\n```",
      "options": [
        "\"null\"",
        "\"object\"",
        "\"undefined\"",
        "\"number\""
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you correctly log 'Hello' to the console?",
      "options": [
        "print('Hello');",
        "log.console('Hello');",
        "console.log('Hello');",
        "System.out.println('Hello');"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for strict equality (checks both value and type)?",
      "options": [
        "==",
        "===",
        "=",
        "!="
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the result of `\"5\" + 2` in JavaScript?",
      "options": [
        "\"7\"",
        "7",
        "\"52\"",
        "Error"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you access the first element of an array named `myArray`?",
      "options": [
        "myArray[1]",
        "myArray.first()",
        "myArray[0]",
        "myArray.get(0)"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `return` statement in a function?",
      "options": [
        "To stop the function execution and return a value.",
        "To print a value to the console.",
        "To declare a new variable.",
        "To loop through an array."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is NOT a valid way to define a function in JavaScript?",
      "options": [
        "function myFunction() {}",
        "const myFunction = () => {}",
        "myFunction = function() {}",
        "def myFunction():"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nlet a = 10;\nif (a > 5) {\n  a = 20;\n}\nconsole.log(a);\n```",
      "options": [
        "10",
        "20",
        "Error",
        "undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How can you convert a string to an integer in JavaScript?",
      "options": [
        "parseInt()",
        "toString()",
        "parseFloat()",
        "toFixed()"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the correct syntax for a `for` loop that iterates from 0 to 4?",
      "options": [
        "for (i = 0; i < 5; i++)",
        "for (i <= 5; i++)",
        "for i = 0 to 4",
        "loop (i from 0 to 4)"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What does `NaN` stand for in JavaScript?",
      "options": [
        "Not a Name",
        "New and Null",
        "Not a Number",
        "Negative Acknowledgment"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which array method adds one or more elements to the end of an array and returns the new length?",
      "options": [
        "unshift()",
        "pop()",
        "push()",
        "shift()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the output?\n```javascript\nlet x = 'hello';\nlet y = x.length;\nconsole.log(y);\n```",
      "options": [
        "5",
        "6",
        "undefined",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `document.getElementById()`?",
      "options": [
        "To create a new HTML element.",
        "To select an HTML element by its class name.",
        "To select an HTML element by its ID.",
        "To style an HTML element."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which event occurs when the user clicks on an HTML element?",
      "options": [
        "onchange",
        "onmouseover",
        "onclick",
        "onkeydown"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the correct way to include an external JavaScript file?",
      "options": [
        "<script href=\"script.js\"></script>",
        "<script src=\"script.js\"></script>",
        "<link rel=\"javascript\" href=\"script.js\">",
        "<js src=\"script.js\"></js>"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will `console.log(10 % 3)` output?",
      "options": [
        "3.33",
        "3",
        "1",
        "0"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which symbol is used for multi-line comments in JavaScript?",
      "options": [
        "//",
        "/**/",
        "",
        "##"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the value of `true || false`?",
      "options": [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the value of `false && true`?",
      "options": [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does `undefined` mean in JavaScript?",
      "options": [
        "A variable has been declared but has not yet been assigned a value.",
        "A variable has been explicitly set to `null`.",
        "A variable is not defined anywhere.",
        "An error occurred."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you create an object literal with properties `name` and `age`?",
      "options": [
        "let person = [name: 'Alice', age: 30];",
        "let person = {name: 'Alice', age: 30};",
        "let person = new Object('Alice', 30);",
        "let person = (name: 'Alice', age: 30);"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nlet count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}\n```",
      "options": [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the difference between `null` and `undefined`?",
      "options": [
        "`null` is an object, `undefined` is a primitive type.",
        "`null` means absence of value, `undefined` means a variable has not been assigned a value.",
        "They are exactly the same.",
        "`null` is used for numbers, `undefined` for strings."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nfunction greet() {\n  return 'Hi';\n}\nconsole.log(greet());\n```",
      "options": [
        "greet()",
        "Hi",
        "undefined",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `closure` in JavaScript?",
      "options": [
        "A type of loop.",
        "A function having access to its outer function's scope even after the outer function has finished executing.",
        "A way to close a web page.",
        "A built-in method for array iteration."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `this` keyword refer to in JavaScript?",
      "options": [
        "The global object (e.g., `window` in browsers).",
        "The function itself.",
        "The object that owns the currently executing code.",
        "The parent element in the DOM."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `hoisting` in JavaScript?",
      "options": [
        "A method to lift elements in the DOM.",
        "A process where variable and function declarations are moved to the top of their scope during compilation.",
        "A way to sort arrays.",
        "A type of asynchronous operation."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `==` and `===` operators?",
      "options": [
        "`==` compares value and type, `===` compares only value.",
        "`==` compares only value, `===` compares value and type.",
        "`==` is used for numbers, `===` for strings.",
        "There is no practical difference."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nlet arr = [1, 2, 3];\narr.splice(1, 1);\nconsole.log(arr);\n```",
      "options": [
        "[1, 3]",
        "[1, 2]",
        "[2, 3]",
        "[1, 2, 3]"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What does `event bubbling` refer to in the DOM?",
      "options": [
        "Events are handled first by the innermost element, then by its parent, and so on.",
        "Events are handled by the outermost element first, then by its children.",
        "Events are ignored by parent elements.",
        "A method to create new events."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `localStorage` in web development?",
      "options": [
        "To store data on the server.",
        "To store small amounts of data temporarily during a session.",
        "To store data persistently in the browser across sessions.",
        "To create client-side databases."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `callback function`?",
      "options": [
        "A function that calls itself recursively.",
        "A function passed as an argument to another function, to be executed later.",
        "A function that always returns `null`.",
        "A function that is only called once."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n```",
      "options": [
        "[1, 4, 9]",
        "[2, 4, 6]",
        "[1, 2, 3, 1, 2, 3]",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `destructuring` in JavaScript?",
      "options": [
        "Breaking down a string into characters.",
        "A way to extract values from arrays or properties from objects into distinct variables.",
        "Deleting variables from memory.",
        "Changing the structure of a function."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `bind()` method?",
      "options": [
        "To link two JavaScript files.",
        "To create a new function that, when called, has its `this` keyword set to the provided value.",
        "To attach an event listener.",
        "To combine two arrays."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst person = { name: 'Bob', age: 25 };\nconst { name, city } = person;\nconsole.log(city);\n```",
      "options": [
        "\"Bob\"",
        "25",
        "undefined",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `Promise` in JavaScript?",
      "options": [
        "A guarantee that a function will run without errors.",
        "An object representing the eventual completion or failure of an asynchronous operation.",
        "A type of loop for asynchronous code.",
        "A statement for conditional execution."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `let` and `var` in terms of scope?",
      "options": [
        "`let` has function scope, `var` has block scope.",
        "`let` has block scope, `var` has function scope.",
        "They both have global scope.",
        "`var` is for constants, `let` is for variables."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of `!!\"hello\"`?",
      "options": [
        "true",
        "false",
        "\"hello\"",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is `event delegation`?",
      "options": [
        "Assigning multiple event listeners to a single element.",
        "Handling events on a parent element instead of individual child elements.",
        "Ignoring specific events on a page.",
        "Creating custom events."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst numbers = [1, 2, 3];\nconst sum = numbers.reduce((acc, current) => acc + current, 0);\nconsole.log(sum);\n```",
      "options": [
        "123",
        "6",
        "0",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of these is used for asynchronous programming in modern JavaScript?",
      "options": [
        "Callbacks",
        "Promises",
        "Async/Await",
        "All of the above"
      ],
      "correct": 3,
      "level": "intermediate"
    },
    {
      "question": "What is the spread operator (`...`) used for?",
      "options": [
        "To multiply numbers.",
        "To condense multiple arguments into an array.",
        "To expand iterable (like an array) into individual elements.",
        "Both B and C"
      ],
      "correct": 3,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following?\n```javascript\nlet a = [1, 2];\nlet b = [...a, 3, 4];\nconsole.log(b);\n```",
      "options": [
        "[1, 2, 3, 4]",
        "[[1, 2], 3, 4]",
        "Error",
        "undefined"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `setTimeout`?",
      "options": [
        "To execute a function immediately.",
        "To stop the execution of a script.",
        "To execute a function once after a specified delay.",
        "To execute a function repeatedly at intervals."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `querySelector` and `querySelectorAll`?",
      "options": [
        "`querySelector` returns all matching elements, `querySelectorAll` returns the first.",
        "`querySelector` returns the first matching element, `querySelectorAll` returns all matching elements.",
        "`querySelector` is for IDs, `querySelectorAll` is for classes.",
        "They are aliases for each other."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `polyfill` in JavaScript?",
      "options": [
        "A type of data structure.",
        "Code that implements a feature that is not natively supported by a browser.",
        "A tool for optimizing JavaScript code.",
        "A way to combine multiple JavaScript files."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output?\n```javascript\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { ...obj1, ...obj2, c: 3 };\nconsole.log(obj3);\n```",
      "options": [
        "{ a: 1, b: 2, c: 3 }",
        "{ a: 1, c: 3 }",
        "{ b: 2, c: 3 }",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
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
  CPP: [
    {
      "question": "What is the correct syntax to print 'Hello, World!' in C++?",
      "options": [
        "cout << \"Hello, World!\";",
        "printf(\"Hello, World!\");",
        "Console.WriteLine(\"Hello, World!\");",
        "print(\"Hello, World!\");"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which header file is typically included for input/output operations in C++?",
      "options": [
        "<stdio.h>",
        "<string>",
        "<iostream>",
        "<vector>"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following is NOT a fundamental data type in C++?",
      "options": [
        "int",
        "float",
        "string",
        "char"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the result of `10 / 3` in C++ (integer division)?",
      "options": [
        "3.33",
        "3",
        "4",
        "1"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `main` function in a C++ program?",
      "options": [
        "It's an optional function.",
        "It's where global variables are declared.",
        "It's the entry point of the program execution.",
        "It's used for defining classes."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which operator is used to get the remainder of a division?",
      "options": [
        "/",
        "*",
        "%",
        "+"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you declare an integer variable named `age` and initialize it to 25?",
      "options": [
        "int age = 25;",
        "age = int 25;",
        "integer age = 25;",
        "declare int age = 25;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x++;\n    return 0;\n}\n```",
      "options": [
        "5",
        "6",
        "Compilation Error",
        "Undefined Behavior"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which loop structure guarantees that its body will execute at least once?",
      "options": [
        "for loop",
        "while loop",
        "do-while loop",
        "if statement"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the correct way to write a single-line comment in C++?",
      "options": [
        "",
        "/* comment */",
        "// comment",
        "# comment"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `std::cin` represent in C++?",
      "options": [
        "Standard output stream",
        "Standard input stream",
        "Standard error stream",
        "Standard file stream"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is used to define a constant variable in C++?",
      "options": [
        "volatile",
        "mutable",
        "const",
        "static"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is an array in C++?",
      "options": [
        "A collection of different data types.",
        "A collection of variables of the same data type stored in contiguous memory locations.",
        "A special type of function.",
        "A user-defined data type."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the index of the first element in a C++ array?",
      "options": [
        "1",
        "0",
        "Any integer",
        "The size of the array"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int a = 10;\n    if (a > 5 && a < 15) {\n        std::cout << \"Inside\";\n    } else {\n        std::cout << \"Outside\";\n    }\n    return 0;\n}\n```",
      "options": [
        "Inside",
        "Outside",
        "Compilation Error",
        "Nothing"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you define a simple function in C++ that takes no arguments and returns `void`?",
      "options": [
        "function myFunction() {}",
        "void myFunction() {}",
        "myFunction void() {}",
        "define myFunction() {}"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `return 0;` statement in the `main` function?",
      "options": [
        "It signifies an error occurred.",
        "It indicates successful program execution.",
        "It pauses the program.",
        "It restarts the program."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for logical OR in C++?",
      "options": [
        "&",
        "|",
        "&&",
        "||"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What is the output of `std::cout << (5 + 3 * 2);`?",
      "options": [
        "16",
        "11",
        "13",
        "8"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is true about C++ comments?",
      "options": [
        "They are executed by the compiler.",
        "They improve program performance.",
        "They are ignored by the compiler.",
        "They are mandatory for all lines of code."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `\n` represent in a C++ string literal?",
      "options": [
        "A tab character",
        "A newline character",
        "A null terminator",
        "A backspace character"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the default value of a global integer variable if not initialized?",
      "options": [
        "Garbage value",
        "0",
        "1",
        "Undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following creates a compile-time error?\n```cpp\nint main() {\n    int 123num = 10;\n    return 0;\n}\n```",
      "options": [
        "Missing semicolon",
        "Variable name starting with a digit",
        "Incorrect return type",
        "No error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `using namespace std;` statement?",
      "options": [
        "To include all standard libraries.",
        "To avoid typing `std::` before standard library elements.",
        "To define a new namespace.",
        "To import functions from other files."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which header file defines the `std::string` class?",
      "options": [
        "<iostream>",
        "<cstring>",
        "<string>",
        "<algorithm>"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the difference between `pass by value` and `pass by reference` for function arguments?",
      "options": [
        "Pass by value copies the argument, pass by reference uses the original variable.",
        "Pass by value uses pointers, pass by reference uses copies.",
        "There is no difference.",
        "Pass by value is faster."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    *ptr = 20;\n    std::cout << x;\n    return 0;\n}\n```",
      "options": [
        "10",
        "20",
        "Address of x",
        "Compilation Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `const` keyword signify when used with a member function of a class?",
      "options": [
        "The function cannot be overloaded.",
        "The function can only access public members.",
        "The function does not modify the object's state.",
        "The function returns a constant value."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is true about a `constructor` in C++?",
      "options": [
        "It must have a return type.",
        "It cannot be overloaded.",
        "It is called automatically when an object is created.",
        "It is used to destroy an object."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `polymorphism` in C++ (specifically, runtime polymorphism)?",
      "options": [
        "The ability to define multiple functions with the same name.",
        "The ability of an object to take on many forms (e.g., through virtual functions and inheritance).",
        "The process of combining data and functions into a single unit.",
        "The mechanism of creating new classes from existing classes."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `virtual` keyword in C++?",
      "options": [
        "To create a global function.",
        "To enable runtime polymorphism.",
        "To declare a constant variable.",
        "To prevent inheritance."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `reference` in C++?",
      "options": [
        "A pointer to a memory address.",
        "An alias (another name) for an existing variable.",
        "A copy of a variable.",
        "A dynamic array."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nclass MyClass {\npublic:\n    MyClass() { std::cout << \"Constructor\\n\"; }\n    ~MyClass() { std::cout << \"Destructor\\n\"; }\n};\nint main() {\n    MyClass obj;\n    return 0;\n}\n```",
      "options": [
        "Constructor\nDestructor",
        "Constructor",
        "Destructor",
        "No output"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which operator is used to access members of a class through a pointer to an object?",
      "options": [
        ". (dot operator)",
        ":: (scope resolution operator)",
        "-> (arrow operator)",
        "& (address-of operator)"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `encapsulation` in Object-Oriented Programming?",
      "options": [
        "The ability to create new classes from existing classes.",
        "The process of combining data and the functions that operate on that data into a single unit (a class).",
        "The ability of an object to take on many forms.",
        "The process of hiding implementation details."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does `static` mean when applied to a member variable of a class?",
      "options": [
        "The variable can only be accessed within the class.",
        "The variable is constant and cannot be changed.",
        "The variable belongs to the class itself, not to individual objects.",
        "The variable is allocated on the heap."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(x, y);\n    std::cout << x << \" \" << y;\n    return 0;\n}\n```",
      "options": [
        "5 10",
        "10 5",
        "Compilation Error",
        "Garbage values"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which keyword is used to explicitly prevent a class from being inherited?",
      "options": [
        "final",
        "sealed",
        "noinherit",
        "private"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is an `abstract class` in C++?",
      "options": [
        "A class that cannot have any member variables.",
        "A class that cannot be inherited from.",
        "A class that contains at least one pure virtual function and cannot be instantiated.",
        "A class used only for utility functions."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `new` and `delete` operators in C++?",
      "options": [
        "For file I/O operations.",
        "For dynamic memory allocation and deallocation.",
        "For creating and destroying objects on the stack.",
        "For string manipulation."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5};\n    std::cout << v[2];\n    return 0;\n}\n```",
      "options": [
        "1",
        "2",
        "3",
        "Compilation Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which of the following correctly describes `function overloading`?",
      "options": [
        "Defining multiple functions with the same name but different return types.",
        "Defining multiple functions with the same name but different parameters.",
        "Defining a function that calls itself.",
        "Defining a function within another function."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the `this` pointer in C++?",
      "options": [
        "A pointer to the parent class object.",
        "A pointer to the global object.",
        "A pointer to the current object itself.",
        "A pointer to a static member."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `friend function` in C++?",
      "options": [
        "A function that is inherited by derived classes.",
        "A function that can access private and protected members of a class.",
        "A function that is part of a different class.",
        "A function that cannot be overloaded."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nclass Base {\npublic:\n    void show() { std::cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { std::cout << \"Derived\"; }\n};\nint main() {\n    Base* b_ptr = new Derived();\n    b_ptr->show();\n    delete b_ptr;\n    return 0;\n}\n```",
      "options": [
        "Base",
        "Derived",
        "Compilation Error",
        "Runtime Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `operator overloading` in C++?",
      "options": [
        "To create new operators.",
        "To change the precedence of operators.",
        "To allow operators to work with user-defined types (classes).",
        "To speed up arithmetic operations."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "When is a `destructor` called in C++?",
      "options": [
        "When an object is created.",
        "When an object goes out of scope or is explicitly deleted.",
        "When a member function is called.",
        "At the beginning of the program."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int arr[] = {10, 20, 30};\n    int* ptr = arr;\n    std::cout << *(ptr + 1);\n    return 0;\n}\n```",
      "options": [
        "10",
        "20",
        "30",
        "Address of 20"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is an example of `inheritance`?",
      "options": [
        "Combining data and functions into a class.",
        "A class deriving properties and behaviors from another class.",
        "Using the same function name for different data types.",
        "Hiding the internal details of a class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `pure virtual function`?",
      "options": [
        "A virtual function that cannot be overridden.",
        "A virtual function with a default implementation.",
        "A virtual function with no implementation, declared with `= 0;`.",
        "A static member function."
      ],
      "correct": 2,
      "level": "intermediate"
    }
  ],
  CSS :[
    {
      "question": "Which CSS property is used to change the text color of an element?",
      "options": [
        "background-color",
        "color",
        "font-color",
        "text-style"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is the correct way to link an external stylesheet?",
      "options": [
        "<style src=\"style.css\">",
        "<link rel=\"stylesheet\" href=\"style.css\">",
        "<stylesheet>style.css</stylesheet>",
        "<link href=\"style.css\">"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which CSS selector targets elements with a specific `id`?",
      "options": [
        ".class",
        "#id",
        "element",
        "*"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the CSS property used to set the background color of an element?",
      "options": [
        "color",
        "bg-color",
        "background-color",
        "background"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to change the font size of text?",
      "options": [
        "text-size",
        "font-size",
        "text-height",
        "font-height"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does the `margin` property do in CSS?",
      "options": [
        "Adds space inside the element's border.",
        "Adds space outside the element's border.",
        "Sets the width of the element.",
        "Changes the background of the element."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the text color of the paragraph?\n```html\n<p style=\"color: blue;\">Hello</p>\n```\n```css\np { color: red; }\n```",
      "options": [
        "Red",
        "Blue",
        "Black (default)",
        "Green"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which CSS property controls the spacing between lines of text?",
      "options": [
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-spacing"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you make text bold using CSS?",
      "options": [
        "font-weight: bold;",
        "text-decoration: bold;",
        "font-style: bold;",
        "bold: true;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the correct order of the box model (from inside to outside)?",
      "options": [
        "Content, Margin, Padding, Border",
        "Content, Border, Padding, Margin",
        "Content, Padding, Border, Margin",
        "Margin, Border, Padding, Content"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which CSS property is used to center text horizontally?",
      "options": [
        "align-items: center;",
        "justify-content: center;",
        "text-align: center;",
        "float: center;"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `display: none;` do to an element?",
      "options": [
        "Hides the element but takes up space.",
        "Hides the element and removes it from the document flow.",
        "Makes the element transparent.",
        "Changes its position to absolute."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the width of the div?\n```css\ndiv { width: 100px; padding: 10px; border: 1px solid black; }\n``` (Default `box-sizing: content-box;`)",
      "options": [
        "100px",
        "110px",
        "120px",
        "122px"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which CSS property is used to set the image background of an element?",
      "options": [
        "background-image",
        "image-background",
        "src-image",
        "background-url"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the default value of the `position` property?",
      "options": [
        "relative",
        "absolute",
        "static",
        "fixed"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to control the transparency of an element?",
      "options": [
        "visibility",
        "display",
        "opacity",
        "filter"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you add a shadow to text using CSS?",
      "options": [
        "box-shadow",
        "text-shadow",
        "shadow-text",
        "font-shadow"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the CSS property for italicizing text?",
      "options": [
        "text-style: italic;",
        "font-style: italic;",
        "font-weight: italic;",
        "text-decoration: italic;"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `border-radius`?",
      "options": [
        "To set the border color.",
        "To add a shadow to the border.",
        "To round the corners of an element's border.",
        "To set the width of the border."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which value of the `display` property makes an element behave like a block-level element but lays out its content like an inline element?",
      "options": [
        "block",
        "inline",
        "inline-block",
        "none"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the effect of `float: left;`?",
      "options": [
        "Moves the element to the left relative to its normal position.",
        "Aligns the element to the left, allowing other content to wrap around it.",
        "Changes the text alignment to left.",
        "Makes the element disappear."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does `rem` unit stand for?",
      "options": [
        "Root element margin",
        "Relative unit for media",
        "Root em",
        "Responsive pixel"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to change the background image size?",
      "options": [
        "background-size",
        "image-size",
        "bg-image-size",
        "size"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How can you specify a fallback font in CSS?",
      "options": [
        "font-family: Arial, sans-serif;",
        "font-fallback: Arial;",
        "font-type: Arial, default;",
        "font: Arial fallback;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What CSS property would you use to remove the underline from a link?",
      "options": [
        "text-style: none;",
        "text-decoration: none;",
        "link-underline: none;",
        "decoration: none;"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the primary purpose of CSS Flexbox?",
      "options": [
        "To position elements precisely using coordinates.",
        "To create complex grid-based layouts.",
        "To arrange items in a one-dimensional layout (row or column).",
        "To add interactive animations to elements."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property is used to control the stacking order of positioned elements?",
      "options": [
        "order",
        "stack-index",
        "z-index",
        "layer"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What will be the background color of the div?\n```html\n<div class=\"box\" id=\"myBox\" style=\"background-color: yellow;\"></div>\n```\n```css\n.box { background-color: blue; }\n#myBox { background-color: green; }\n```",
      "options": [
        "Blue",
        "Green",
        "Yellow",
        "Default (transparent)"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property is used to create a transition effect for properties over a duration?",
      "options": [
        "animation",
        "transform",
        "transition",
        "timing"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `::before` and `:before` in CSS?",
      "options": [
        "`::before` is for elements, `:before` is for classes.",
        "`::before` is for pseudo-elements (CSS3), `:before` is for pseudo-classes (CSS2).",
        "`::before` is for pseudo-elements, `:before` is for backwards compatibility with pseudo-elements.",
        "There is no difference."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property ensures that padding and border are included in the element's total width and height?",
      "options": [
        "sizing",
        "box-sizing: border-box;",
        "box-sizing: content-box;",
        "layout-sizing"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the final color of the paragraph given the following?\n```css\np { color: red !important; }\ndiv p { color: blue; }\nbody p { color: green; }\n```",
      "options": [
        "Red",
        "Blue",
        "Green",
        "Black"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which value of the `position` property removes an element from the normal document flow and positions it relative to its nearest positioned ancestor?",
      "options": [
        "static",
        "relative",
        "absolute",
        "fixed"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `@media` queries?",
      "options": [
        "To embed media files (audio/video) into a webpage.",
        "To apply different styles based on device characteristics (e.g., screen size, orientation).",
        "To define animations.",
        "To include external fonts."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `flex-grow: 1;` used for in Flexbox?",
      "options": [
        "To set the initial size of the item.",
        "To make the item take up available space proportional to its grow factor.",
        "To shrink the item if necessary.",
        "To align the item to the start of the container."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following CSS if the viewport width is 700px?\n```css\n.container {\n  width: 50vw;\n}\n```",
      "options": [
        "50px",
        "100px",
        "350px",
        "700px"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which pseudo-class targets an element when the user's mouse cursor is over it?",
      "options": [
        ":active",
        ":focus",
        ":hover",
        ":visited"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the effect of `transform: rotate(90deg);`?",
      "options": [
        "Moves the element 90 pixels to the right.",
        "Rotates the element 90 degrees clockwise.",
        "Skews the element 90 degrees.",
        "Changes the element's transparency."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is a CSS `combinator`?",
      "options": [
        "::",
        ">",
        "!",
        "#"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```html\n<div class=\"parent\">\n  <p>Child Text</p>\n</div>\n```\n```css\n.parent p { color: blue; }\n.parent > p { color: red; }\n```",
      "options": [
        "Blue",
        "Red",
        "Black",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the `calc()` function in CSS used for?",
      "options": [
        "To perform mathematical calculations for CSS property values.",
        "To define custom functions.",
        "To create animations.",
        "To calculate element positions dynamically."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which property is used to define explicit grid rows and columns in CSS Grid Layout?",
      "options": [
        "grid-template-areas",
        "grid-gap",
        "grid-template-rows / grid-template-columns",
        "grid-auto-rows"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the effect of `overflow: hidden;`?",
      "options": [
        "Adds scrollbars if content overflows.",
        "Crops content that overflows its container.",
        "Makes overflowing content visible outside the container.",
        "Prevents content from overflowing."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the width of `div.item` if the container has `display: flex;`?\n```css\n.container {\n  display: flex;\n  width: 300px;\n}\n.item {\n  flex-basis: 100px;\n  flex-grow: 1;\n}\n``` (Assuming only one item)",
      "options": [
        "100px",
        "200px",
        "300px",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `:nth-child()` pseudo-class?",
      "options": [
        "To select the last child of an element.",
        "To select elements that are the Nth child of their parent.",
        "To select elements based on their type.",
        "To select the first child of an element."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of these is a valid way to define a custom property (CSS Variable)?",
      "options": [
        "my-color: blue;",
        "--my-color: blue;",
        "$my-color: blue;",
        "let my-color = blue;"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `object-fit` when dealing with images inside a container?",
      "options": [
        "To align the image horizontally.",
        "To control how an `<img>` or `<video>` should be resized to fit its container.",
        "To add a border around the image.",
        "To animate the image."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the height of the element if the viewport height is 1000px?\n```css\ndiv { height: 50vh; }\n```",
      "options": [
        "50px",
        "1000px",
        "500px",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    }
  ],
  PYTHON :[
    {
      "question": "Which of these is used to start a block of code (e.g., in `if` statements or loops) in Python?",
      "options": [
        "{}",
        "[]",
        ":",
        "()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the data type of `3.14` in Python?",
      "options": [
        "int",
        "str",
        "float",
        "double"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following Python code?\n```python\nprint(10 // 3)\n```",
      "options": [
        "3.33",
        "3",
        "1",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you check the data type of a variable `my_var` in Python?",
      "options": [
        "get_type(my_var)",
        "type(my_var)",
        "my_var.type()",
        "typeof my_var"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is a mutable data type in Python?",
      "options": [
        "String",
        "Tuple",
        "List",
        "Integer"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nmessage = 'Hello'\nprint(message[0])\n```",
      "options": [
        "H",
        "e",
        "Error",
        "Undefined"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you add an item to the end of a list named `my_list`?",
      "options": [
        "my_list.add(item)",
        "my_list.insert(item)",
        "my_list.append(item)",
        "my_list + item"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `elif` in an `if-elif-else` chain?",
      "options": [
        "It marks the end of the `if` statement.",
        "It is executed if the previous `if` or `elif` conditions were false.",
        "It creates a loop.",
        "It defines a new function."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\ncount = 0\nwhile count < 2:\n    print('Loop')\n    count += 1\n```",
      "options": [
        "Loop",
        "Loop\nLoop",
        "Loop\nLoop\nLoop",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you create an empty dictionary in Python?",
      "options": [
        "my_dict = []",
        "my_dict = ()",
        "my_dict = {}",
        "my_dict = dict()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these is a correct way to unpack a tuple `(1, 2)` into variables `a` and `b`?",
      "options": [
        "a, b = (1, 2)",
        "a = (1, 2)[0]; b = (1, 2)[1]",
        "Both A and B",
        "Neither A nor B"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nprint(abs(-5))\n```",
      "options": [
        "-5",
        "5",
        "Error",
        "0"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for logical AND?",
      "options": [
        "&",
        "and",
        "&&",
        "OR"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `range()` function?",
      "options": [
        "To generate a random number.",
        "To create a list of numbers.",
        "To generate a sequence of numbers.",
        "To specify a range of acceptable inputs."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nresult = 7 > 5 or 3 < 1\nprint(result)\n```",
      "options": [
        "True",
        "False",
        "Error",
        "Undefined"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you remove an item from a list by its value?",
      "options": [
        "my_list.delete(value)",
        "my_list.remove(value)",
        "my_list.pop(value)",
        "my_list.discard(value)"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the result of `len('Python')`?",
      "options": [
        "5",
        "6",
        "7",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which module in Python is commonly used for mathematical functions?",
      "options": [
        "system",
        "math",
        "calc",
        "numbers"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the output if `x = 5` and you run `print(x == '5')`?",
      "options": [
        "True",
        "False",
        "Error",
        "Undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is a valid Python variable name?",
      "options": [
        "1var",
        "my-var",
        "_my_var",
        "for"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nname = 'Alice'\nage = 30\nprint(f'{name} is {age} years old.')\n```",
      "options": [
        "Alice is 30 years old.",
        "name is age years old.",
        "Error",
        "Alice is age years old."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you convert a string `s` to an integer?",
      "options": [
        "int(s)",
        "str_to_int(s)",
        "s.to_int()",
        "parse_int(s)"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `pass` statement?",
      "options": [
        "It is used to terminate a loop.",
        "It is a null operation; nothing happens when it executes.",
        "It skips the current iteration of a loop.",
        "It raises an exception."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is a correct way to call a function named `calculate` with arguments `x` and `y`?",
      "options": [
        "call calculate(x, y)",
        "calculate(x, y)",
        "calculate[x, y]",
        "run calculate x, y"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nitems = ['apple', 'banana', 'cherry']\nfor item in items:\n    if item == 'banana':\n        break\n    print(item)\n```",
      "options": [
        "apple\nbanana\ncherry",
        "apple\nbanana",
        "apple",
        "Error"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the main difference between `==` and `is` in Python?",
      "options": [
        "`==` compares identity, `is` compares value.",
        "`==` compares value, `is` compares identity (memory location).",
        "There is no difference, they are interchangeable.",
        "`is` is for numbers, `==` for strings."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output of the following?\n```python\nnums = [1, 2, 3, 4, 5]\nnew_nums = [n * 2 for n in nums if n % 2 == 0]\nprint(new_nums)\n```",
      "options": [
        "[2, 4, 6, 8, 10]",
        "[2, 4]",
        "[4, 8]",
        "[]"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `classmethod` in Python?",
      "options": [
        "A method that operates on an instance of the class.",
        "A method that receives the class itself as the first argument, implicitly bound to the class.",
        "A method that does not receive any implicit first argument.",
        "A method that can only be called from outside the class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which built-in function is used to apply a function to all items in an input list and return a new list?",
      "options": [
        "filter()",
        "reduce()",
        "map()",
        "apply()"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `generator expression` in Python?",
      "options": [
        "A type of list comprehension that creates a list.",
        "A concise way to create an iterator without defining a full generator function.",
        "An expression used to generate random numbers.",
        "A syntax for defining class methods."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndef get_square(num):\n    return num * num\n\nsquares = map(get_square, [1, 2, 3])\nprint(list(squares))\n```",
      "options": [
        "[1, 2, 3]",
        "[1, 4, 9]",
        "[2, 4, 6]",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `yield` keyword do in Python?",
      "options": [
        "It returns a value and exits the function permanently.",
        "It pauses function execution and returns a value, allowing the function to resume later.",
        "It raises an exception.",
        "It defines a global variable."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "How do you handle multiple specific exceptions in a single `except` block?",
      "options": [
        "except (TypeError, ValueError):",
        "except TypeError, ValueError:",
        "except TypeError and ValueError:",
        "except all:"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `__str__` method in a class?",
      "options": [
        "To convert an object to a string for debugging purposes.",
        "To define the official string representation of an object, intended for user-friendly output.",
        "To compare two objects.",
        "To create a new instance of the class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `PEP 8` in Python?",
      "options": [
        "A specific Python version.",
        "A package installer.",
        "The official style guide for Python code.",
        "A built-in data type."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndata = {'a': 1, 'b': 2, 'c': 3}\nfor key, value in data.items():\n    print(f'{key}={value}')\n```",
      "options": [
        "a=1\nb=2\nc=3",
        "a\nb\nc",
        "1\n2\n3",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which of these best describes a `set` in Python?",
      "options": [
        "An ordered collection of unique items.",
        "An unordered collection of unique items.",
        "An ordered collection of items, allowing duplicates.",
        "A mapping of keys to values."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following?\n```python\nclass Parent:\n    def greeting(self):\n        print('Hello from Parent')\n\nclass Child(Parent):\n    def greeting(self):\n        print('Hello from Child')\n\nobj = Child()\nobj.greeting()\n```",
      "options": [
        "Hello from Parent",
        "Hello from Child",
        "Error",
        "None"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `with open(...) as f:` statement?",
      "options": [
        "It's a faster way to open files.",
        "It automatically handles closing the file, even if errors occur.",
        "It only allows reading from the file.",
        "It encrypts the file content."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\nimport math\nprint(math.floor(4.7))\n```",
      "options": [
        "4.0",
        "4",
        "5",
        "4.7"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `mypy` primarily used for in Python development?",
      "options": [
        "Running unit tests.",
        "Checking for type errors in Python code.",
        "Optimizing Python code for performance.",
        "Managing project dependencies."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `pickle` module used for?",
      "options": [
        "For managing data in a database.",
        "For serializing and deserializing Python objects to/from a byte stream.",
        "For creating graphical user interfaces.",
        "For performing mathematical calculations."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndef modify_list(lst):\n    lst.append(4)\n\nmy_list = [1, 2, 3]\nmodify_list(my_list)\nprint(my_list)\n```",
      "options": [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "Error",
        "None"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which magic method is called when you use the `+` operator on instances of a class?",
      "options": [
        "__add__",
        "__plus__",
        "__sum__",
        "__concat__"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\nnumbers = [10, 20, 30]\nindex_of_20 = numbers.index(20)\nprint(index_of_20)\n```",
      "options": [
        "1",
        "2",
        "0",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is `venv` in Python?",
      "options": [
        "A tool for creating virtual reality applications.",
        "A way to manage multiple Python versions on one system.",
        "A tool for creating isolated Python environments.",
        "A framework for web development."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the concept of 'duck typing' in Python?",
      "options": [
        "If it looks like a duck and quacks like a duck, it's a duck (focus on behavior, not type).",
        "A strict type checking system.",
        "A method for optimizing code performance.",
        "A way to define interfaces."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the result of `\"Python\".replace('o', 'O')`?",
      "options": [
        "PythOn",
        "PythOn",
        "PythOn",
        "PythOn"
      ],
      "correct": 0,
      "level": "intermediate"
    }
  ],
  JesusTheMessiah :[
    {
      "question": "The Intertestamental period between OT & NT was how many years?",
      "options": [
        "200 years",
        "700 Years",
        "400 Years",
        "300 Years"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The entire Palestine was made up of about how many provinces?",
      "options": [
        "10",
        "40",
        "80",
        "50"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The lake of Gennesaret was famous for its --- ?",
      "options": [
        "Farming",
        "Trade",
        "Fishing",
        "Religion"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The region where Jesus was born is called?",
      "options": [
        "Jerusalem",
        "Judea",
        "Bethlehem",
        "Nazareth"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which City is the Capital of Jewish Nation?",
      "options": [
        "Jerusalem",
        "Egypt",
        "Judea",
        "Palestine"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "In the Role of Trinity in the plan of redemption, God the Son ________?",
      "options": [
        "Saves",
        "Protects",
        "Yields",
        "Gives"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of the following is a special means of God’s Revelation to us today?",
      "options": [
        "Holy spirit",
        "Nature",
        "Angels",
        "Holy Bible"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The Bible as a means of God’s Revelation can be proved in ?",
      "options": [
        "2 Peter 1:21",
        "John 14:8",
        "John 14:9",
        "Genesis 1:2"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "One of the following makes Jesus Christ Unique?",
      "options": [
        "He fell from heaven",
        "He could talk to God",
        "He had Powers",
        "Numerous Prophecies point to Him in the Old Testament"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "All These Shows that Jesus Christ is God except?",
      "options": [
        "A member of the Trinity",
        "He can forgive Sins",
        "He could walk on water",
        "He receives worship"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Revelation through Christ is?",
      "options": [
        "Holy",
        "Perfect",
        "Personal",
        "B & C"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The first promise in the Bible is recorded in ______?",
      "options": [
        "Gen. 1 : 15",
        "Gen 3:15",
        "John 3:16",
        "C&B"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "“The prophecy about the birth of Jesus was foretold in ---- and ------?",
      "options": [
        "Isa. 7:14 & Isa. 9:6",
        "Isa. 14:7 & Isa. 7:14",
        "Dan. 7;14 & Isa. 8:20",
        "All of the above"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "One of the following does not identify who Jesus Christ is ?",
      "options": [
        "The Head of the disciples",
        "The Son of God",
        "God",
        "The creator"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "_________ is not among the meaning of the Image in King Nebuchadnezzar dream.",
      "options": [
        "Head of gold",
        "Breast/Arm of silver",
        "Stomach of diamond",
        "Legs of Iron"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The evidences of the fullness of time does not includes ?",
      "options": [
        "Political Preparation",
        "Economic Preparation",
        "Social Preparation",
        "Religious preparation"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The principle that man can save himself by his own works is the foundation of?",
      "options": [
        "The Sadducees",
        "Heathens",
        "Scribes",
        "Jews"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "_________ is the Right, appropriate time for an event to occur?",
      "options": [
        "Occasion",
        "When God says",
        "The Fullness of Time",
        "BU Run"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Koine Dialektos means?",
      "options": [
        "Language",
        "Common dialect",
        "Greek dialect",
        "Dialect"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "According to the Economic preparation for the Fullness of time ___ of every 5 persons were slaves?",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "When was The Fullness of Time?",
      "options": [
        "The death of Jesus",
        "The Resurrection of Jesus",
        "The Birth of Jesus",
        "Angels Gabriel Announcement"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Through the symbols of Great darkness and Smoking furnace God Revealed?",
      "options": [
        "Great Suffering",
        "Wickedness in The world",
        "Bondage of Israel in Egypt",
        "Death in The World"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Saviour’s Coming was first Foretold in _____?",
      "options": [
        "The Bible",
        "Garden of Eden",
        "Heaven",
        "Earth"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "One of The Following is Not a Reason why Christ came to Earth?",
      "options": [
        "To lift Humanity",
        "To Expel Demons That tempt Man",
        "To catch cruise",
        "To reconcile Man back to God."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What was the common language spoken at the Roman period?",
      "options": [
        "Hebrews",
        "Greek",
        "Roman",
        "Aramaic"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How many regions was Palestine divided into?",
      "options": [
        "10",
        "14",
        "7",
        "2"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The gospel tells these about Jesus except?",
      "options": [
        "His Ministry",
        "His Relationship",
        "His Second coming",
        "His Death"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The synoptic gospel consists of ______",
      "options": [
        "Matthew, John and Mark",
        "Luke, Matthew and John",
        "Mark, Luke and Matthew",
        "Matthew, Mark and John"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these is not an epistle in the Bible?",
      "options": [
        "Acts of Apostles",
        "Galatians",
        "James",
        "Titus"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which Herod participated most in the events recorded in the Gospels?",
      "options": [
        "Herod Philip",
        "Herod Archelaus",
        "Herod the Great",
        "Herod Antipas"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which religious group did not believe in life after death or in angels or spirits?",
      "options": [
        "The Pharisees",
        "The Essenes",
        "The Sadducees",
        "The Scribes"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The two people that were given magician names are?",
      "options": [
        "Joseph and Daniel",
        "Daniel and Elijah",
        "Pharaoh and Moses",
        "Caleb and Joshua"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The language Jesus spoke was?",
      "options": [
        "Greek",
        "Latin",
        "Aramaic",
        "Hebrew"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The major religious festivals during Jesus on Earth were these except?",
      "options": [
        "Passover",
        "Easter",
        "Pentecost",
        "Tabernacles"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "One of these is not a brother of Jesus?",
      "options": [
        "James",
        "Judas",
        "Joseph",
        "John"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Jesus was baptized in the year?",
      "options": [
        "AD 27",
        "AD 31",
        "AD 34",
        "457BC"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The following are prerequisites to baptism except?",
      "options": [
        "Repentance",
        "Fasting",
        "Instruction",
        "Faith"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Baptism means ____, ______ and ______",
      "options": [
        "Life, Death and Burial",
        "Life, Death and Resurrection",
        "Death, Burial and Ascension",
        "Death, Burial and Resurrection"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "These bible texts spoke about the baptism of Jesus except?",
      "options": [
        "Luke 3:21-22",
        "Mark 1:9-11",
        "John 2:3-5",
        "Matthew 3:13-17"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The second temptation of Jesus Christ was about ________?",
      "options": [
        "Presumption",
        "Appetite",
        "Materialism",
        "Compromise"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Jesus response to the second temptation was ______?",
      "options": [
        "Man shall not live by bread alone",
        "Get behind me Satan",
        "You shall worship the lord your God, and him only shall you serve",
        "You shall not tempt the Lord your God"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "It was during the reign of ________ that the family of Jesus returned from hiding in Egypt",
      "options": [
        "Herod Achelous",
        "Herod the Great",
        "Herod Antipas",
        "Herod Philip"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The Greek word for Baptism is?",
      "options": [
        "Baptizom",
        "Baptiasm",
        "Baptizo",
        "Baptism"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these does not describe the works of the Scribes?",
      "options": [
        "Writing",
        "Record keeping",
        "Teaching of the Law",
        "Temple keeping"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "In the religious context, the process of collecting books recognized as authoritative scripture is called_______",
      "options": [
        "Inspiration",
        "Canonization",
        "Bible collection",
        "Revelation"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which books of the Bible describes the apocalyptic book and historical book of the New testament respectively?",
      "options": [
        "Acts of the Apostles, Revelation",
        "Revelation, Matthew",
        "Revelation, Acts of the Apostles",
        "Matthew, Acts of Apostles"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Kingdom of God also referred to as ------?",
      "options": [
        "Kingdom of Earth",
        "Kingdom of power",
        "Kingdom of the saints",
        "Kingdom of Glory"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "“Behold, a young woman shall conceive and bear a son, and shall call his name Immanuel”. This text can be found in what book of the Bible?",
      "options": [
        "Isaiah 7:14",
        "Matthew 1:21",
        "Isaiah 1:21",
        "Matthew 7:14"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these best describe the dual nature of Jesus Christ when on earth?",
      "options": [
        "Jesus was more of God than human",
        "Jesus was more of human than God",
        "Jesus was hundred percent God and hundred percent human",
        "Jesus was fifty percent God and fifty percent human"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which bible text is popularly referred to as the first gospel?",
      "options": [
        "Genesis 1:1",
        "Genesis 2:15",
        "Genesis 3:15",
        "John 3:16"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The following are the three factors that contributed to the political preparation pointing to the fullness of time except?",
      "options": [
        "Translation of the Old Testament into Greek",
        "Common Language",
        "Good Road System",
        "Roman Peace"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The gifts the wise men presented to are?",
      "options": [
        "Gold, Silver and Bronze",
        "Gold, Silver and Frankincense",
        "Gold, Frankincense and Myrrh",
        "Gold, Silver and Myrrh"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which Herod wanted to kill Jesus at his birth?",
      "options": [
        "Herod Antipas",
        "Herod Philip",
        "Herod the Great",
        "Herod Archelaus"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The period of impurity of the mother of a female child is ________",
      "options": [
        "40days",
        "80days",
        "60days",
        "20days"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which two notable people in the Old Testament played the role of Magi?",
      "options": [
        "Abraham and Isaac",
        "Joseph and David",
        "Daniel and Jacob",
        "Daniel and Joseph"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The three prerequisite to Baptism does not includes?",
      "options": [
        "Acceptance",
        "Faith",
        "Instruction",
        "Repentance"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The Greek term, baptizo means to ____",
      "options": [
        "Pour",
        "Immerse",
        "Sprinkle",
        "Bath"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Jesus was crucified in the year _____",
      "options": [
        "AD 27",
        "AD 29",
        "AD 31",
        "AD 33"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Kingdom of God possess five essential elements except?",
      "options": [
        "Kingship",
        "Authority",
        "Sovereignty",
        "humans"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "John 3:5: “…unless one is born of ____ and the _____, he cannot enter the kingdom of God”",
      "options": [
        "Fire, Spirit",
        "Water, Fire",
        "God, Spirit",
        "Water, Spirit"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What is the symbol of God’s sovereign reign?",
      "options": [
        "The word of God",
        "The Spirit of God",
        "The Kingdom of God",
        "The Name of God"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these does not characterize the Jewish view of the kingdom of God?",
      "options": [
        "An earthly Kingdom",
        "Guarantees present and eternal rest",
        "Citizen qualifies by nationality",
        "Established through military might"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The future consummation of the Kingdom of God which takes place at the second coming of Christ is also referred to as the _________",
      "options": [
        "Kingdom of Glory",
        "Kingdom of Grace",
        "Kingdom of Hope",
        "Kingdom of Gratitude"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The two major phases of realization of the Kingdom of God are?",
      "options": [
        "Past and Present",
        "Present and Future",
        "Past and Future",
        "None of the Above"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these contains the five essential elements of a kingdom?",
      "options": [
        "Humans, Power and Authority, Sovereignty, Territory and Kingship",
        "Sovereignty, Power and Authority, Kingship, Service and Territory",
        "Power and Authority, Buildings, Service, Humans and Territory",
        "Kingship, Service, Sovereignty, Humans and Buildings"
      ],
      "correct": 0,
      "level": "beginner"
    }
  ],
  Health_Principles:[
    {
      "question": "Which of these dimensions of health relates most closely to the individual’s relationship with nature and his most profound faith-based beliefs?",
      "options": [
        "Physical",
        "Emotional",
        "Spiritual",
        "Social"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following vitamins is directly involved in facilitating wound healing?",
      "options": [
        "Thiamine",
        "Ascorbic acid",
        "Pyridoxine",
        "Alpha tocopherol"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The end product of carbohydrate digestion important to the body is;",
      "options": [
        "Maltose",
        "Glucose",
        "Starch",
        "Amino Acid"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Proteins are useful in the body as;",
      "options": [
        "Primarily energy providing nutrients",
        "Providing insulation",
        "Energy given",
        "Body building nutrients"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "One of the following cells confer immunity",
      "options": [
        "Heterocytes",
        "Lymphatics",
        "Basophytes",
        "Lymphocytes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of the following is the major vehicle for transporting all materials such as salt, nutrients waste product within the system?",
      "options": [
        "Protein",
        "Sugar",
        "Urine",
        "Water"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The process by which particular trait or characteristics are transmitted from parents to their offspring is",
      "options": [
        "Pigmentation and Heredity/Biology",
        "Pigmentation",
        "Heredity/ Biology",
        "Companionship"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "A Living organism is characterized by the following EXCEPT",
      "options": [
        "Growth",
        "Movement",
        "Reproduction",
        "Floating"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which one of the following is a NOT associated with Lipid/Fat digestion?",
      "options": [
        "Bile",
        "Polysaccharides",
        "Fatty acid",
        "Polysaccharides"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The digestion of protein begins in the",
      "options": [
        "Stomach",
        "Small intestine",
        "Mouth",
        "Stomach"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The water-soluble vitamins are designated because they dissolve well in?",
      "options": [
        "None of the above",
        "Fats and oil",
        "All of the above",
        "Oil"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The following may provide rich sources of protein EXCEPT",
      "options": [
        "Tofu",
        "Maize",
        "Fish",
        "Legumes"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following may be appropriate source of protein for a vegetarian diet?",
      "options": [
        "All of the above",
        "Meat only",
        "Fish and milk only",
        "Diet having meat substitute, milk and eggs only"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The issue of health is not a new concept. The Biblical foundations of health and wellbeing involve",
      "options": [
        "Quarantine practices documented in Leviticus",
        "Sanitation communicated to the Jews in the bible",
        "All of the above",
        "Social interactions and civil order which guided the Jews as they crossed the wilderness"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Health care services include the following EXCEPT",
      "options": [
        "Clerical services",
        "Nursing care",
        "Laboratory diagnostics",
        "Clerical services"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Taking appropriate amounts of all nutrients in the correct proportion to meet the requirement of the body cells is regarded as",
      "options": [
        "Food",
        "All of the Above",
        "Balanced diet",
        "Nutrient"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which ONE of these describes the social dimension of health",
      "options": [
        "Level of poverty",
        "Strife for meaning",
        "Relationships between individuals",
        "The sentiments expressed by an individual about health"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "In drug abuse, cellular changes which develops enabling the individual to function normally only as the drug is present may be regarded as",
      "options": [
        "Drug misuse",
        "Physical dependence",
        "Compulsive use pattern",
        "Tolerance"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are substances with abuse potential, which of them is a stimulant?",
      "options": [
        "Opium",
        "Amphetamine",
        "Morphine",
        "Heroine"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Indian hemp is also known as",
      "options": [
        "Ganja",
        "All of the Above",
        "Weed",
        "Pot"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "When Indian hemp is smoked one of the following is the effects produced",
      "options": [
        "Sedation",
        "All of the Above",
        "Hallucination",
        "No effects at all"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following drugs may be abused?",
      "options": [
        "All of the above",
        "Ampiclox",
        "Paracetamol",
        "Opium"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Any drug that has abuse potential must produce its effects",
      "options": [
        "Stomach only",
        "General effect in the body",
        "In the brain",
        "Liver"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Who among the following is in particular at greater risk of HIV infection?",
      "options": [
        "Those drinking alcohol",
        "Cocaine inhalers",
        "Injection drug users who share needles",
        "Those smoking Indian Hemp in groups."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "These constitute high-risk behaviour EXCEPT",
      "options": [
        "Smoking",
        "Multiple sex partners",
        "Exercise",
        "High salt diet"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Our behaviour is an important factor in health because",
      "options": [
        "Our value depends on our behaviour",
        "It determines how we view issues",
        "It determines where we come from",
        "What we do or fail to do impact on us"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "One of the methods for treating alcoholism may involve the use of",
      "options": [
        "None of the above",
        "Drugs such as antabuse",
        "Have cold shower many times a day",
        "Give more alcohol under strict supervision"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following systems will help in homeostatic control within the body?",
      "options": [
        "Integumentary System",
        "Skeletal System",
        "Endocrine System",
        "Circulatory"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Part of the human system that pumps and channels blood to and from the body is?",
      "options": [
        "Digestive system",
        "Endocrine system",
        "Integumentary System",
        "Circulatory system"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Functionally specialized cells grouped together are known as",
      "options": [
        "Organelles",
        "Tissues",
        "Organs",
        "Organ systems"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is not an example of Vitamins B complex?",
      "options": [
        "Thalamus",
        "Ascorbic acid",
        "Niacin",
        "Riboflavin"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "_____________ is the body system that fights against infectious organisms that cause diseases.",
      "options": [
        "Antibody",
        "Antigens",
        "Immune system",
        "Immunity"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Part of the human system that processes food",
      "options": [
        "Immune system",
        "Digestive system",
        "Endocrine system",
        "Circulatory system"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Genetic material is located within the cell",
      "options": [
        "Nucleus",
        "Cytoplasm",
        "Vacuole",
        "Nucleus"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The normal blood pressure is",
      "options": [
        "130/90mmHg",
        "133/93mmHg",
        "150/90mmHg",
        "120/80mmHg"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are functions of the skeleton EXCEPT",
      "options": [
        "Maintenance of the shape of the body",
        "Providing support for the body",
        "Controlling the growth rate in man",
        "Protection of the delicate internal organs"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The _________ is the outermost layer of skin",
      "options": [
        "Epicentric",
        "The epidermis",
        "Dermis",
        "Dermatitis"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Blood carrying oxygen is called _______",
      "options": [
        "Oxy hematocrit",
        "Oxy heamoglobin",
        "Oxy genated blood",
        "Oxy heamatitics"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following are not components of blood",
      "options": [
        "Red blood corpuscle (RBC)",
        "Erythrocyte (RBC)",
        "Plasma",
        "Oxy heamoglobin"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Parts of the brain consist of the following EXCEPT",
      "options": [
        "Cerebrum",
        "Leg",
        "Cerebellum",
        "Pons varolii"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are methods of preserving foods",
      "options": [
        "Salting",
        "All of these",
        "Addition of vinegar or accepted chemicals",
        "Drying"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The strong whitish cord that connects the bone to the bone is called________",
      "options": [
        "Triumph",
        "Tendon",
        "Ligament",
        "Tissue"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The human skeleton consists of _________ bones bound together by tough and relatively inelastic connective tissues",
      "options": [
        "180",
        "280",
        "204",
        "206"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The cardiovascular system has three types of blood vessels, EXCEPT",
      "options": [
        "Capillaries",
        "Arterioles",
        "Arteries",
        "Conduit pipe"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Different types of bone are these except",
      "options": [
        "Regular",
        "Short bone",
        "Long bone",
        "Flat bones"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Chlamydiaceae is a ________ disease",
      "options": [
        "Arthropods",
        "Water borne disease",
        "Air borne disease",
        "Sexually transmitted disease"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "All these are vectors of the following diseases except",
      "options": [
        "HIV/AIDS= Mosquito",
        "Malaria =Mosquitoes",
        "River blindness=Sandfly/blackfly",
        "Malaria =Mosquitoes"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is not possible ways by which HIV/AIDs can be transmitted?",
      "options": [
        "By direct contact e.g., hand shaking and eating together",
        "unprotected sexual intercourse",
        "Mother to child transmission",
        "Sharing of clippers,"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The smallest structural and functional unit of a living organism is the",
      "options": [
        "Cell",
        "Brain",
        "Cellulose",
        "Heart"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "A bean-shaped organ of the human system which filters blood and removes waste from the body",
      "options": [
        "Heart",
        "Liver",
        "Pancreas",
        "Kidney"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of the following does not form a layer of the heart?",
      "options": [
        "Myocardium",
        "Epidermis",
        "Endocardium",
        "Epicardium"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "In the cardiac cycle the period of relaxation and dilation is referred to as",
      "options": [
        "All of the above",
        "Diastolic",
        "Circadian rhythm",
        "Systolic"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The part of the brain responsible for memory amongst other reasoning functions is the",
      "options": [
        "Cerebellum",
        "Pons Varoli",
        "Cerebrum",
        "Medulla Oblongata"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which lobe of the brain contains the brain’s visual processing system?",
      "options": [
        "Parietal",
        "Occipital",
        "Frontal",
        "Temporal"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The human brain reaches its full size at about what age?",
      "options": [
        "7 years",
        "6 years",
        "4 years",
        "5 years"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "In a typical animal cell, the cytosol serves which of these functions",
      "options": [
        "Cover the cell",
        "Power generator",
        "Holds other organelles in place",
        "Synthesizes proteins"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The skin has a pH of between",
      "options": [
        "6.0 - 7.2",
        "4.6 - 8.0",
        "4.0 - 6.5",
        "7.6 - 8.8"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which best describes why the vagina’s pH should be maintained below 4.7",
      "options": [
        "Prevents bad odour",
        "All of the Above",
        "Neutralizes microbes",
        "Limits overgrowth of opportunistic microbes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is not a risk factor for acid-alkaline imbalance of the body?",
      "options": [
        "High protein diet in the form of meats, dairy and eggs",
        "Consuming fresh fruits daily",
        "Low consumption of vegetables and fruits",
        "Consuming processed food and beverages"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these conditions is not associated with an acid-alkaline imbalance?",
      "options": [
        "Adequate assimilation of minerals and nutrients",
        "Lethargy",
        "Osteoporosis",
        "Premature aging"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is an acidic vegetable?",
      "options": [
        "Carrots",
        "Cauliflower",
        "Cabbage",
        "Lentils"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is an alkaline cereal grain?",
      "options": [
        "Oat meal",
        "Wheat",
        "Millet",
        "White rice"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these represents the accurate ratio for maintaining good health in the acid-alkaline diet",
      "options": [
        "60% : 40%",
        "20% : 80%",
        "40% : 60%",
        "80% : 20%"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is most likely to occur to a person on a predominantly plant-based diet",
      "options": [
        "Iron deficiency",
        "Fatty acid deficiency",
        "Vitamin B deficiency",
        "Protein deficiency"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "A lacto-vegetarian",
      "options": [
        "A and C only",
        "Excludes meat, seafood, poultry and dairy products and includes eggs",
        "Excludes meat, eggs, seafood and poultry and includes milk products",
        "Consumes milk products"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these characteristics of cancerous cells is FALSE?",
      "options": [
        "Cancer cells stay immature",
        "Cancer cells stick together",
        "Cancer cells do not stop reproducing",
        "Cancer cells do not obey signals from other cells"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are false statements about Leukemia EXCEPT",
      "options": [
        "It starts in the immune system",
        "It begins in the bone marrow",
        "It begins in the CNS",
        "It begins in the bone and cartilage"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is a major symptom of Diabetes?",
      "options": [
        "Polydipsia",
        "All of the above",
        "Weight loss",
        "Glycosuria"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Mangoes, papaya, carrots, liver and kidney are all major sources of",
      "options": [
        "Vitamin C",
        "Vitamin B",
        "Vitamin E",
        "Vitamin A"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Soluble fibers best function to aid the body in",
      "options": [
        "Promoting regularity of bowel movement",
        "All of the Above",
        "Preventing constipation",
        "Maintaining even blood sugar"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The digestion of carbohydrates begins in",
      "options": [
        "The large intestine",
        "The stomach",
        "The small intestine",
        "The mouth"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are true of all animals in the safe non-toxic range EXCEPT",
      "options": [
        "They chew the cud but do not necessarily split the hoof",
        "They are herbivores",
        "They are in the lower level of the food chain",
        "They have split hoof and chew the cud"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "During the course of an average reproductive lifespan roughly_______eggs are produced",
      "options": [
        "500",
        "300",
        "400",
        "200"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The minimum time required for playing volley ball to maximize fitness is",
      "options": [
        "45 minutes",
        "20 minutes",
        "40 minutes",
        "30 minutes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The minimum time required to engage in skipping exercise is",
      "options": [
        "20 minutes",
        "30 minutes",
        "10 minutes",
        "15 minutes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are field related activities except",
      "options": [
        "Volleyball",
        "Triple jump",
        "Discus",
        "Shotput"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The interrelationship of an agent, host and the environment in the causation of disease can be explained by",
      "options": [
        "Socio-environmental model",
        "Germ theory",
        "Multifactorial causation theory",
        "Epidemiological triangle theory"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is regarded as a chronic disease condition?",
      "options": [
        "Malaria",
        "Cholera",
        "Tuberculosis",
        "Osteoporosis"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Infectious diseases are commonly prevented by",
      "options": [
        "Prescribed antibiotics",
        "Regular hand washing",
        "All of the above",
        "Hygienic food preparation"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The under listed behaviors are detrimental to human health.",
      "options": [
        "Unwholesome entertainment",
        "Drinking water",
        "a and b only",
        "Smoking,"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are part of the nine images of health. Health as:",
      "options": [
        "functionality, empowerment",
        "a balance of state, sense of well-being",
        "All of the above",
        "growth, transcendence"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The gifts given by God to man to enjoy his existence include all EXCEPT",
      "options": [
        "Life",
        "Companionship",
        "Sabbath",
        "Speech"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The ‘S’ in NEWSTART stands for",
      "options": [
        "Sabbath",
        "Sense",
        "Sunlight",
        "Solitude"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Limitations of the WHO definition of health includes all EXCEPT",
      "options": [
        "Measurement is difficult",
        "The definition is not ideal",
        "The definition is realistic",
        "The dimensions are inadequate"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "That which provides us the motivation to reach out and strive for meaning and purpose in life is described by",
      "options": [
        "Physical dimension",
        "Spiritual dimension",
        "Psychological",
        "Emotional dimension"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Being fit physically is explained by the image of health",
      "options": [
        "Health as functionality",
        "Balance of State",
        "Health as an antithesis of disease",
        "Goodness of fit"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Man’s ability to have and maintain relationships can be described by",
      "options": [
        "Emotional dimension",
        "Spiritual dimension",
        "Physical dimension",
        "Social dimension"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "A key part of our internal environment that determines our health is referred",
      "options": [
        "Health services",
        "Social factor",
        "Physical environment",
        "Genetic factor"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "___________is a protein produced when the body detects harmful substances",
      "options": [
        "Antibody",
        "Lymphocyte",
        "B-cells",
        "Antigen"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The excessive use of alcohol produces a condition known as______________",
      "options": [
        "Withdrawal",
        "Toxemia",
        "Alcoholism",
        "Intoxication"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The process of combining majorly plant-based food sources to increase biological value is best referred to as",
      "options": [
        "Protein combination",
        "Compliment",
        "Biological value increase",
        "Complementation"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The_______________ is the major site for alcohol metabolism",
      "options": [
        "Liver",
        "Kidney",
        "Liver",
        "Pancreas"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The part of the tongue responsible for sour taste sensation is the",
      "options": [
        "Side",
        "Middle",
        "Side",
        "Front"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The immune system is made up of the following EXCEPT",
      "options": [
        "Thymus",
        "Lymph vessels",
        "Pancreas",
        "White blood cells"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The provision of services in order to promote health through prevention of human contact with harmful wastes is referred to as _____",
      "options": [
        "Sanitizing",
        "health education",
        "Environmental sanitation",
        "Human cleaning"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Flesh foods were first introduced",
      "options": [
        "After the flood",
        "After the flood",
        "Before the flood",
        "During the flood"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The totality of processes by which humans grow, repair and maintain body tissues through the ingestion and utilization of food is referred to as__________",
      "options": [
        "Nutrition",
        "Digestion",
        "Food intake",
        "Nutrient digestion"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "This organelle is vital for the release of energy and aerobic respiration in humans",
      "options": [
        "Reticulum",
        "Vacuole",
        "Mitochondrion",
        "Chloroplast"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Inappropriate use of prescribed or non-prescribed drugs is referred to as",
      "options": [
        "Drug addiction",
        "Prescription drug misuse",
        "Drug misuse",
        "Drug abuse"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Heroine, morphine, and alcoholic beverages are all examples of",
      "options": [
        "Hypno sedative",
        "Depressants",
        "Opiates",
        "Opioids"
      ],
      "correct": 1,
      "level": "beginner"
    }
  ],
};
