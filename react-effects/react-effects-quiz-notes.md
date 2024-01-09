# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

-appears on screen for the first time

- What is a React Effect?

-code that runs when a component is rendered

- When should you use an Effect and when should you not use an Effect?

-when you want code to run external to your component

- When do Effects run?

-after a render

- What function is used to declare an Effect?

-useEffect()

- What are Effect dependencies and how do you declare them?

-last argument in useEffect(), array whose elements are depended on by the effect to run

- Why would you want to clean up from an Effect?

-efficiency, clean up bugs, etc

- How do you clean up from an Effect?

-clean up function

- When does the cleanup function run?

-each time before the Effect runs again and when the component unmounts

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
