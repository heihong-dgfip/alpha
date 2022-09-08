import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-logo',
  styleUrl: 'logo.scss',
  shadow: true,
})
export class FfLogo {
  @Prop({ reflect: true }) size?: 'sm' | 'lg';
  render() {
    return (
      <Host>
        <p class={{ 'fr-logo': true, [`fr-logo--${this.size}`]: this.size !== undefined }}>
          République
          <br />
          Française
        </p>
      </Host>
    );
  }
}
