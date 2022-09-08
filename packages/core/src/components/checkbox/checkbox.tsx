import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

/**
 * @slot native - Native input checkbox that contributes to the form
 */
@Component({
  tag: 'fr-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {
  private native?: HTMLInputElement;
  private group?: HTMLFrFormGroupElement;

  private static a11yError = 'erreur';
  private static a11yValid = 'confirmation';
  private static checkedLabel = 'Activé';
  private static uncheckedLabel = 'Désactivé';

  @Element() el!: HTMLElement;

  @State() showError: boolean = false;
  @State() showValid: boolean = false;
  @State() a11yMessages?: string;
  @State() groupDisabled: boolean = false;

  /**
   * Checkbox label
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * Checked state
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * Disabled state
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Hint text
   */
  @Prop({ reflect: true }) hint?: string;

  /**
   * Small size
   */
  @Prop({ reflect: true }) small: boolean = false;

  /**
   * Toggle
   */
  @Prop({ reflect: true }) toggle: boolean = false;

  /**
   * Show toggle state
   */
  @Prop({ reflect: true }) showToggleState: boolean = false;

  /**
   * Toggle separator
   */
  @Prop({ reflect: true }) toggleSeparator: boolean = false;

  /**
   * Toggle label align left
   */
  @Prop({ reflect: true }) toggleLabelLeft: boolean = false;

  /**
  * Emitted when the checked state has changed
  */
  @Event() change: EventEmitter<any>;

  /**
   * Update the native input checkbox when the checked state changes
   */
  @Watch('checked')
  protected checkedChanged() {
    if (!!this.native) {
      this.native.checked = this.checked;
    }
  }

  connectedCallback() {
    this.group = this.el.closest('fr-form-group');
    if (!!this.group) {
      this.groupDisabled = this.group.disabled;
      this.group.addEventListener('frDisable', this.onGroupDisable);
    }
  }

  disconnectedCallback() {
    if (!!this.group) {
      this.group.removeEventListener('frDisable', this.onGroupDisable);
      this.group = null;
    }
  }

  private onGroupDisable = () => {
    if (!!this.group) {
      if (this.groupDisabled !== this.group.disabled) {
        this.groupDisabled = this.group.disabled;
      }
    }
  }

  componentWillLoad() {
    this.native = this.el.querySelector('[slot="native"]') as HTMLInputElement;
    if (!!this.native) {
      if (this.native.checked) {
        this.checked = this.native.checked;
      }
    }
  }

  private checkboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!!input) {
      this.checked = input.checked;
      this.change.emit(event);
    }
  }

  private slotChange() {
    this.showError = false;
    this.showValid = false;
    let a11yMessages = [];
    const messages = Array.from(this.el.querySelectorAll('fr-error-text,fr-valid-text'));

    for (const message of messages) {
      if (message.matches('fr-error-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Checkbox.a11yError}, ${message.textContent}`);
        this.showValid = false;
        this.showError = true;
      } else {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Checkbox.a11yValid}, ${message.textContent}`);
        this.showValid = !this.showError;
      }
    }

    this.a11yMessages = a11yMessages.join('. ');
  }

  render() {
    let hint = null;
    if (!!this.hint) {
      if (this.toggle) {
        hint = (
          <p id="hint" class="fr-hint-text">{this.hint}</p>
        );
      } else {
        hint = (
          <span class="fr-hint-text">{this.hint}</span>
        );
      }
    }

    let messages = null;
    if (!!this.a11yMessages) {
      messages = (
        <p id="messages" class="fr-sr-only">
          {this.a11yMessages}
        </p>
      );
    }

    let describedBy = !!this.a11yMessages ? 'messages' : null;
    if (this.toggle && this.hint) {
      describedBy = `hint${!!describedBy ? ' ' + describedBy : ''}`;
    }

    const checkbox = (
      <input
        class={{
          'fr-toggle__input': this.toggle,
        }}
        type="checkbox"
        id="input"
        checked={this.checked}
        disabled={this.groupDisabled || this.disabled}
        aria-describedby={describedBy}
        onChange={(event: Event) => this.checkboxChange(event)}
      />
    );

    const labelAndHint = this.toggle ? [
      <label
        htmlFor="input"
        class="fr-toggle__label"
        data-fr-checked-label={this.showToggleState ? Checkbox.checkedLabel : null}
        data-fr-unchecked-label={this.showToggleState ? Checkbox.uncheckedLabel : null}
      >
        {this.label}
      </label>,
      hint
    ] : (
      <label htmlFor="input" class="fr-label">{this.label}
        {hint}
      </label>
    );

    return this.toggle ? (
      <div class={{
        'fr-toggle': true,
        'fr-toggle--border-bottom': this.toggleSeparator,
        'fr-toggle--label-left': this.toggleLabelLeft
      }}>
        {checkbox}
        {labelAndHint}
        {messages}
        <slot onSlotchange={() => this.slotChange()} />
      </div>
    ) : (
      <div class={{
        'fr-checkbox-group': true,
        'fr-checkbox-group--error': this.showError,
        'fr-checkbox-group--valid': this.showValid,
        'fr-checkbox-group--sm': this.small
      }}>
        {checkbox}
        {labelAndHint}
        {messages}
        <slot onSlotchange={() => this.slotChange()} />
      </div>
    );
  }
}
