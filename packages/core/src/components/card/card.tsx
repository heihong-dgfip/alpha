import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fr-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) enlargeLink? = false;
  @Prop({ reflect: true }) noArrow? = false;
  @Prop({ reflect: true }) horizontal? = false;
  @Prop({ reflect: true }) href: string;
  @Prop({ reflect: true }) title!: string;
  private imgTemplate;
  /**
   * balise for title
   */
  @Prop({ reflect: true }) titleType!: string;

  componentWillLoad() {
    if (this.el.querySelector('[slot="img"]')) {
      this.imgTemplate = (
        <div class="fr-card__img">
          <slot name="img"></slot>
        </div>
      );
    }
  }
  render() {
    return (
      <Host>
        <div
          class={{
            'fr-card': true,
            ['fr-card--no-arrow']: this.noArrow,
            ['fr-card--horizontal']: this.horizontal,
            ['fr-enlarge-link']: this.enlargeLink,
          }}
        >
          <div class="fr-card__body">
            <slot name="detail"></slot>
            <this.titleType>
              <a href={this.href} class="fr-card__link">
                {this.title}
              </a>
            </this.titleType>
            <slot></slot>
          </div>
          {this.imgTemplate}
        </div>
      </Host>
    );
  }
}
