import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'fr-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class Alert {

  @Element() el!: HTMLElement;

  /**
  * Titre de l'alerte
  */
  @Prop({ reflect: true }) title: string;

  /**
  * Aspect de l'alerte: default | info | error | success
  */
  @Prop({ reflect: true }) type?: "info" | "error" | "success";

  /**
  * Ajoute un bouton de fermeture
  */
  @Prop({ reflect: true }) closable?: boolean;

  /**
  * Alerte refermable dans un collapse
  */
  @Prop({ reflect: true }) closableCollapsible?: boolean;

  /**
  * En combinaison avec l'attribut closableCollapsible
  * inserér un alert-id pour l'attribut aria-controls
  */
  @Prop({ reflect: true }) alertId?: string;

  /**
  * Alerte au format petit
  */
  @Prop({ reflect: true }) small?: boolean;



  connectedCallback() {
    const elt = this.el.querySelector('[slot="title"]');
    if (!this.title && !elt) {
      throw new Error('Alert must be initialized with a title attribute or a html hx element');
    }
  }

  private cleanAlert(event: Event) {;
    event.preventDefault();
    this.el.parentNode.removeChild(this.el);
  }

  private hideAlert(event: Event) {;
    event.preventDefault();
    this.el.parentNode.removeChild(this.el);
  }


  renderTitle() {
    if (!this.small) {
      if (this.title!!) {
        return <p class="fr-alert__title">{this.title}</p>;
      }
    }
  }

  renderLink() {
    if (this.closable || this.closableCollapsible) {
      return <fr-btn  close
                      icon-only
                      buttonTitle="Masquer le message"
                      aria-expanded={this.closableCollapsible ? 'true' : null}
                      aria-controls={this.closableCollapsible && this.alertId!! ? this.alertId : null}
                      onClick={(e) => this.closable ? this.cleanAlert(e) : this.hideAlert(e)}>
              </fr-btn>
    }
    return '';
  }

  render() {
    const alertClasses = {
      'fr-alert': true,
      'fr-alert--sm': this.small,
      [`fr-alert--${this.type}`]: (this.type !== undefined ? true : false)
    };
    const titleTpl = this.renderTitle();
    const linkTpl = this.renderLink();

    return (
      <div role="alert" class={alertClasses}>

        <slot name="icon"></slot>
        <slot name="title"></slot>

        {titleTpl}

        <p>
          <slot></slot>
        </p>

        {linkTpl}

      </div>
    )
  }
}
