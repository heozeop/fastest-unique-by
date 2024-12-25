import { Injectable } from '@nestjs/common';
import uniqBy from 'lodash/unionBy';
import { Set as ImmutableSet } from 'immutable';

@Injectable()
export class UniquebyService {
  uniqueBySet<T, K extends keyof T>(array: T[], key: K) {
    const seen = new Set();
    return array.filter((item) => {
      const keyValue = item[key];
      if (seen.has(keyValue)) {
        return false;
      }

      seen.add(keyValue);
      return true;
    });
  }

  uniqueByLodash<T, K extends keyof T>(array: T[], key: K) {
    return uniqBy(array, key);
  }

  uniqueByImmutableSet<T, K extends keyof T>(array: T[], key: K) {
    const seen = ImmutableSet();
    return array.filter((item) => {
      const keyValue = item[key];
      if (seen.has(keyValue)) {
        return false;
      }

      seen.add(keyValue);
      return true;
    });
  }
}
