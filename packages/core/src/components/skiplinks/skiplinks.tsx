import { Component, Host, h, Element,Prop } from '@stencil/core';
import { LinkInterface } from '../../interface';
import { inheritAttributes } from '../../utils/helpers';
@Component({
  tag: 'fr-skiplinks',
  styleUrl: 'skiplinks.scss',
  shadow: true,
})
export class Skiplinks {
  @Element() el!: HTMLElement;
   private inheritedAttributes: { [k: string]: any } = {};
  @Prop({ mutable: true }) links:LinkInterface[] = [];
 
  componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
   let native =  Array.from(this.el.querySelectorAll('a'));
    if (native.length > 0) {
      const linkCopy: LinkInterface[] = [];
      for (const {textContent, href} of native) {
        const link: LinkInterface = {textContent,href};
        linkCopy.push(link);
      }
      this.links = [...linkCopy];
    }
  }
  render() {
    let linksTemplate = this.links.map(({textContent,href})=>(
      <li>
         <fr-link chip href={href}>{textContent}</fr-link>
      </li>
    ));

    return (
      <Host>
        <div class="fr-skiplinks">
          <fr-container>
            <nav role="navigation" {...this.inheritedAttributes}>
               <ul class="fr-skiplinks__list">
                 {linksTemplate}
              </ul>
            </nav>
          </fr-container>
        </div>
      </Host>
    );
  }
}
