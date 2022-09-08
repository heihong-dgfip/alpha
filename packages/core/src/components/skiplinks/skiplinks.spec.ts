import { newSpecPage } from '@stencil/core/testing';
import { Skiplinks } from './skiplinks';

describe('skiplinks default', () => {
  it('default', async () => {
    const  page  = await newSpecPage({
      components: [Skiplinks],
      html: `
      <fr-skiplinks></fr-skiplinks>`,
    });
    page.rootInstance.links= [
    {
      textContent: 'Contenu',
      href: '#content',
    },
    {
      textContent: 'Menu',
      href: '#header-navigation',
    },
    {
      textContent: 'Recherche',
      href: '#header-search',
    },
    {
      textContent: 'Pied de page',
      href:'#footer'
    },
  ];
   await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <fr-skiplinks>
        <mock:shadow-root>
         <div class="fr-skiplinks">
          <fr-container>
            <nav role="navigation">
              <ul class="fr-skiplinks__list">
                <li>
                  <fr-link chip href="#content">Contenu</fr-link>
                </li>
                <li>
                  <fr-link chip href="#header-navigation">Menu</fr-link>
                </li>
                <li>
                  <fr-link chip href="#header-search">Recherche</fr-link>
                </li>
                <li>
                  <fr-link chip href="#footer">Pied de page</fr-link>
                </li> 
              </ul>
            </nav>
          </fr-container>
        </div>
        </mock:shadow-root>
      </fr-skiplinks>
    `);
  });
  it('native', async () => {
    const { root } = await newSpecPage({
      components: [Skiplinks],
      html: `
      <fr-skiplinks>
         <a href="https://testing.stenciljs.com/content">Contenu</a>
          <a href="https://testing.stenciljs.com/header-navigation">Menu</a>
          <a href="https://testing.stenciljs.com/header-search">Recherche</a>
          <a href="https://testing.stenciljs.com/footer">Pied de page</a> 
      </fr-skiplinks>`,
    });
    expect(root).toEqualHtml(`
      <fr-skiplinks>
        <mock:shadow-root>
         <div class="fr-skiplinks">
          <fr-container>
            <nav role="navigation">
              <ul class="fr-skiplinks__list">
                <li>
                  <fr-link chip href="https://testing.stenciljs.com/content">Contenu</fr-link>
                </li>
                <li>
                  <fr-link chip href="https://testing.stenciljs.com/header-navigation">Menu</fr-link>
                </li>
                <li>
                  <fr-link chip href="https://testing.stenciljs.com/header-search">Recherche</fr-link>
                </li>
                <li>
                  <fr-link chip href="https://testing.stenciljs.com/footer">Pied de page</fr-link>
                </li> 
              </ul>
            </nav>
          </fr-container>
        </div>
        </mock:shadow-root>
        <a href="https://testing.stenciljs.com/content">Contenu</a>
          <a href="https://testing.stenciljs.com/header-navigation">Menu</a>
          <a href="https://testing.stenciljs.com/header-search">Recherche</a>
          <a href="https://testing.stenciljs.com/footer">Pied de page</a> 
      </fr-skiplinks>
    `);
  });
});
