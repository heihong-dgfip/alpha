import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'fr-callout',
  styleUrl: 'callout.scss',
  shadow: true
})
export class Callout {

  @Element() el!: HTMLElement;

  render() {
    return (
      <div class="fr-callout">

        <slot name="icon"></slot>

        <slot name="title"></slot>

        <p class="fr-callout__text">
          <slot></slot>
        </p>

        <slot name="action"></slot>
      </div>
    )
  }

}
