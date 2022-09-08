import { newSpecPage } from '@stencil/core/testing';
import { ValidText } from './valid-text';

describe('fr-valid-text', () => {
  it('render', async () => {
    const page = await newSpecPage({
      components: [ValidText],
      html: `<fr-valid-text>Texte de validation</fr-valid-text>`,
    });
    expect(page.root).toEqualHtml(`
      <fr-valid-text>
        <mock:shadow-root>
          <p class="fr-valid-text">
            <slot />
          </p>
        </mock:shadow-root>
        Texte de validation
      </fr-valid-text>
    `);
  });
});
