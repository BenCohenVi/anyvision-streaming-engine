import { RESULT } from './types';

const foldSum = {
  type: RESULT,
  execute: (numbers) => numbers.reduce((sum, currentNumber) => sum + currentNumber, 0),
};

export default foldSum;
