import { Component, Host, Prop, h } from '@stencil/core';
import { IconTypes } from './icon-types';

@Component({
  tag: 'fr-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Prop({ reflect: true }) name!: IconTypes;
  @Prop({ reflect: true }) size?: 'sm' | 'md' | 'lg';

  render() {
    return (
      <Host aria-hidden="true">
      </Host>
    );
  }
}
