import { Component, Element, h, Prop } from '@stencil/core';


export type Size = 'sm' | 'md' | 'lg';

@Component({
  tag: 'fr-highlight',
  styleUrl: 'highlight.scss',
  shadow: true
})
export class Highlight {

  @Element() el!: HTMLElement;

  /**
  * Taille du highlight 'sm', 'md' ou 'lg'
  */
  @Prop({ reflect: true }) size?: Size;


  render() {
    const calculatedSize = ( this.size === 'sm'
                          || this.size === 'lg') ? `fr-text--${this.size}` : '';

    return (
      <div class="fr-highlight">
        <p class={calculatedSize}>
          <slot></slot>
        </p>
      </div>
    )
  }

}
