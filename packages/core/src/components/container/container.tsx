import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'fr-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container {
  /**
   * Fluid
   */
  @Prop({ reflect: true }) fluid: boolean = false;

  @Prop() fullHeight: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
