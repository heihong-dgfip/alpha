import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class Tag {
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) href: string;
  @Prop({ reflect: true }) sm: boolean;
  render() {
    let template = (
      <a class={{ 'fr-tag': true, 'fr-tag--sm': this.sm }} href={this.href}>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </a>
    );
    if (!this.href) {
      template = (
        <p class="fr-tag">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </p>
      );
    }
    return <Host>{template}</Host>;
  }
}
