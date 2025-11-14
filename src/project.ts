import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import event from './scenes/event?scene';
import outro from './scenes/outro?scene';

export const data = {
  title: 'Introdución ao control de versións con Git',
  desc: `
              La descripcion que me va a decir el pesado de iago
              Pensarias que me la habria leido ya
              Aprende a editar texto con vim, desde los conceptos basicos hasta los trucos avanzados que te haran sentir como un mago de verdad
  `,
  author: 'Emilio J. Padrón',
  tags: ["Git", "Open Source", "Dev"],
  startDate: new Date("2025-10-21T17:30"),
  endDate: new Date("2025-10-21T19:30")
}

export default makeProject({
  experimentalFeatures: true,
  scenes: [intro, event],
});
