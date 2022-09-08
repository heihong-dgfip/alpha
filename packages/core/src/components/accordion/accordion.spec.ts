import '../../engine/__mocks__/engine.mock';
import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('fr-accordion', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [Accordion],
      html: `
        <fr-accordion title="Title" title-type="h4">
            <p>content</p>
             <h3 slot="title"> Intitulé accordéon </h3>
        </fr-accordion>`,
    });
  });
  it('default accordion', async () => {
    expect(page.root).toEqualHtml(`
      <fr-accordion  title="Title" title-type="h4">
      <mock:shadow-root>  
        <section class="fr-accordion">
          <h4>
              <button class="fr-accordion__btn" aria-controls="fr-accordion-0" aria-expanded="false">
                Title
              </button>
            </h4>
          <div class="fr-collapse" id="fr-accordion-0">
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
        <p>content</p>
        <h3 slot="title">Intitulé accordéon</h3>
    </fr-accordion>
    `);
  });
});
