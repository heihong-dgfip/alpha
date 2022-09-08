// @ts-nocheck
import { Collection } from './utilities/collection';

class Module extends Collection {
  constructor (type) {
    super();
    this.type = type;
    this.isActive = false;
  }

  activate () {}
  deactivate () {}
}

export { Module };
