// @ts-nocheck
import { Register } from './register/register';
import { Stage } from './stage/stage';
import { Renderer } from './render/renderer';
import { Resizer } from './resize/resizer';
import { ScrollLocker } from './scroll/scroll-locker';
import { Load } from './load/load';
import inspector from './inspect/inspector';
import state from './state';

class Engine {
  constructor () {
    state.create(Register);
    state.create(Stage);
    state.create(Renderer);
    state.create(Resizer);
    state.create(ScrollLocker);
    state.create(Load);

    const registerModule = state.getModule('register');
    this.register = registerModule.register.bind(registerModule);
  }

  get isActive () {
    return state.isActive;
  }

  start () {
    inspector.debug('START');
    state.isActive = true;
  }

  stop () {
    inspector.debug('STOP');
    state.isActive = false;
  }
}

const engine = new Engine();
export default engine;
