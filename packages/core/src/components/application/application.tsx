import api from '../../engine/core/index';
import { Component, Host, h } from '@stencil/core';

// @ts-expect-error
api.register(api.core.CollapseSelectors.COLLAPSE, api.core.Collapse);

@Component({
  tag: 'fr-app',
  styleUrl: 'application.scss',
})
export class Application {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
