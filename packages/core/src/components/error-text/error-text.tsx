import { Component, h } from '@stencil/core';
@Component({
  tag: 'fr-error-text',
  styleUrl: 'error-text.scss',
  shadow: true,
})
export class ErrorText {
  render() {
    return (
      <p class="fr-error-text">
        <slot />
      </p>
    );
  }
}
