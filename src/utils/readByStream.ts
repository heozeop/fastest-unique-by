import fs from 'fs';
import { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamArray } from 'stream-json/streamers/StreamArray';

export function readFileWithStream(filePath: string) {
  return new Promise((res, rej) => {
    const data = [];

    const pipeline = chain([
      fs.createReadStream(filePath),
      parser(),
      streamArray(),
    ] as any);

    pipeline.on('data', ({ value }) => {
      data.push(value);
    });

    pipeline.on('end', () => {
      console.log('finished');
      res(data);
    });

    pipeline.on('error', (err) => {
      console.error('failed', err);
      rej(err);
    });
  });
}
