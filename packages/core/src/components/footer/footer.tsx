import { Component, Host, Element, Prop, h } from '@stencil/core';
import { LinkInterface } from '../../interface';
@Component({
  tag: 'fr-footer',
  styleUrl: 'footer.scss',
  shadow: true,
})
export class Footer {
  @Element() el!: HTMLElement;
  /**
   * links of Legal Duties
   */
  @Prop({ mutable: true }) linkLegalDuties: LinkInterface[] = [];
  componentWillLoad() {
    let native = this.el.querySelector('[slot="linkLegalDuties"]') as HTMLElement;
    if (!!native) {
      const linkLegalDutiesCopy: LinkInterface[] = [];
      for (const {textContent, href} of Array.from(native.children) as HTMLLinkElement[]) {
        const bottomItem: LinkInterface = {textContent,  href};
        linkLegalDutiesCopy.push(bottomItem);
      }
      this.linkLegalDuties = [...linkLegalDutiesCopy];
    }
  }

  render() {
    let bottomListTemplate = (
      <ul class="fr-footer__bottom-list">
        {this.linkLegalDuties.map(({ textContent, href }) => (
          <li class="fr-footer__bottom-item">
            <a class="fr-footer__bottom-link" href={href}>
              {textContent}
            </a>
          </li>
        ))}
      </ul>
    );
    return (
      <Host>
        <footer class="fr-footer" role="contentinfo">
          <div class="fr-footer__bottom">
            {bottomListTemplate}
            <div class="fr-footer__bottom-copy">
              <slot name="licence"></slot>
            </div>
          </div>
        </footer>
      </Host>
    );
  }
}
