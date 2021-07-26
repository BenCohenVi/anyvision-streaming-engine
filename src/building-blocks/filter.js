import { TRANSFORM } from './types';

const filter = (predicate) => ({
  type: TRANSFORM,
  execute: (numbers) => numbers.filter(predicate),
});

export default filter;
