import { newSpecPage } from '@stencil/core/testing';
import { FormGroup } from './form-group';

describe('fr-form-group', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [FormGroup],
      html: `<fr-form-group legend="Légende pour l’ensemble de champs">
        <fr-checkbox label="Label checkbox"></fr-checkbox>
      </fr-form-group>`,
    });
    expect(root).toEqualHtml(`
      <fr-form-group legend="Légende pour l’ensemble de champs">
        <mock:shadow-root>
          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend" id="legend">
                Légende pour l’ensemble de champs
              </legend>
              <div class="fr-fieldset__content">
                <slot />
              </div>
              <slot name="message"/>
            </fieldset>
          </div>
        </mock:shadow-root>
        <fr-checkbox label="Label checkbox"></fr-checkbox>
      </fr-form-group>
    `);
  });
});
