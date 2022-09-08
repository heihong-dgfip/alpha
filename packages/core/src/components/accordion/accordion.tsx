
import { Component, Host, h, Element, Prop } from '@stencil/core';
import api from '../../engine/core/api';

@Component({
  tag: 'fr-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  @Element() el!: HTMLElement;
  private accordionId = `fr-accordion-${accordionIds++}`;
  @Prop({ reflect: true }) titleType!: string;
  @Prop({ reflect: true }) title!: string;

  connectedCallback() {
    api.connectCustomElement(this.el);
  }

  disconnectedCallback() {
    api.disconnectCustomElement(this.el);
  }

  render() {
    return (
      <Host>
        <section class="fr-accordion">
          <this.titleType>
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls={this.accordionId}>
              {this.title}
            </button>
          </this.titleType>
          <div class="fr-collapse" id={this.accordionId}>
            <slot></slot>
          </div>
        </section>
      </Host>
    );
  }
}

let accordionIds = 0;
