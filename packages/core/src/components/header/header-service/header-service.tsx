import { Component, h, Element, Prop } from '@stencil/core';
@Component({
  tag: 'fr-header-service',
  styleUrl: 'header-service.scss',
  shadow: true,
})
export class HeaderService {
  @Element() el!: HTMLElement;
  /**
   * home page url
   */
  @Prop({ reflect: true }) href: string = '/';
  private title: string;

  componentWillLoad() {
    let slotTitle = this.el.querySelector('[slot="title"]');
    if (slotTitle) {
      this.title = 'Accueil ' + slotTitle.textContent;
    }
  }

  render() {
    return (
      <div class="fr-header__service">
        <a href={this.href} title={this.title}>
          <slot name="title"></slot>
        </a>
        <slot></slot>
      </div>
    );
  }
}
