import { newSpecPage } from '@stencil/core/testing';
import { Select } from './select';

describe('fr-select', () => {
  it('renders options and provided value', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `
        <fr-select label="Label pour liste déroulante" hint="Texte de description additionnel">
        </fr-select>
      `,
    });
    page.rootInstance.options = [
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
      { text: 'Option 4', value: '4' },
    ];
    page.rootInstance.value = '1';
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <fr-select label="Label pour liste déroulante" hint="Texte de description additionnel">
        <mock:shadow-root>
          <div class="fr-select-group">
            <label htmlFor="select" class="fr-label">
              Label pour liste déroulante
              <span class="fr-hint-text">Texte de description additionnel</span>
            </label>
            <select id="select" class="fr-select">
              <option value="">Sélectionnez une option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
            <slot />
          </div>
        </mock:shadow-root>
      </fr-select>
    `);
    expect(page.rootInstance.select.value).toEqual('1');
  });
});
