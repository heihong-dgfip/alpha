import { newSpecPage } from '@stencil/core/testing';
import { FfLogo } from './logo';

describe('logo default', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FfLogo],
      html: '<fr-logo></fr-logo>',
    });
    expect(root).toEqualHtml(`
      <fr-logo>
        <mock:shadow-root>
        <p class="fr-logo">
            République
            <br/>
            Française
         </p>
        </mock:shadow-root>
      </fr-logo>
    `);
  });

  it('logo small', async () => {
    const { root } = await newSpecPage({
      components: [FfLogo],
      html: `<fr-logo size="sm"></fr-logo>`,
    });
    expect(root).toEqualHtml(`
      <fr-logo size="sm">
        <mock:shadow-root>
        <p class="fr-logo fr-logo--sm">
            République
            <br/>
            Française
         </p>
        </mock:shadow-root>
      </fr-logo>
    `);
  });
  it('logo large', async () => {
    const { root } = await newSpecPage({
      components: [FfLogo],
      html: `<fr-logo size="lg"></fr-logo>`,
    });
    expect(root).toEqualHtml(`
      <fr-logo size="lg">
        <mock:shadow-root>
          <p class="fr-logo fr-logo--lg">
            République
            <br/>
            Française
         </p>
        </mock:shadow-root>
      </fr-logo>
    `);
  });
});
