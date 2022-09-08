import { Component, Host, Prop, h, Element } from '@stencil/core';
import { LinkInterface } from '../../interface';
import api from '../../engine/breadcrumb/main';
import { inheritAttributes } from '../../utils/helpers';
@Component({
  tag: 'fr-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Element() el!: HTMLElement;
  private inheritedAttributes: { [k: string]: any } = {};
  private breadcrumbId = `fr-breadcrumb-${breadcrumbId++}`;

  @Prop({ mutable: true }) linksBreadcrumb: LinkInterface[] = [];


  connectedCallback() {
    api.connectCustomElement(this.el);
  }

  disconnectedCallback() {
    api.disconnectCustomElement(this.el);
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
    let native = Array.from(this.el.querySelectorAll('a'));
    if (native.length > 0 ) {
      const linksBreadcrumbCopy: LinkInterface[] = [];
      for (const {textContent, href} of native) {
        const link: LinkInterface = {textContent, href};
        linksBreadcrumbCopy.push(link);
      }
      this.linksBreadcrumb = [...linksBreadcrumbCopy];
    }
  }
  render() {
    let template;
    let linksBreadcrumbTemplate = this.linksBreadcrumb.map(({textContent,href})=>{
      if(href){
        template = <a class="fr-breadcrumb__link" href={href}>{textContent}</a>
      } else{
        template = <a class="fr-breadcrumb__link" aria-current="page">{textContent}</a>
      }
      return <li>{template}</li>;
      
    })
    return (
      <Host>
        <nav role="navigation" class="fr-breadcrumb"  {...this.inheritedAttributes}>
           <button class="fr-breadcrumb__button" aria-expanded="false" aria-controls={this.breadcrumbId}>Voir le fil d’Ariane</button>
          <div class="fr-collapse" id={this.breadcrumbId} >
            <ol class="fr-breadcrumb__list">
              {linksBreadcrumbTemplate}
            </ol>
          </div>
        </nav>
      </Host>
    );
  }
}
let breadcrumbId = 0;
