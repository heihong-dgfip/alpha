import { Component, Host, Element, Prop, h } from '@stencil/core';
import api from '../../engine/buttons/main';
@Component({
  tag: 'fr-btns',
  styleUrl: 'buttons.scss',
  shadow: true,
})
export class Buttons {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) position?: 'center' | 'right';

  connectedCallback() {
    api.connectCustomElement(this.el);
  }

  disconnectedCallback() {
    api.disconnectCustomElement(this.el);
  }

  render() {
    return (
      <Host>
        <div
          role="group"
          class={{
            'fr-btns-group': true,
            [`fr-btns-group--${this.position}`]: this.position !== undefined,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
