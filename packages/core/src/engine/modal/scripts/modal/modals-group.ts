// @ts-nocheck
import api from '../../api';
import { FocusTrap } from './focus-trap';

class ModalsGroup extends api.core.DisclosuresGroup {
  constructor () {
    super('Modal', false);
    this.trap = new FocusTrap();
  }

  apply (value, initial) {
    super.apply(value, initial);
    if (this.current === null) this.trap.untrap();
    else this.trap.trap(this.current.node);
  }
}

export { ModalsGroup };
