import { Component, Host, Prop, h } from '@stencil/core';

import { GridAlignmentType, ColRangeType } from '../../interface';

@Component({
  tag: 'fr-col',
  styleUrl: 'col.scss',
  shadow: true,
})
export class Col {
  /**
   * Alignment
   */
  @Prop({ reflect: true }) align?: GridAlignmentType;

  /**
   * Width
   */
  @Prop({ reflect: true }) width?: ColRangeType;

  /**
   * Offset
   */
  @Prop({ reflect: true }) offset?: ColRangeType;

  /**
   * Right offset
   */
  @Prop({ reflect: true }) offsetRight?: ColRangeType;

  /**
   * Width sm breakpoint
   */
  @Prop({ reflect: true }) widthSm?: ColRangeType;

  /**
   * Offset sm breakpoint
   */
  @Prop({ reflect: true }) offsetSm?: ColRangeType;

  /**
   * Right offset sm breakpoint
   */
  @Prop({ reflect: true }) offsetRightSm?: ColRangeType;

  /**
   * Width md breakpoint
   */
  @Prop({ reflect: true }) widthMd?: ColRangeType;

  /**
   * Offset md breakpoint
   */
  @Prop({ reflect: true }) offsetMd?: ColRangeType;

  /**
   * Right offset md breakpoint
   */
  @Prop({ reflect: true }) offsetRightMd?: ColRangeType;

  /**
   * Width lg breakpoint
   */
  @Prop({ reflect: true }) widthLg?: ColRangeType;

  /**
   * Offset lg breakpoint
   */
  @Prop({ reflect: true }) offsetLg?: ColRangeType;

  /**
   * Right offset lg breakpoint
   */
  @Prop({ reflect: true }) offsetRightLg?: ColRangeType;

  /**
   * Width xl breakpoint
   */
  @Prop({ reflect: true }) widthXl?: ColRangeType;

  /**
   * Offset xl breakpoint
   */
  @Prop({ reflect: true }) offsetXl?: ColRangeType;

  /**
   * Right offset xl breakpoint
   */
  @Prop({ reflect: true }) offsetRightXl?: ColRangeType;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
