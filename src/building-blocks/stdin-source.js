import getInput from '../utils/readline';
import { INPUT } from './types';

const stdinSource = {
  type: INPUT,
  execute: async () => {
    let key;
    let isNumber = false;
    while (!isNumber) {
      key = +(await getInput());
      if (key) {
        isNumber = true;
      } else {
        console.log('please enter a value of type number');
      }
    }

    console.log(`> ${key}`);
    return key;
  },
};

export default stdinSource;
