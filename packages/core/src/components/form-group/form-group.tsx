import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

import { DisableEventDetail } from '../../interface';

/**
 * @slot message - Error or validation message : `fr-error-text` or `fr-valid-text`
 */
@Component({
  tag: 'fr-form-group',
  styleUrl: 'form-group.scss',
  shadow: true,
})
export class FormGroup {
  private static a11yError = 'erreur';
  private static a11yValid = 'confirmation';

  @Element() el!: HTMLElement;

  @State() showError: boolean = false;
  @State() showValid: boolean = false;
  @State() a11yMessages?: string;

  /**
   * Fieldset legend
   */
  @Prop({ reflect: true }) legend!: string;

  /**
   * Legend visually hidden
   */
  @Prop({ reflect: true }) legendVisuallyHidden: boolean = false;

  /**
   * Legend text regular
   */
  @Prop({ reflect: true }) legendTextRegular: boolean = false;

  /**
   * Disabled state
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.frDisable.emit({
      disabled: this.disabled
    });
  }

  /**
   * Inline controls
   */
  @Prop({ reflect: true }) inline: boolean = false;

  /**
   * Hint text
   */
  @Prop({ reflect: true }) hint?: string;

  /**
   * Emitted when the disable state has changed.
   */
  @Event() frDisable!: EventEmitter<DisableEventDetail>;

  private messageSlotChange() {
    this.showError = false;
    this.showValid = false;
    let a11yMessages = [];
    const messages = Array.from(this.el.querySelectorAll('fr-error-text,fr-valid-text'));

    for (const message of messages) {
      if (message.matches('fr-error-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${FormGroup.a11yError}, ${message.textContent}`);
        this.showValid = false;
        this.showError = true;
      } else {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${FormGroup.a11yValid}, ${message.textContent}`);
        this.showValid = !this.showError;
      }
    }

    this.a11yMessages = a11yMessages.join('. ');
  }

  render() {
    let hint = null;
    if (!!this.hint) {
      hint = (
        <span class="fr-hint-text">{this.hint}</span>
      );
    }

    let description = null;
    if (!!this.a11yMessages) {
      description = (
        <p id="fieldset-desc" class="fr-sr-only">
          {this.a11yMessages}
        </p>
      );
    }

    return (
      <Host
        class={{
          'form-group-error': this.showError,
          'form-group-valid': this.showValid
        }}
      >
        <div class="fr-form-group">
          <fieldset
            class={{
              'fr-fieldset': true,
              'fr-fieldset--inline': this.inline,
              'fr-fieldset--error': this.showError,
              'fr-fieldset--valid': this.showValid
            }}
            disabled={this.disabled}
            aria-labelledby={!!this.a11yMessages ? 'legend fieldset-desc' : null}
          >
            <legend
              class={{
                'fr-fieldset__legend': !this.legendVisuallyHidden,
                'fr-sr-only': this.legendVisuallyHidden,
                'fr-text--regular': this.legendTextRegular
              }}
              id="legend"
            >
              {this.legend}
              {hint}
            </legend>
            <div class="fr-fieldset__content">
              <slot />
            </div>
            {description}
            <slot name="message" onSlotchange={() => this.messageSlotChange()} />
          </fieldset>
        </div>
      </Host>
    );
  }
}
