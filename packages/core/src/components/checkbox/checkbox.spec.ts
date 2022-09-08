import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './checkbox';

describe('fr-checkbox', () => {
  it('get native state', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<fr-checkbox label="Label checkbox">
        <input slot="native" type="checkbox" name="native" checked="checked"/>
      </fr-checkbox>`,
    });
    await page.waitForChanges();
    expect(page.rootInstance.checked).toEqual(true);
  });
  it('change native state', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<fr-checkbox label="Label checkbox">
        <input slot="native" type="checkbox" name="native"/>
      </fr-checkbox>`,
    });
    await page.waitForChanges();
    page.rootInstance.checked = true;
    await page.waitForChanges();
    const native = page.doc.querySelector('[name="native"]') as HTMLInputElement;
    expect(native.checked).toEqual(true);
  });
});
