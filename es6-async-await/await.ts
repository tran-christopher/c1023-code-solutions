import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function readOnce(): Promise<void> {
//   return read('foo/bar.html')
//   .then((msg) =>
//     console.log(elapsed(), 'readOnce:', msg)
//   );
// }

async function readOnce(): Promise<void> {
  const result = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', result);
}

// function readSeveral(): Promise<void> {
//   return read('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral1:', msg);
//       return read('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral2:', msg);
//       return read('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
// }

async function readSeveral(): Promise<void> {
  const result = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', result);
  const result2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', result2);
  const result3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', result3);
}

// function readChained(): Promise<void> {
//   return read('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'readChained1:', msg1);
//       return read(msg1);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'readChained2:', msg2);
//       return read(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
// }

async function readChained(): Promise<void> {
  const result = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', result);
  const result2 = await read(result);
  console.log(elapsed(), 'readChained2:', result2);
  const result3 = await read(result2);
  console.log(elapsed(), 'readChained3:', result3);
}

// readOnce()
//   .then(() => readSeveral())
//   .then(() => readChained());

await readOnce();
await readSeveral();
await readChained();
