// @ts-nocheck
import { Instance } from '../api/register/instance';
import { EquisizedEmissions } from './equisized-emissions';

class Equisized extends Instance {
  init () {
    this.ascend(EquisizedEmissions.CHANGE);
  }

  measure () {
    this.style.width = 'auto';
    return this.getRect().width;
  }

  adjust (width) {
    this.style.width = `${width}px`;
  }

  dispose () {
    this.ascend(EquisizedEmissions.CHANGE);
  }
}

export { Equisized };
