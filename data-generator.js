import fs from 'fs';
import { faker } from '@faker-js/faker';
import { Readable } from 'stream';

const total = 1_000_000;
const fileName = 'data.json';
const writable = fs.createWriteStream(fileName);
createJSONStream(total)
  .pipe(writable)
  .on('finish', () => console.log(`finished writing ${total} to ${fileName}`))
  .on('error', (err) =>
    console.error(`error writing ${total} to ${fileName}`, err),
  );

function createJSONStream(numberOfTotalItems) {
  let currentIndex = 0;
  let isFirst = true;

  const readable = new Readable({
    read() {
      if (currentIndex === 0) {
        this.push('[');
      }

      if (currentIndex < numberOfTotalItems) {
        const data = generator();

        const json = JSON.stringify(data);

        if (!isFirst) {
          this.push(',');
        } else {
          isFirst = false;
        }

        this.push(json);
        ++currentIndex;
      } else {
        this.push(']');
        this.push(null);
      }
    },
  });

  return readable;
}
function generator() {
  return {
    key: faker.phone.number().toString(),
    tempValue1: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue2: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue3: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue4: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue5: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue6: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue7: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue8: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue9: faker.lorem.sentence({ min: 3, max: 10 }),
    tempValue10: faker.lorem.sentence({ min: 3, max: 10 }),
  };
}
