import { Component, Element, Prop, h } from '@stencil/core';
import { inheritAttributes } from '../../utils/helpers';

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon-only - Should be used on an icon in a link that has no text.
 * @slot left - Content is placed to the left of the link text.
 * @slot right - Content is placed to the right of the link text.
 */
@Component({
  tag: 'fr-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Element() el!: HTMLElement;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is not set, a disabled link will be rendered.
   */
  @Prop({ reflect: true }) href?: string;

  /**
   * Chip
   */
  @Prop({ reflect: true }) chip: boolean = false;

  /**
   * Size
   */
  @Prop({ reflect: true }) size?: 'sm' | 'lg';

  /**
   * Target
   */
  @Prop({ reflect: true }) target?: string;

  /**
   * Align on content
   */
  @Prop({ reflect: true }) alignOnContent: boolean = false;

  /**
   * Specifies whether to display the linked URL in new tab or window.
   * Only applies when an `href` is provided.
   */
  @Prop({ reflect: true }) newWindow: boolean = false;

  /**
   * Raw link
   */
  @Prop({ reflect: true }) raw: boolean = false;

  /**
   * Reset link
   */
  @Prop({ reflect: true }) reset: boolean = false;

  private inheritedAttributes: { [k: string]: any } = {};

  private get hasIconOnly() {
    return !!this.el.querySelector('fr-icon[slot="icon-only"]');
  }

  private get hasLeftIcon() {
    return !!this.el.querySelector('fr-icon[slot="left"]');
  }

  private get hasRightIcon() {
    return !!this.el.querySelector('fr-icon[slot="right"]');
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-current']);
  }

  render() {
    let target: string = null;
    let rel: string = null;
    if (!!this.href && !!this.target) {
      target = this.target;
    } else if (!!this.href && this.newWindow) {
      target = '_blank';
      rel = 'noopener';
    }

    return (
      <a
        class={{
          'fr-raw-link': this.raw,
          'fr-reset-link': this.reset,
          'fr-link': this.chip,
          [`fr-link--${this.size}`]: this.chip && !!this.size,
          'fr-link--align-on-content': this.chip && this.alignOnContent,
          'fr-link--icon-only': this.chip && this.hasIconOnly,
          'fr-link--icon-left': this.chip && this.hasLeftIcon,
          'fr-link--icon-right': this.chip && this.hasRightIcon,
        }}
        href={!!this.href ? this.href : null}
        target={target}
        rel={rel}
       {...this.inheritedAttributes}
      >
        {this.chip ? <slot name="icon-only" /> : null}
        {this.chip ? <slot name="left" /> : null}
        <slot />
        {this.chip ? <slot name="right" /> : null}
      </a>
    );
  }
}
