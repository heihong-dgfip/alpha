import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'fr-tile',
  styleUrl: 'tile.scss',
  shadow: true,
})
export class Tile {
  /** Self component */
  @Element() el!: HTMLElement;

  /** optional extended link */
  @Prop({ reflect: true }) enlargeLink? = false;

  /** optional horizontal position */
  @Prop({ reflect: true }) horizontal? = false;

  /** mandatory hypertext link */
  @Prop({ reflect: true }) href!: string;

  /** mandatory title */
  @Prop({ reflect: true }) titre: string;

  /** mandatory title level (h1, h2 ... h6) */
  @Prop({ reflect: true }) titleType!: string;

  /**
   * factory of optional image slot
   */
  private imgTemplate() {
    return this.el.querySelector('[slot="img"]') ? (
      <div class="fr-tile__img">
        <slot name="img"></slot>
      </div>
    ) : null;
  }

  /**
   * factory of optional description slot
   */
  private descTemplate() {
    return this.el.querySelector('[slot="desc"]') ? (
      <div class="fr-tile__desc">
        <slot name="desc"></slot>
      </div>
    ) : null;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'fr-tile': true,
            'fr-tile--horizontal': this.horizontal,
            'fr-enlarge-link': this.enlargeLink,
          }}
        >
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <this.titleType>
                <a href={this.href} class="fr-tile__link">
                  {this.titre}
                </a>
              </this.titleType>
            </div>
            {this.descTemplate()}
          </div>
          {this.imgTemplate()}
        </div>
      </Host>
    );
  }
}
