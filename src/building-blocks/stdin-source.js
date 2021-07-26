import getInput from '../utils/readline';
import { INPUT } from './types';

const stdinSource = {
  type: INPUT,
  execute: async () => {
    const key = await getInput();
    console.log(`> ${key}`);
    return key;
  },
};

export default stdinSource;
