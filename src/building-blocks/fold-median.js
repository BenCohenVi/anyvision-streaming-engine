import { RESULT } from './types';

const foldMedian = {
  type: RESULT,
  execute: (numbers) => {
    const len = numbers.length;
    const mid = Math.ceil(len / 2);
    return len % 2 === 0 ? (numbers[mid] + numbers[mid - 1]) / 2 : numbers[mid - 1];
  },
};

export default foldMedian;
