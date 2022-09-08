import { newSpecPage } from '@stencil/core/testing';
import { ErrorText } from './error-text';

describe('fr-error-text', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [ErrorText],
      html: `<fr-error-text>Texte d’erreur obligatoire</fr-error-text>`,
    });
    expect(root).toEqualHtml(`
      <fr-error-text>
        <mock:shadow-root>
          <p class="fr-error-text">
            <slot />
          </p>
        </mock:shadow-root>
        Texte d’erreur obligatoire
      </fr-error-text>
    `);
  });
});
