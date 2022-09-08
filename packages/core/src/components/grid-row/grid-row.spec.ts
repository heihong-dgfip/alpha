import { newSpecPage } from '@stencil/core/testing';
import { GridRow } from './grid-row';

describe('fr-grid-row', () => {
  it('default row', async () => {
    const { root } = await newSpecPage({
      components: [GridRow],
      html: `
        <fr-grid-row>
          <p>content</p>
        </fr-grid-row>`,
    });
    expect(root).toEqualHtml(`
      <fr-grid-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <p>content</p>
      </fr-grid-row>
    `);
  });
});
