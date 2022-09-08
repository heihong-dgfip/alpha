import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-search',
  styleUrl: 'search.scss',
  shadow: true,
})
export class Search {
  @Prop({ reflect: true }) lg?: boolean;
  render() {
    return (
      <Host>
        <div class="fr-search-bar" id="search-782" role="search">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
