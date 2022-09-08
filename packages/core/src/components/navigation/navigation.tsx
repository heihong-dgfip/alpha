import { Component, Host, h, Prop, Element } from '@stencil/core';
import { Links } from '../../interface';
import { inheritAttributes } from '../../utils/helpers';
@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: true,
})
export class Navigation {
  @Element() el!: HTMLElement;
  @Prop({ mutable: true }) links: Links[] = [];
   private inheritedAttributes: { [k: string]: any } = {};
 
  componentWillLoad() {
     this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
    let native = Array.from(this.el.querySelectorAll('a'));
    if (native.length > 0) {
      const linksCopy: Links[] = [];
      for (const item of native) {
        const link: Links = {
          textContent: item.textContent,
          href: item.href,
        };
        linksCopy.push(link);
      }
      this.links = [...linksCopy];
    }
  }
  render() {
    let linkTemplate = (
      <ul class="fr-nav__list">
        {this.links.map(({ textContent, href }) => (
          <li class="fr-nav__item">
            <a class="fr-nav__link" href={href} target="_self">
              {textContent}
            </a>
          </li>
        ))}
      </ul>
    );
    return (
      <Host>
        <nav class="fr-nav" role="navigation" {...this.inheritedAttributes}>
          {linkTemplate}
        </nav>
      </Host>
    );
  }
}
