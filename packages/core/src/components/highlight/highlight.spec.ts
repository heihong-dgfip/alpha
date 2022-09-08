import { newSpecPage } from '@stencil/core/testing';
import { Highlight } from './highlight';

describe('fr-highlight', () => {

  it('default', async () => {
    const page = await newSpecPage({
      components: [Highlight],
      html: `<fr-highlight>Les parents d’enfants de 11 à 14 ans n’ont aucune</fr-highlight>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-highlight>
      <mock:shadow-root>
        <div class="fr-highlight">
          <p>
            <slot></slot>
          </p>
        </div>
      </mock:shadow-root>
      Les parents d’enfants de 11 à 14 ans n’ont aucune
    </fr-highlight>`);
  });

  it('is-small', async () => {
    const page = await newSpecPage({
      components: [Highlight],
      html: `<fr-highlight size="sm">Les parents d’enfants de 11 à 14 ans n’ont aucune</fr-highlight>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-highlight size="sm">
      <mock:shadow-root>
        <div class="fr-highlight">
          <p class="fr-text--sm">
            <slot></slot>
          </p>
        </div>
      </mock:shadow-root>
      Les parents d’enfants de 11 à 14 ans n’ont aucune
    </fr-highlight>`);
  });

  it('is-large', async () => {
    const page = await newSpecPage({
      components: [Highlight],
      html: `<fr-highlight size="lg">Les parents d’enfants de 11 à 14 ans n’ont aucune</fr-highlight>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-highlight size="lg">
      <mock:shadow-root>
        <div class="fr-highlight">
          <p class="fr-text--lg">
            <slot></slot>
          </p>
        </div>
      </mock:shadow-root>
      Les parents d’enfants de 11 à 14 ans n’ont aucune
    </fr-highlight>`);
  });

});
