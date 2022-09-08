import { newSpecPage } from '@stencil/core/testing';
import { Container } from './container';

describe('fr-container', () => {
  it('default container', async () => {
    const { root } = await newSpecPage({
      components: [Container],
      html: `
        <fr-container>
          <p>content</p>
        </fr-container>`,
    });
    expect(root).toEqualHtml(`
      <fr-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <p>content</p>
      </fr-container>
    `);
  });
});
