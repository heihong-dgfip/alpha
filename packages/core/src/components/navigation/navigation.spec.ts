import { newSpecPage } from '@stencil/core/testing';
import { Navigation } from './navigation';

describe('navigation', () => {
it('default', async () => {
    const page = await newSpecPage({
      components: [Navigation],
      html: `
      <fr-navigation>
      </fr-navigation>
      `,
    });
    page.rootInstance.links = [
      {
      textContent: 'accès direct',
      href: 'https://legifrance.gouv.fr',
    },
    {
      textContent: 'accès direct',
      href: 'https://gouvernement.fr',
    },
    ]
     await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <fr-navigation>
        <mock:shadow-root>
        <nav class="fr-nav" role="navigation">
          <ul class="fr-nav__list">
              <li class="fr-nav__item">
                <a class="fr-nav__link"  href="https://legifrance.gouv.fr" target="_self">
                accès direct
                </a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link"  href="https://gouvernement.fr" target="_self">
              accès direct
              </a>
            </li>
          </ul>
        </nav>
        </mock:shadow-root>
      </fr-navigation>
    `);
  });

  it('native', async () => {
    const { root } = await newSpecPage({
      components: [Navigation],
      html: `
      <fr-navigation>
        <a  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"> accès direct </a>
        <a  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"> accès direct </a>
      </fr-navigation>
      `,
    });
    expect(root).toEqualHtml(`
      <fr-navigation>
        <mock:shadow-root>
        <nav class="fr-nav" role="navigation">
          <ul class="fr-nav__list">
              <li class="fr-nav__item">
                <a class="fr-nav__link"  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_self">
                accès direct
                </a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link"  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_self">
              accès direct
              </a>
            </li>
          </ul>
        </nav>
        </mock:shadow-root>
        <a  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"> accès direct </a>
        <a  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"> accès direct </a>
      </fr-navigation>
    `);
  });
});
