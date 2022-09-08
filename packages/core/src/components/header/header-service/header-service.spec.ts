import { newSpecPage } from '@stencil/core/testing';
import { HeaderService } from './header-service';

describe('header-service', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [HeaderService],
      html: `
        <fr-header-service>
            <p slot="title">DTNUM / Pôle expérience utilisateur</p>
            <p>Délégation à la transformation numérique</p>
    </fr-header-service>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-header-service href="/">
      <mock:shadow-root>
        <div class="fr-header__service">
          <a href="/" title="Accueil DTNUM / Pôle expérience utilisateur">
            <slot name="title"></slot>
          </a>
          <slot></slot>
        </div>
      </mock:shadow-root>
        <p slot="title">DTNUM / Pôle expérience utilisateur</p>
        <p>Délégation à la transformation numérique</p>
    </fr-header-service>`);
  });

  it('href', async () => {
    const page = await newSpecPage({
      components: [HeaderService],
      html: `
        <fr-header-service href="https://legifrance.gouv.fr">
            <p slot="title">DTNUM / Pôle expérience utilisateur</p>
            <p>Délégation à la transformation numérique</p>
    </fr-header-service>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-header-service href="https://legifrance.gouv.fr">
      <mock:shadow-root>
        <div class="fr-header__service">
          <a href="https://legifrance.gouv.fr" title="Accueil DTNUM / Pôle expérience utilisateur">
            <slot name="title"></slot>
          </a>
          <slot></slot>
        </div>
      </mock:shadow-root>
        <p slot="title">DTNUM / Pôle expérience utilisateur</p>
        <p>Délégation à la transformation numérique</p>
    </fr-header-service>`);
  });
});
