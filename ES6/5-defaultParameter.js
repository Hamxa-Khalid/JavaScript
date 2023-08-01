/**
 Create a function called greet that takes two parameters: name and greeting. 
 The greeting parameter should default to 'Hello' if not provided.
 */
const defaultFunction = (name, greeting = "hello") => {
  return console.log(`${greeting} ${name}`);
};

defaultFunction("hamza");
