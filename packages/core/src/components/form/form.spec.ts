import '../../engine/__mocks__/engine.mock';
import { newSpecPage } from '@stencil/core/testing';
import { Form } from './form';

describe('fr-form', () => {
  it('default form', async () => {
    const { root } = await newSpecPage({
      components: [Form],
      html: `
        <fr-form>
          <fr-input label="Label champs de saisie"></fr-input>
        </fr-form>`,
    });
    expect(root).toEqualHtml(`
      <fr-form>
        <form>
          <fr-input label="Label champs de saisie"></fr-input>
        </form>
      </fr-form>
    `);
  });
  it('native form', async () => {
    const { root } = await newSpecPage({
      components: [Form],
      html: `
        <fr-form>
          <form action="/" method="post">
            <fr-input label="Label champs de saisie"></fr-input>
          </form>
        </fr-form>`,
    });
    expect(root).toEqualHtml(`
      <fr-form>
        <form action="/" method="post">
          <fr-input label="Label champs de saisie"></fr-input>
        </form>
      </fr-form>
    `);
  });
});
