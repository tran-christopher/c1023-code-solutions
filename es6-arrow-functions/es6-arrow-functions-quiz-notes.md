# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

-take away the function keyword and just have your parmeters folowed by => and you block statement

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

-it will return the value in the statement automatically

- When using _concise body syntax_, how do you return an object literal?

-wrap in parentheses

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  -the arrow function is ( => 42)

  - How many arguments does the arrow function take?

  -0

  - What value does it return?

  -42

  - How many arguments are passed to the function `foo`?

  -1

  - What type of argument is passed to the function `foo`?

  -function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

  -(y) => {
  console.log(`4y = ${4 \* y});
  }

  - How many arguments does the arrow function take?

  -1

  - What value does it return?

  -none

  - How many arguments are passed to the function `bar`?

  -1

  - What type of argument is passed to the function `bar`?

  -number

  - When does the arrow function's code get executed?

  -when bar is called with the arrow function as an argument

- How does the value of `this` differ between standard functions and arrow functions?

-in standard functions 'this' refers to the calling object (the function), in arrow functions 'this' is taken from lexical scope; they do not have their own value of 'this'

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
