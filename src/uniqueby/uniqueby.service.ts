import { Injectable } from '@nestjs/common';

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
}