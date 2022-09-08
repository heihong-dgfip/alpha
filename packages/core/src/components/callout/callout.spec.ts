import { newSpecPage } from '@stencil/core/testing';
import { Callout } from './callout';

describe('fr-callout', () => {

  it('default', async () => {
    const page = await newSpecPage({
      components: [Callout],
      html: `<fr-callout>du texte</fr-callout>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-callout>
      <mock:shadow-root>
        <div class="fr-callout">
          <slot name="icon"></slot>
          <slot name="title"></slot>
          <p class="fr-callout__text">
            <slot></slot>
          </p>
          <slot name="action"></slot>
        </div>
      </mock:shadow-root>
      du texte
    </fr-callout>`);
  });

  it('has-title', async () => {
    const page = await newSpecPage({
      components: [Callout],
      html: `<fr-callout><h3 slot="title">the_titre</h3>">du texte</fr-callout>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-callout>
      <mock:shadow-root>
        <div class="fr-callout">
          <slot name="icon"></slot>
          <slot name="title"></slot>
          <p class="fr-callout__text">
            <slot></slot>
          </p>
          <slot name="action"></slot>
        </div>
      </mock:shadow-root>
      <h3 slot="title">the_titre</h3>
      "&gt;du texte
    </fr-callout>`);
  });

  it('has-button', async () => {
    const page = await newSpecPage({
      components: [Callout],
      html: `<fr-callout>du texte<fr-btn class="fr-btn" button-title="OK" slot="action">OK</fr-btn></fr-callout>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-callout>
      <mock:shadow-root>
        <div class="fr-callout">
          <slot name="icon"></slot>
          <slot name="title"></slot>
          <p class="fr-callout__text">
            <slot></slot>
          </p>
          <slot name="action"></slot>
        </div>
      </mock:shadow-root>
      du texte
      <fr-btn class="fr-btn" button-title="OK" slot="action">
        OK
      </fr-btn>
    </fr-callout>`);
  });

});
