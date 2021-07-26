import stdinSource from './building-blocks/stdin-source';
import filter from './building-blocks/filter';
import foldSum from './building-blocks/fold-sum';
import foldMedian from './building-blocks/fold-median';
import stdoutSink from './building-blocks/stdout-sink';
import fixedEventWindow from './building-blocks/fixed-event-window';
import runPipeline from './pipeline/pipeline';

runPipeline([
  stdinSource,
  filter((x) => x > 0),
  fixedEventWindow(2),
  foldSum,
  fixedEventWindow(3),
  foldMedian,
  stdoutSink,
]);
