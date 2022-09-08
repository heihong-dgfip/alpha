import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

import { TextFieldTypes, TextFieldAutocompletes } from '../../interface';

/**
 * @slot native - Native input or textarea that contributes to the form
 */
@Component({
  tag: 'fr-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  private native?: HTMLInputElement | HTMLTextAreaElement;
  private group?: HTMLFrFormGroupElement;
  private form?: HTMLFrFormElement;

  private static a11yError = 'erreur';
  private static a11yValid = 'confirmation';

  @Element() el!: HTMLElement;

  @State() showError: boolean = false;
  @State() showValid: boolean = false;
  @State() a11yMessages?: string;
  @State() groupDisabled: boolean = false;
  @State() formRequired: boolean = false;

  /**
   * Label
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * Input type. Use `textarea` for a textarea control
   */
  @Prop() type: TextFieldTypes = 'text';

  /**
   * Value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Update the input value when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    if (!!this.native) {
      this.native.value = this.value;
    }
  }

  /**
   * Required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Disabled state
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Hint text
   */
  @Prop({ reflect: true }) hint?: string;

  /**
   * placeholder
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * autocomplete
   */
  @Prop() autocomplete?: TextFieldAutocompletes;

  /**
   * search bar
   */
  private searchBar: boolean = false;

  /**
   * search bar lg
   */
  private searchBarLg: boolean = false;

  connectedCallback() {
    this.group = this.el.closest('fr-form-group');
    if (!!this.group) {
      this.groupDisabled = this.group.disabled;
      this.group.addEventListener('frDisable', this.onGroupDisable);
    }

    this.form = this.el.closest('fr-form');
    if (!!this.form) {
      this.formRequired = this.form.required;
      this.form.addEventListener('frRequire', this.onFormRequire)
    }
  }

  disconnectedCallback() {
    if (!!this.group) {
      this.group.removeEventListener('frDisable', this.onGroupDisable);
      this.group = null;
    }

    if (!!this.form) {
      this.form.removeEventListener('frRequire', this.onFormRequire);
      this.form = null;
    }
  }

  private onGroupDisable = () => {
    if (!!this.group) {
      if (this.groupDisabled !== this.group.disabled) {
        this.groupDisabled = this.group.disabled;
      }
    }
  };

  private onFormRequire = () => {
    if (!!this.form) {
      if (this.formRequired !== this.form.required) {
        this.formRequired = this.form.required;
      }
    }
  }

  componentWillLoad() {
    this.native = this.el.querySelector('input[slot="native"],textarea[slot="native"]') as HTMLInputElement | HTMLTextAreaElement;
    if (!!this.native) {
      if (this.native instanceof HTMLInputElement) {
        if (!!this.native.value) {
          this.value = this.native.value;
        }
      } else {
        this.type = 'textarea';
        this.value = this.native.textContent.trim();
      }
    }
    const searchBar = this.el.closest('fr-search');
    if (searchBar) {
      this.searchBar = true;
      if (searchBar.lg) {
        this.searchBarLg = true;
      }
    }
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() change: EventEmitter<any>;

  private inputInput(event: Event) {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (!!input) {
      this.value = input.value;
    }
  }

  private inputChange(event: Event) {
    this.change.emit(event);
  }

  private slotChange() {
    this.showError = false;
    this.showValid = false;
    let a11yMessages = [];
    const messages = Array.from(this.el.querySelectorAll('fr-error-text,fr-valid-text'));

    for (const message of messages) {
      if (message.matches('fr-error-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Input.a11yError}, ${message.textContent}`);
        this.showValid = false;
        this.showError = true;
      } else if (message.matches('fr-valid-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Input.a11yValid}, ${message.textContent}`);
        this.showValid = !this.showError;
      }
    }

    this.a11yMessages = a11yMessages.join('. ');
  }

  private get hasIcon() {
    return !!this.el.querySelector('[slot="icon"]');
  }

  private get hasIconCalendar() {
    const icon = this.el.querySelector('[slot="icon"]') as HTMLFrIconElement;
    if (!!icon && icon.name === 'calendar-line') {
      return true;
    }
    return false;
  }

  render() {
    const hint = !!this.hint ? <span class="fr-hint-text">{this.hint}</span> : null;

    const description = !!this.a11yMessages ? (
      <p id="input-desc" class="fr-sr-only">
        {this.a11yMessages}
      </p>
    ) : null;

    const TagType = (this.type === 'textarea' ? 'textarea' : 'input') as any;
    const type = this.type === 'textarea' ? null : this.type;
    const disabled = this.groupDisabled || this.disabled;
    const required = this.formRequired || this.required;

    let pattern = null;
    switch (this.type) {
      case 'number':
        pattern = '[0-9]*';
        break;

      case 'email':
        pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
        break;

      default:
        break;
    }

    let autocomplete: TextFieldAutocompletes | null = this.autocomplete || null;
    if (!autocomplete) {
      switch (this.type) {
        case 'email':
          autocomplete = 'email';
          break;

        case 'tel':
          autocomplete = 'tel';
          break;

        case 'password':
          autocomplete = 'current-password';
          break;

        default:
          break;
      }
    }

    const input = (
      <TagType
        id="input"
        type={type}
        pattern={pattern}
        inputmode={this.type === 'number' ? 'numeric' : null}
        autocomplete={autocomplete}
        value={this.value}
        class={{
          'fr-input': true,
          'fr-input--error': this.showError,
          'fr-input--valid': this.showValid,
          'fr-input-search-bar--lg': this.searchBarLg === true,
        }}
        placeholder={this.placeholder}
        required={required}
        disabled={disabled}
        aria-describedby={!!this.a11yMessages ? 'input-desc' : null}
        onInput={(event: Event) => this.inputInput(event)}
        onChange={(event: Event) => this.inputChange(event)}
      ></TagType>
    );

    const inputWrap = this.hasIcon ? (
      <div
        class={{
          'fr-input-wrap': true,
          'fr-fi-calendar-line': this.hasIconCalendar,
        }}
      >
        <slot name="icon" />
        {input}
      </div>
    ) : (
      input
    );

    return (
      <div
        class={{
          'fr-input-group': true,
          'fr-input-group--disabled': disabled,
          'fr-input-group--error': this.showError,
          'fr-input-group--valid': this.showValid,
          'fr-input-search-bar': this.searchBar,
        }}
      >
        <label htmlFor="input" class="fr-label">
          {this.label}{this.required && !this.formRequired ? ' *' : ''}
          {hint}
        </label>
        {inputWrap}
        {description}
        <slot onSlotchange={() => this.slotChange()} />
      </div>
    );
  }
}
