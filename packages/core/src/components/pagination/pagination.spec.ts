import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from './pagination';

describe('fr-pagination', () => {
  xit('default', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<fr-pagination pages-total="7" url-pattern="#/"></fr-pagination>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-pagination current-page="1" pages-total="7" url-pattern="#/">
      <mock:shadow-root>
        <nav role="navigation" class="fr-pagination">
          <ul class="fr-pagination__list">
            <li>
              <fr-link class="fr-pagination__link fr-pagination__link--first">
                Première page
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--label fr-pagination__link--lg-label">
                Page précédente
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link" aria-current="page" title="Page 1" href="#/1">
                1
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link" title="Page 2" href="#/2">
                2
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-displayed-lg" title="Page 3" href="#/3">
                3
              </fr-link>
            </li>
            <li>
                <a class="fr-pagination__link fr-displayed-lg">…</a>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-displayed-lg" title="Page 5" href="#/5">
                5
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-displayed-lg" title="Page 6" href="#/6">
                6
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link" title="Page 7" href="#/7">
                7
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-pagination__link--next fr-pagination__link--label fr-pagination__link--lg-label" href="#/2">
                Page suivante
              </fr-link>
            </li>
            <li>
              <fr-link class="fr-pagination__link fr-pagination__link--last" href="#/7">
                Dernière page
              </fr-link>
            </li>
          </ul>
        </nav>
      </mock:shadow-root>
    </fr-pagination>`);
  });

  xit('throw-error', async () => {
    let msgError;
    try {
      const page = await newSpecPage({
        components: [Pagination],
        html: `<fr-pagination pages-total="10"></fr-pagination>`,
      });
      expect(page.rootInstance).toBeNull();
    } catch (e) {
      msgError = e.message;
    }
    expect('Pagination must be initialized with attributes pages-number and url-pattern').toEqual(msgError);
  });

  xit('li-children-number expected when pagination is large', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<fr-pagination pages-total="10" url-pattern="#/"></fr-pagination>`,
    });
    await page.waitForChanges();
    const ulElt = await page.root.shadowRoot.querySelector('ul');
    expect(ulElt.children.length).toEqual(11); //6 displayed nodes, 1 '...' and 4 surrounding arrows
  });

  xit('li-children-number expected when pagination is small', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<fr-pagination pages-total="4" url-pattern="#/"></fr-pagination>`,
    });
    await page.waitForChanges();
    const ulElt = await page.root.shadowRoot.querySelector('ul');
    expect(ulElt.children.length).toEqual(8); //4 nodes and 4 surrounding arrows
  });

  it('next-url', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<fr-pagination pages-total="7" url-pattern="#/"></fr-pagination>`,
    });
    await page.waitForChanges();

    const ulRoot = page.root.shadowRoot.querySelector('ul') as HTMLUListElement;
    const frLink = ulRoot.querySelector('.fr-pagination__link--next') as HTMLFrLinkElement;
    expect(frLink.getAttribute('href')).toEqual('#/2');
  });

  it('btn-disabled', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<fr-pagination pages-total="7" url-pattern="#/"></fr-pagination>`,
    });
    await page.waitForChanges();

    const ulRoot = page.root.shadowRoot.querySelector('ul') as HTMLUListElement;
    const frLink = ulRoot.querySelector('.fr-pagination__link--first') as HTMLFrLinkElement;
    expect(frLink.getAttribute('href')).toBeNull();
  });
});
