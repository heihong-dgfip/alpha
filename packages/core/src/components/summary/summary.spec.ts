import { newSpecPage } from '@stencil/core/testing';
import { Summary } from './summary';

describe('fr-summary', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [Summary],
      html: `<fr-summary  aria-labelledby="fr-summary-title"></fr-summary>`,
    });
    page.rootInstance.links = [
      {
        href: '#titre-ancre-1',
        textlink: 'Titre de l’ancre 1',
      },
      {
        href: '#titre-ancre-2',
        textlink: 'Titre de l’ancre 2',
      },
    ];
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-summary aria-labelledby="fr-summary-title">
        <mock:shadow-root>
          <nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
          <div class="fr-summary__title" id="fr-summary-title">
            Sommaire
          </div>
          <ol class="fr-summary__list">
              <li>
                <a class="fr-summary__link" href="#titre-ancre-1">
               Titre de l’ancre 1
                </a>
              </li>
              <li>
                <a class="fr-summary__link" href="#titre-ancre-2">
                 Titre de l’ancre 2
                </a>
              </li>
          </ol>
        </nav>
        </mock:shadow-root>
      </fr-summary>`);
  });
});
