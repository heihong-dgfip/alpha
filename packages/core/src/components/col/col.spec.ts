import { newSpecPage } from '@stencil/core/testing';
import { Col } from './col';

describe('fr-col', () => {
  it('default col', async () => {
    const { root } = await newSpecPage({
      components: [Col],
      html: `
        <fr-col>
          <p>content</p>
        </fr-col>`,
    });
    expect(root).toEqualHtml(`
      <fr-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <p>content</p>
      </fr-col>
    `);
  });
});
