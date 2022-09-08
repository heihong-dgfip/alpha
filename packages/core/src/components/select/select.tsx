import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

import { SelectItem, SelectOption, SelectGroup } from '../../interface';

function isOption(item: SelectItem): item is SelectOption {
  if ((item as SelectOption).text !== undefined) {
    return true
  }
  return false
}

/**
 * @slot native - Native select that contributes to the form
 */
@Component({
  tag: 'fr-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select {
  private select!: HTMLSelectElement;
  private native?: HTMLSelectElement;
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
   * Options
   */
  @Prop({ mutable: true }) options: SelectItem[] = [];

  /**
  * Value
  */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Update the selects value when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    if (!!this.select && this.select.value !== this.value) {
      this.select.value = this.value;
    }
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
  * Emitted when the value has changed
  */
  @Event() change: EventEmitter<any>;

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
  }

  private onFormRequire = () => {
    if (!!this.form) {
      if (this.formRequired !== this.form.required) {
        this.formRequired = this.form.required;
      }
    }
  }

  componentWillLoad() {
    this.native = this.el.querySelector('[slot="native"]') as HTMLSelectElement;
    if (!!this.native) {
      const selectItems: SelectItem[] = [];
      let selectValue = '';
      for (const item of Array.from(this.native.children)) {
        if (item instanceof HTMLOptionElement) {
          const selectOption: SelectOption = {
            text: item.textContent,
            value: item.value
          }
          selectItems.push(selectOption);
          if (item.hasAttribute('selected')) {
            selectValue = item.value;
          }
        } else if (item instanceof HTMLOptGroupElement) {
          const selectOptions: SelectOption[] = [];
          for (const option of Array.from(item.children)) {
            if (option instanceof HTMLOptionElement) {
              const selectOption: SelectOption = {
                text: option.textContent,
                value: option.value
              }
              selectOptions.push(selectOption);
              if (option.hasAttribute('selected')) {
                selectValue = option.value;
              }
            }
          }
          const selectGroup: SelectGroup = {
            label: item.label,
            options: selectOptions
          }
          selectItems.push(selectGroup);
        }
      }
      this.options = selectItems;
      this.value = selectValue;
    }
  }

  componentDidLoad() {
    this.select.value = this.value;
  }

  private selectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    if (!!select) {
      this.value = select.value;
      this.change.emit(event);
    }
  }

  private slotChange() {
    this.showError = false;
    this.showValid = false;
    let a11yMessages = [];
    const messages = Array.from(this.el.querySelectorAll('fr-error-text,fr-valid-text'));;

    for (const message of messages) {
      if (message.matches('fr-error-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Select.a11yError}, ${message.textContent}`);
        this.showValid = false;
        this.showError = true;
      } else if (message.matches('fr-valid-text')) {
        message.setAttribute('aria-hidden', 'true');
        a11yMessages.push(`${Select.a11yValid}, ${message.textContent}`);
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
        <p id="select-desc" class="fr-sr-only">
          {this.a11yMessages}
        </p>
      );
    }

    const options = this.options.map(item => {
      if (isOption(item)) {
        return <option key={item.value} value={item.value}>{item.text}</option>;
      } else {
        const options = item.options.map(option => <option key={option.value} value={option.value}>{option.text}</option>);
        return <optgroup key={item.label} label={item.label}>{options}</optgroup>;
      }
    });

    const required = this.formRequired || this.required;
    if (!required || this.value === '') {
      // add unselected option
      options.unshift(<option value="" selected={this.value === ''} disabled={required} hidden={required}>Sélectionnez une option</option>)
    }

    const disabled = this.groupDisabled || this.disabled;

    return (
      <div class={{
        'fr-select-group': true,
        'fr-select-group--disabled': disabled,
        'fr-select-group--error': this.showError,
        'fr-select-group--valid': this.showValid,
      }}>
        <label htmlFor="select" class="fr-label">{this.label}{this.required && !this.formRequired ? ' *' : ''}
          {hint}
        </label>
        <select
          id="select"
          class={{
            'fr-select': true,
            'fr-select--error': this.showError,
            'fr-select--valid': this.showValid,
          }}
          required={required}
          disabled={disabled}
          aria-describedby={!!this.a11yMessages ? 'select-desc' : null}
          onChange={(event: Event) => this.selectChange(event)}
          ref={(el) => this.select = el as HTMLSelectElement}
        >
          {options}
        </select>
        {description}
        <slot onSlotchange={() => this.slotChange()} />
      </div>
    );
  }
}
