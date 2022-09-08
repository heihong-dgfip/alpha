import { Component, Element, Event, EventEmitter, Prop, State, Watch, h, Host } from '@stencil/core';

import { GroupRadio } from '../../interface';

@Component({
  tag: 'fr-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadioGroup {
  private natives?: HTMLInputElement[];
  private group?: HTMLFrFormGroupElement;

  @Element() el!: HTMLElement;

  @State() groupDisabled: boolean = false;

  /**
   * Group radios
   */
  @Prop({ mutable: true }) radios: GroupRadio[] = [];

  /**
  * Value
  */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Update the natives inputs radios when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    if (!!this.natives) {
      for (const radio of this.natives) {
        if (radio.value === this.value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      }
    }
  }

  /**
   * Small size
   */
  @Prop({ reflect: true }) small: boolean = false;

  /**
   * Radio rich
   */
  @Prop({ reflect: true }) rich: boolean = false;

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
    const natives = Array.from(this.el.querySelectorAll('input[type="radio"]')) as HTMLInputElement[];
    if (natives.length > 0) {
      this.natives = natives;
      const radios: GroupRadio[] = [];
      let value = '';
      for (const native of natives) {
        const radio: GroupRadio = {
          label: native.getAttribute('label') || native.value,
          value: native.value,
        };
        if (native.hasAttribute('hint')) {
          radio.hint = native.getAttribute('hint');
        }
        if (native.hasAttribute('background-image')) {
          radio.backgroundImage = native.getAttribute('background-image');
        }
        radios.push(radio);

        if (native.hasAttribute('checked')) {
          value = native.value;
        }
      }
      this.radios = radios;
      this.value = value;
    }
  }

  private radioChange(event: Event) {
    const radio = event.target as HTMLInputElement;
    if (!!radio) {
      if (radio.checked) {
        this.value = radio.value;
      }
      this.change.emit(event);
    }
  }

  render() {
    return (
      <Host>
        {this.radios.map(radio => (
          <div
            key={radio.value}
            class={{
              'fr-radio-group': true,
              'fr-radio-group--sm': this.small && !this.rich,
              'fr-radio-rich': this.rich,
            }}
          >
            <input
              type="radio"
              name="radio"
              id={radio.value}
              value={radio.value}
              checked={radio.value === this.value}
              disabled={this.groupDisabled}
              onChange={(event: Event) => this.radioChange(event)}
            />
            <label
              class={{
                'fr-label': true,
                'fr-ifi-no-icon': this.rich,
              }}
              htmlFor={radio.value}
              style={{ 'background-image': this.rich ? radio.backgroundImage : null }}
            >{radio.label}
              {!!radio.hint ? <span class="fr-hint-text">{radio.hint}</span> : null}
            </label>
          </div>
        ))}
      </Host>
    );
  }
}
