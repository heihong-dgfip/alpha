import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

import { RequireEventDetail } from '../../interface';

@Component({
  tag: 'fr-form',
})
export class Form {
  private native?: HTMLFormElement;

  @Element() el!: HTMLElement;

  /**
   * All fields required
   */
  @Prop({ reflect: true }) required: boolean = false;

  @Watch('required')
  protected requiredChanged() {
    this.frRequire.emit({
      required: this.required
    });
  }

  /**
   * Emitted when the required state has changed.
   */
  @Event() frRequire!: EventEmitter<RequireEventDetail>;

  componentWillLoad() {
    this.native = this.el.querySelector('form');
  }

  render() {
    if (!!this.native) {
      return <slot />;
    } else {
      return (
        <form>
          <slot />
        </form>
      );
    }
  }
}
