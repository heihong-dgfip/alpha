import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'fr-summary',
  styleUrl: 'summary.scss',
  shadow: true,
})
export class Summary {
  @Prop({ reflect: true }) ariaLabelledby?: string;
  @Prop({ reflect: true, mutable: true }) links = [];
  render() {
    return (
      <Host>
        <nav class="fr-summary" role="navigation" aria-labelledby={this.ariaLabelledby}>
          <div class="fr-summary__title" id={this.ariaLabelledby}>
            Sommaire
          </div>
          <ol class="fr-summary__list">
            {this.links.map(({ href, textlink }) => (
              <li>
                <a class="fr-summary__link" href={href}>
                  {textlink}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Host>
    );
  }
}
