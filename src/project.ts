import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import event from './scenes/event?scene';
import outro from './scenes/outro?scene';

export default makeProject({
  experimentalFeatures: true,
  scenes: [intro, event, outro],
});
