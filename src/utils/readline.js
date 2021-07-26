import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text) => new Promise((resolve) => {
  rl.question(text, resolve);
});

const getInput = async (text = '') => {
  const value = await question(text);
  return value;
};

export default getInput;
