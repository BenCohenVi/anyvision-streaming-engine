import { FIXED_EVENT_WINDOW } from './types';

const fixedEventWindow = (size) => {
  let currentWindow = [];
  return {
    type: FIXED_EVENT_WINDOW,
    execute: (numbers) => {
      currentWindow.push(...numbers);
      if (currentWindow.length === size) {
        const finishedWindow = [...currentWindow];
        currentWindow = [];
        return [true, finishedWindow];
      }
      return [false, currentWindow];
    },
  };
};

export default fixedEventWindow;
