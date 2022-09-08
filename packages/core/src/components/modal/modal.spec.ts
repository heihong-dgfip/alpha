import '../../engine/__mocks__/engine.mock';
import { newSpecPage } from '@stencil/core/testing';
import { Modal } from './modal';

describe('fr-modal', () => {
  it('render', async () => {
    const {root} = await newSpecPage({
      components: [Modal],
      html: `<fr-modal fr-id="modal" fr-title="Titre de la modale">
        <p>Lorem [...] elit ut.</p>
      </fr-modal>`,
    });
    expect(root).toEqualHtml(`
    <fr-modal fr-id="modal" fr-title="Titre de la modale">
        <mock:shadow-root>
          <dialog id="modal" class="fr-modal" role="dialog" aria-labelledby="modal-title">
            <fr-container fluid>
              <fr-grid-row justify="center">
                <fr-col width="12" widthMd="8" widthLg="6">
                  <div class="fr-modal__body">
                    <div class="fr-modal__header">
                      <fr-btn close aria-controls="modal">Fermer</fr-btn>
                    </div>
                    <div class="fr-modal__content">
                      <h1 id="modal-title" class="fr-modal__title">
                        <fr-icon name="arrow-right-line" size="lg"></fr-icon>
                        Titre de la modale
                      </h1>
                      <slot />
                    </div>
                  </div>
                </fr-col>
              </fr-grid-row>
            </fr-container>
          </dialog>
        </mock:shadow-root>
        <p>Lorem [...] elit ut.</p>
      </fr-modal>
    `);
  });

   it('header-modal', async () => {
    const {root} = await newSpecPage({
      components: [Modal],
      html: `<fr-modal header-modal fr-id="modal">
        <p>Lorem [...] elit ut.</p>
      </fr-modal>`,
    });
    expect(root).toEqualHtml(`
    <fr-modal header-modal fr-id="modal">
        <mock:shadow-root>
          <dialog id="modal" class="fr-modal" role="dialog" aria-labelledby="modal-title">
              <fr-container fluid full-height>
          <div class="fr-modal-header_content">
            <div class="fr-modal-header_top">
              <fr-btn close aria-controls="modal">
                Fermer
              </fr-btn>
            </div>
            <div class="fr-modal-header_body">
               <slot></slot> 
            </div>
          </div>
        </fr-container>
          </dialog>
        </mock:shadow-root>
        <p>Lorem [...] elit ut.</p>
      </fr-modal>
    `);
  });

  
});
