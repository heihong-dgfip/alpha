import { Component, h, Element } from '@stencil/core';
@Component({
  tag: 'fr-header-tools-links',
  styleUrl: 'header-tools-links.scss',
  shadow: true,
})
export class HeaderToolsLinks {
  @Element() el!: HTMLElement;
  private links = [];
  componentWillLoad() {
    let linkTemplate = this.el.querySelectorAll('fr-link');
    if (!!linkTemplate) {
      for (const item of Array.from(linkTemplate)) {
        const link = {
          textContent: item.textContent,
          href: item.href,
          icon: null,
        };
        let iconTemplate = item.querySelector('fr-icon');
        if (iconTemplate) {
          link.icon = iconTemplate.name || iconTemplate.getAttribute('name');
        }
        this.links.push(link);
      }
    }
  }

  render() {
    let template = this.links.map(({ textContent, href, icon }) => {
      if (icon) {
        return (
          <li>
            <fr-link href={href} chip size="sm">
              {textContent}
              <fr-icon slot="left" name={icon}></fr-icon>
            </fr-link>
          </li>
        );
      } else {
        return (
          <li>
            <fr-link href={href} chip size="sm">
              {textContent}
            </fr-link>
          </li>
        );
      }
    });
    return (
      <div class="fr-header__tools-links">
        <ul class="fr-links-group">{template}</ul>
      </div>
    );
  }
}
