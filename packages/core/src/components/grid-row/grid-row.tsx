import { Component, Host, Prop, h } from '@stencil/core';

import { GridAlignmentType, GridJustificationType } from '../../interface';

@Component({
  tag: 'fr-grid-row',
  styleUrl: 'grid-row.scss',
  shadow: true,
})
export class GridRow {
  /**
   * Alignment
   */
  @Prop({ reflect: true }) align?: GridAlignmentType;

  /**
   * Justification
   */
  @Prop({ reflect: true }) justify?: GridJustificationType;

  /**
   * With gutters
   */
  @Prop({ reflect: true }) gutters: boolean = false;

  /**
   * Reset no gutters
   */
  @Prop({ reflect: true }) noGutters: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
