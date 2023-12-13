import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  const result = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', result);

  console.log(elapsed(), 'throwOnce Error:', e.message);
}

// Note: In the `catch` we are logging just `error.message` for illustration
// purposes. In actual code you will want to log `error` so that
// you get the stack trace.
async function throwSeveral(): Promise<void> {
  const result = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', result);
  const result2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', result2);
  const result3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', result3);

  console.log(elapsed(), 'throwSeveral Error:', e.message);
}

async function throwChained(): Promise<void> {
  const result = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', result);
  const result2 = await read(result, false);
  console.log(elapsed(), 'throwChained2:', result2);
  const result3 = await read(result2, false);
  console.log(elapsed(), 'throwChained3:', result3);

  console.log(elapsed(), 'throwChained Error:', e.message);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (e) {
  console.log('This should be a single error message:', e.message);
}
