import { Component, Element, Prop, h } from '@stencil/core';
import { ColRangeType } from '../../interface';

import api from '../../engine/modal/index';
// @ts-expect-error
api.register(api.modal.ModalSelectors.MODAL, api.modal.Modal);
// @ts-expect-error
api.register(api.modal.ModalSelectors.BODY, api.modal.ModalBody);
// @ts-expect-error
api.register(api.core.RootSelector.ROOT, api.modal.ModalsGroup);

@Component({
  tag: 'fr-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  private hasFooter = false;

  @Element() el!: HTMLElement;

  /**
   * Unique identifier
   */
  @Prop({ reflect: true }) frId!: string;

  /**
   * Title
   */
  @Prop({ reflect: true }) frTitle: string;

  /**
   * Size
   */
  @Prop({ reflect: true }) size?: 'sm' | 'lg';

  /**
   * Stack at top
   */
  @Prop({ reflect: true }) top = false;

  /**
   * full
   */
  @Prop() headerModal: boolean = false;

  connectedCallback() {
    api.connectCustomElement(this.el);
  }

  disconnectedCallback() {
    api.disconnectCustomElement(this.el);
  }

  componentWillLoad() {
    if (!!this.el.querySelector('[slot="footer"]')) {
      this.hasFooter = true;
    }
  }

  render() {
    let widthMd: ColRangeType, widthLg: ColRangeType;
    switch (this.size) {
      case 'sm':
        widthMd = 6;
        widthLg = 4;
        break;

      case 'lg':
        widthMd = 10;
        widthLg = 8;
        break;

      default:
        widthMd = 8;
        widthLg = 6;
        break;
    }

    let footer = null;
    if (this.hasFooter) {
      footer = (
        <div class="fr-modal__footer">
          <slot name="footer" />
        </div>
      );
    }
    let template = (
      <fr-container fluid>
        <fr-grid-row justify="center">
          <fr-col width={12} widthMd={widthMd} widthLg={widthLg}>
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <fr-btn close aria-controls={this.frId}>
                  Fermer
                </fr-btn>
              </div>
              <div class="fr-modal__content">
                <h1 id={`${this.frId}-title`} class="fr-modal__title">
                  <fr-icon name="arrow-right-line" size="lg"></fr-icon>
                  {this.frTitle}
                </h1>
                <slot />
              </div>
              {footer}
            </div>
          </fr-col>
        </fr-grid-row>
      </fr-container>
    );

    if (this.headerModal) {
      template = (
        <fr-container fluid full-height>
          <div class="fr-modal-header_content">
            <div class="fr-modal-header_top">
              <fr-btn close aria-controls={this.frId}>
                Fermer
              </fr-btn>
            </div>
            <div class="fr-modal-header_body">
              <slot></slot>
            </div>
          </div>
        </fr-container>
      );
    }

    return (
      <dialog
        id={this.frId}
        class={{
          'fr-modal': true,
          'fr-modal--top': this.top,
        }}
        role="dialog"
        aria-labelledby={`${this.frId}-title`}
      >
        {template}
      </dialog>
    );
  }
}
