import { Component, Host, Element, Prop, h, Event, EventEmitter } from '@stencil/core';

import api from '../../engine/core/api';
import { inheritAttributes } from '../../utils/helpers';

@Component({
  tag: 'fr-btn',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el!: HTMLElement;

  /**
   * The title of button.
   */
  @Prop({ reflect: true }) buttonTitle: string;

  /**
   * The type of button.
   */
  @Prop() type: 'submit' | 'button' = 'button';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Emitted when the button has focus.
   */
  @Event() focus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() blur!: EventEmitter<void>;

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'sm' | 'lg';

  /**
   * The text position of button.
   */
  @Prop({ reflect: true }) textPosition?: 'center' | 'right';

  /**
   * The state of the button.
   */
  @Prop({ reflect: true }) state?: 'secondary';

  /**
   * If `true`, the button has a width=100%
   */
  @Prop({ reflect: true }) fullWidth?: boolean;

  /**
   * If `true`, fr-link--close added
   */
  @Prop({ reflect: true }) close: boolean = false;

  /**
   * the id of the modal button
   */
  @Prop() modalOpenerId: string;

  /**
   * If `true`, all scss for a button without text with only icon will be apply
   */
  @Prop({ reflect: true }) iconOnly?: boolean;

  /**
   * search bar
   */
  private searchBar: boolean = false;

  /**
   * search bar lg
   */
  private searchBarLg: boolean = false;

  /**
    * header button search
    */
  @Prop() btnNavSearch: boolean = false

  /**
    * header button menu
    */
  @Prop() btnNavMenu: boolean = false

  connectedCallback() {
    api.connectCustomElement(this.el);
  }

  disconnectedCallback() {
    api.disconnectCustomElement(this.el);
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
    const searchBar = this.el.closest('fr-search');
    if (searchBar) {
      this.searchBar = true;
      if (searchBar.lg) {
        this.searchBarLg = true;
      }
    }
  }

  private handleClick = (ev: Event) => {
    const form = this.el.closest('form');
    if (form && this.type === 'submit') {
      ev.preventDefault();

      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      form.appendChild(fakeButton);
      fakeButton.click();
      fakeButton.remove();
    }
  };

  private onFocus = () => {
    this.focus.emit();
  };

  private onBlur = () => {
    this.blur.emit();
  };
  render() {
    return (
      <Host onClick={this.handleClick}>
        <button
          disabled={this.disabled}
          title={this.buttonTitle}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          data-fr-opened={this.modalOpenerId ? 'false' : null}
          aria-controls={this.modalOpenerId || null}
          class={{
            'fr-btn': !this.close,
            [`fr-btn--${this.state}`]: this.state !== undefined,
            [`fr-btn--${this.size}`]: this.size !== undefined,
            [`fr-btn--full-width`]: this.fullWidth,
            [`fr-btn--text-${this.textPosition}`]: this.textPosition !== undefined,
            'fr-link': this.close,
            'fr-link--close': this.close,
            'fr-btn-search-bar': this.searchBar,
            'fr-btn-search-bar--lg': this.searchBarLg,
            'fr-btn-nav-search': this.btnNavSearch,
            'fr-btn-nav-menu': this.btnNavMenu
          }}
          {...this.inheritedAttributes}
        >
          <slot name="left"></slot>
          <slot name="text"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </button>
      </Host>
    );
  }
}
