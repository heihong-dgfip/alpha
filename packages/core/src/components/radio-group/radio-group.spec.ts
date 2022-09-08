import { newSpecPage } from '@stencil/core/testing';
import { RadioGroup } from './radio-group';

describe('fr-radio-group', () => {
  it('renders radios and provided value', async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `
        <fr-radio-group>
        </fr-radio-group>
      `,
    });
    page.rootInstance.radios = [
      {
        label: 'option 1',
        value: 'radio-1'
      },
      {
        label: 'option 2',
        value: 'radio-2'
      },
      {
        label: 'option 3',
        value: 'radio-3'
      },
    ];
    page.rootInstance.value = 'radio-2';
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <fr-radio-group>
        <mock:shadow-root>
          <div class="fr-radio-group">
            <input type="radio" name="radio" id="radio-1" value="radio-1">
            <label class="fr-label" htmlFor="radio-1">option 1</label>
          </div>
          <div class="fr-radio-group">
            <input type="radio" name="radio" id="radio-2" value="radio-2" checked>
            <label class="fr-label" htmlFor="radio-2">option 2</label>
          </div>
          <div class="fr-radio-group">
            <input type="radio" name="radio" id="radio-3" value="radio-3">
            <label class="fr-label" htmlFor="radio-3">option 3</label>
          </div>
        </mock:shadow-root>
      </fr-radio-group>
    `);
  });
});
