export const lessons = [
  {
    id: "intro-to-python",
    title: "Introduction to Python",
    explanation: "Python is a popular programming language created by Guido van Rossum, and released in 1991. It is used for web development, software development, mathematics, and system scripting. Python's syntax is simple, elegant, and designed to look like readable English.",
    codeExample: 'print("Hello, World!")',
    expectedOutput: 'Hello, World!',
    quiz: {
      question: "What is Python primarily known for?",
      options: [
        "A. Being extremely difficult to read",
        "B. Its simple, elegant, and readable syntax",
        "C. Only being used for front-end web development",
        "D. Being a markup language"
      ],
      correctAnswer: "B. Its simple, elegant, and readable syntax"
    }
  },
  {
    id: "variables-and-data-types",
    title: "Variables and Data Types",
    explanation: "Variables are containers for storing data values. Unlike other languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. Common data types include integers, floats, strings, and booleans.",
    codeExample: `x = 10\nname = "Alice"\nis_student = True\nprint(name, "is", x, "years old.")`,
    expectedOutput: `Alice is 10 years old.`,
    quiz: {
      question: "What is the correct way to declare a variable in Python?",
      options: [
        "A. int x = 10",
        "B. x = 10",
        "C. var x = 10",
        "D. let x = 10"
      ],
      correctAnswer: "B. x = 10"
    }
  },
  {
    id: "conditional-statements",
    title: "Conditional Statements",
    explanation: "Python supports the usual logical conditions from mathematics (e.g., equals, not equals, less than, greater than). These conditions can be used in 'if statements' to perform different actions for different decisions.",
    codeExample: `temperature = 25\n\nif temperature > 30:\n    print("It's hot outside.")\nelif temperature > 20:\n    print("It's a nice day.")\nelse:\n    print("It's cold.")`,
    expectedOutput: `It's a nice day.`,
    quiz: {
      question: "Which keyword is used for an alternative condition in Python if the first is false?",
      options: [
        "A. else if",
        "B. elseif",
        "C. elif",
        "D. then"
      ],
      correctAnswer: "C. elif"
    }
  },
  {
    id: "loops",
    title: "Loops",
    explanation: "Python has two primitive loop commands: while loops and for loops. A 'for' loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).",
    codeExample: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)`,
    expectedOutput: `apple\nbanana\ncherry`,
    quiz: {
      question: "Which loop logic is best for iterating over a list format like fruits = ['apple', 'pear']?",
      options: [
        "A. do ... while",
        "B. for fruit in fruits:",
        "C. foreach (fruit in fruits)",
        "D. loop fruits:"
      ],
      correctAnswer: "B. for fruit in fruits:"
    }
  },
  {
    id: "functions",
    title: "Functions",
    explanation: "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result. In Python a function is defined using the def keyword.",
    codeExample: `def greet(name):\n    return "Hello " + name + "!"\n\nmessage = greet("Bob")\nprint(message)`,
    expectedOutput: `Hello Bob!`,
    quiz: {
      question: "Which keyword is used to create a function in Python?",
      options: [
        "A. function",
        "B. create",
        "C. def",
        "D. func"
      ],
      correctAnswer: "C. def"
    }
  },
  {
    id: "lists-and-dictionaries",
    title: "Lists and Dictionaries",
    explanation: "Lists are used to store multiple items in a single variable, maintaining an ordered sequence. Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered, changeable and does not allow duplicates.",
    codeExample: `person = {\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}\n\nprint(person["name"])\nprint("Age:", person.get("age"))`,
    expectedOutput: `John\nAge: 30`,
    quiz: {
      question: "How do you access the value of the key 'name' in a dictionary called person?",
      options: [
        "A. person(name)",
        "B. person{'name'}",
        "C. person['name']",
        "D. person.name()"
      ],
      correctAnswer: "C. person['name']"
    }
  }
];
