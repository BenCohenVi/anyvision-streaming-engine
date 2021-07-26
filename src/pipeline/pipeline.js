import {
  TRANSFORM, FIXED_EVENT_WINDOW, RESULT, INPUT, OUTPUT,
} from '../building-blocks/types';

const runPipeline = async (steps) => {
  console.log('pipeline started');
  while (true) {
    let history = [];
    let currentResult;
    for (let i = 0; i < steps.length; i += 1) {
      const step = steps[i];
      switch (step.type) {
        case INPUT: {
          history.push(await step.execute());
          break;
        }
        case TRANSFORM: {
          history = step.execute(history);
          break;
        }
        case FIXED_EVENT_WINDOW: {
          const [result, currentWindow] = step.execute(history);
          if (!result) { // resetting the pipeline
            i = -1;
            history = [];
          } else {
            history = currentWindow;
          }
          break;
        }
        case RESULT: {
          currentResult = step.execute(history);
          history = [currentResult];
          break;
        }
        case OUTPUT: {
          step.execute(currentResult);
          break;
        }
        default: {
          throw new Error('entered invalid step');
        }
      }
    }

    console.log('pipeline finished, starting over');
  }
};

export default runPipeline;
