# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

-conditional operators used to check if statements are truthy or falsy and return truthy or falsy respectively

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

-if a value is evaluated to falsy the statement 'short circuits' or stop, not evaluating any code after

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

-if value left of operand is null or undefined it will return the right hand value, otherwise it will return left

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

-takes three operands, if a statement is truthy it will run expression after ?, otherwise will move to expression after :

- What is the `?.` (optional chaining) operator? When would you use it?

-if property or function called using this is undefined or null, will short circuit and return undefined

- What is `...` (spread) syntax? How do you use it with arrays and objects?

-easier way to copy arrays or objects into new ones

- What data types can be spread into an array? Into an object?

-all primitives can be spread in objects, only iterable values in arrays

- How does spread syntax differ from rest syntax?

-it is the opposite, expanding instead of condensing

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
