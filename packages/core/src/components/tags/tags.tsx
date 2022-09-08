import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'fr-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
 @Element() el!: HTMLElement;
  
  render() {
    
    return (
      <Host>
        <ul class="fr-tags-group">
         {Array.from(this.el.querySelectorAll('fr-tag')).map(({ textContent, href }) =>  (
            <li>
              <fr-tag href={href}>{textContent}</fr-tag>
            </li>))}
        </ul>
      </Host>
    );
  }
}
