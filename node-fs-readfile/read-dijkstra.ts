import fs from 'node:fs/promises';

async function readDijkstra(): Promise<any> {
  try {
    const contents = await fs.readFile('dijkstra.txt', { encoding: 'utf-8' });
    console.log(contents);
  } catch (e) {
    console.log(e);
  }
}

readDijkstra();
