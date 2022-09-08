import { newSpecPage } from '@stencil/core/testing';
import { Footer } from './footer';

describe('fr-footer', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `
      <fr-footer>
      <p slot="licence">
          Sauf mention contraire, tous les textes de ce site sont sous
          <fr-link
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
          >
            licence etalab-2.0
          </fr-link>
        </p>
      </fr-footer>`,
    });
    page.rootInstance.linkLegalDuties = [
      {
        textContent: 'Plan du site',
        href: `https://legifrance.gouv.fr`,
      },
      {
        textContent: 'Accessibilité : non/partiellement/totalement conforme',
        href: `https://legifrance.gouv.fr`,
      },
      {
        textContent: 'Mentions légales',
        href: `https://legifrance.gouv.fr`,
      },
      {
        textContent: 'Données personnelles',
        href: `https://legifrance.gouv.fr`,
      },
    ];
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-footer>
      <mock:shadow-root>
        <footer class="fr-footer" role="contentinfo">
            <div class="fr-footer__bottom">
             <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr">Données personnelles</a>
                </li>
            </ul>
              <div class="fr-footer__bottom-copy">
               <slot name="licence"></slot>
              </div>
            </div>
        </footer>
      </mock:shadow-root>
        <p slot="licence">
          Sauf mention contraire, tous les textes de ce site sont sous
          <fr-link
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
          >
            licence etalab-2.0
          </fr-link>
        </p>
    </fr-footer>`);
  });
  it('native', async () => {
    const { root } = await newSpecPage({
      components: [Footer],
      html: `
      <fr-footer>
        <div slot="linkLegalDuties">
          <a href="https://legifrance.gouv.fr">Plan du site</a>
          <a href="https://legifrance.gouv.fr">Accessibilité : non/partiellement/totalement conforme</a>
          <a href="https://legifrance.gouv.fr">Mentions légales</a>
          <a href="https://legifrance.gouv.fr">Données personnelles</a>
      </div>
        <p slot="licence">
          Sauf mention contraire, tous les textes de ce site sont sous
          <fr-link
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
          >
            licence etalab-2.0
          </fr-link>
        </p>
      </fr-footer>`,
    });
    expect(root).toEqualHtml(`
    <fr-footer>
      <mock:shadow-root>
        <footer class="fr-footer" role="contentinfo">
            <div class="fr-footer__bottom">
              <ul class="fr-footer__bottom-list">
                 <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr/">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr/">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr/">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="https://legifrance.gouv.fr/">Données personnelles</a>
                </li>
              </ul>
              <div class="fr-footer__bottom-copy">
               <slot name="licence"></slot>
              </div>
            </div>
        </footer>
      </mock:shadow-root>
       <div slot="linkLegalDuties">
          <a href="https://legifrance.gouv.fr">Plan du site</a>
          <a href="https://legifrance.gouv.fr">Accessibilité : non/partiellement/totalement conforme</a>
          <a href="https://legifrance.gouv.fr">Mentions légales</a>
          <a href="https://legifrance.gouv.fr">Données personnelles</a>
      </div>
        <p slot="licence">
          Sauf mention contraire, tous les textes de ce site sont sous
          <fr-link
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
          >
            licence etalab-2.0
          </fr-link>
        </p>
    </fr-footer>`);
  });
});
