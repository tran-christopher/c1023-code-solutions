# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?

-async is used to define an asynchronous function, await allows us to wait for a promise to be fulfilled/rejected and get its value

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

-async and await allow us to write asynchronous code that looks and acts like synchronous code

- When do you use `async`?

-to define an asynchromous function

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

-in an async function, allowing us to wait until promise is fulfilled to grab value. If used on a synchronous function, nothing will change, function will run as normal

- How do you handle errors with `await`?

-using catch

- What do `try`, `catch` and `throw` do? When do you use them?

-try executes the code until an error is thrown; throw just gives an error when called, when the error is thrown catch is used to receive that value and run a different code block based on that

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

-javascript will run without waiting, can potentially mess up your code

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

-right now i like callbacks because they're the most familiar. I prefer async/await over promise.then syntax wise

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
