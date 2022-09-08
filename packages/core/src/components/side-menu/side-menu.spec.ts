import { newSpecPage } from '@stencil/core/testing';
import { SideMenu } from './side-menu';

describe('fr-sidemenu', () => {
  xit('default', async () => {
    const page = await newSpecPage({
      components: [SideMenu],
      html: `<fr-sidemenu>
                <a href="">Accès direct 1.1</a>
                <div name="Niveau 1.2">
                  <a href="">Accès direct 2.1</a>
                  <div name="Niveau 2.3">
                    <a href="">Accès direct 3.1</a>
                  </div>
                </div>
            </fr-sidemenu>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-sidemenu>
      <mock:shadow-root>
        <nav class="fr-sidemenu" role="navigation" aria-label="Menu latéral">
          <div class="fr-sidemenu__inner">
            <fr-btn class="fr-sidemenu__btn hydrated" aria-controls="sidemenu-1" aria-expanded="false">Dans cette rubrique</fr-btn>
            <div class="fr-collapse" id="sidemenu-1">
              <div class="fr-sidemenu__title"></div>
              <ul class="fr-sidemenu__list">
                <li class="fr-sidemenu__item">
                  <a class="fr-sidemenu__link fr-sd1" href="" target="_self">Accès direct 1.1</a>
                </li>
                <li class="fr-sidemenu__item fr-sidemenu__item--active">
                  <fr-btn class="fr-sidemenu__btn fr-sd1 hydrated" aria-expanded="true" aria-controls="sidemenu-10" aria-current="true">Niveau 1.2</fr-btn>
                  <div class="fr-collapse fr-collapse--expanded" id="sidemenu-10">
                    <ul class="fr-sidemenu__list">
                      <li class="fr-sidemenu__item">
                        <a class="fr-sidemenu__link fr-sd2" href="" target="_self">Accès direct 2.1</a>
                      </li>
                      <li class="fr-sidemenu__item fr-sidemenu__item--active">
                        <fr-btn class="fr-sidemenu__btn fr-sd2 hydrated" aria-expanded="true" aria-controls="sidemenu-20" aria-current="true">Niveau 2.3</fr-btn>
                        <div class="fr-collapse fr-collapse--expanded" id="sidemenu-20">
                          <ul class="fr-sidemenu__list">
                            <li class="fr-sidemenu__item">
                              <a class="fr-sidemenu__link fr-sd3" href="" target="_self">Accès direct 3.1</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </mock:shadow-root>
    </fr-sidemenu>`);
  });

  // it('has-title', async () => {
  //   const page = await newSpecPage({
  //     components: [Callout],
  //     html: `<fr-callout><h3 slot="title">the_titre</h3>">du texte</fr-callout>`
  //   });
  //   await page.waitForChanges();
  //   expect(page.root).toEqualHtml(`
  //   <fr-callout>
  //     <mock:shadow-root>
  //       <div class="fr-callout">
  //         <slot name="icon"></slot>
  //         <slot name="title"></slot>
  //         <p class="fr-callout__text">
  //           <slot></slot>
  //         </p>
  //         <slot name="action"></slot>
  //       </div>
  //     </mock:shadow-root>
  //     <h3 slot="title">the_titre</h3>
  //     "&gt;du texte
  //   </fr-callout>`);
  // });
  //
  // it('has-button', async () => {
  //   const page = await newSpecPage({
  //     components: [Callout],
  //     html: `<fr-callout>du texte<fr-btn class="fr-btn" button-title="OK" slot="action">OK</fr-btn></fr-callout>`
  //   });
  //   await page.waitForChanges();
  //   expect(page.root).toEqualHtml(`
  //   <fr-callout>
  //     <mock:shadow-root>
  //       <div class="fr-callout">
  //         <slot name="icon"></slot>
  //         <slot name="title"></slot>
  //         <p class="fr-callout__text">
  //           <slot></slot>
  //         </p>
  //         <slot name="action"></slot>
  //       </div>
  //     </mock:shadow-root>
  //     du texte
  //     <fr-btn class="fr-btn" button-title="OK" slot="action">
  //       OK
  //     </fr-btn>
  //   </fr-callout>`);
  // });
});
