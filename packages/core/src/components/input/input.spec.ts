import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input';

describe('fr-input', () => {
  it('get native state', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<fr-input label="Label champs de saisie">
        <input slot="native" name="native" value="native value"/>
      </fr-input>`,
    });
    await page.waitForChanges();
    expect(page.rootInstance.value).toEqual('native value');
  });
  it('change native state', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<fr-input label="Label champs de saisie">
        <input slot="native" name="native"/>
      </fr-input>`,
    });
    await page.waitForChanges();
    page.rootInstance.value = 'typed value';
    await page.waitForChanges();
    const native = page.doc.querySelector('[name="native"]') as HTMLInputElement;
    expect(native.value).toEqual('typed value');
  });
});
