import { Component, h } from '@stencil/core';
@Component({
  tag: 'fr-valid-text',
  styleUrl: 'valid-text.scss',
  shadow: true,
})
export class ValidText {
  render() {
    return (
      <p class="fr-valid-text">
        <slot />
      </p>
    );
  }
}
