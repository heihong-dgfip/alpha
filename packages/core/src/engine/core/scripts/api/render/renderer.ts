// @ts-nocheck
import state from '../state';
import { Module } from '../module';
import { Collection } from '../utilities/collection';

class Renderer extends Module {
  constructor () {
    super('render');
    this.rendering = this.render.bind(this);
    this.nexts = new Collection();
  }

  activate () {
    window.requestAnimationFrame(this.rendering);
  }

  request (instance) {
    this.nexts.add(instance);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((instance) => instance.render());
    if (!this.nexts.length) return;
    const nexts = this.nexts.clone();
    this.nexts.clear();
    nexts.forEach((instance) => instance.next());
  }
}

export { Renderer };
