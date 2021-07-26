import { OUTPUT } from './types';

const stdoutSink = {
  type: OUTPUT,
  execute: (key) => {
    console.log(key);
  },
};

export default stdoutSink;
