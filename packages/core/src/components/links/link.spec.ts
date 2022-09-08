import { newSpecPage } from '@stencil/core/testing';
import { Link } from './link';

describe('fr-link', () => {
  it('default', async () => {
    const { root } = await newSpecPage({
      components: [Link],
      html: `<fr-link href="#">Label lien</fr-link>`,
    });
    expect(root).toEqualHtml(`
      <fr-link href="#">
        <mock:shadow-root>
          <a href="#">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Label lien
      </fr-link>
    `);
  });

  it('chip', async () => {
    const { root } = await newSpecPage({
      components: [Link],
      html: `<fr-link href="#" chip>Label lien</fr-link>`,
    });
    expect(root).toEqualHtml(`
      <fr-link href="#" chip>
        <mock:shadow-root>
          <a href="#" class="fr-link">
            <slot name="icon-only"></slot>
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </a>
        </mock:shadow-root>
        Label lien
      </fr-link>
    `);
  });
});
