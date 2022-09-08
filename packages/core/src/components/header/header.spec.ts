import { newSpecPage } from '@stencil/core/testing';
import { Header } from './header';

describe('header', () => {
  describe('desktopDevice', () => {
    it('logo/header-service/search', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = true;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-0">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                      <slot name="header-tools-links"></slot>
                      <div class="fr-header__search">
                          <slot name="search"></slot>
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                      <slot name="navigation"></slot>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-0">
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-0">
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>
        </fr-header>`);
    });
    it('logo/header-service/search/header-tools-links', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = true;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-1">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                          <fr-btn btn-nav-menu="" icon-only="" modal-opener-id="btn-nav-1">
                                  <fr-icon slot="left" name="menu-fill"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                      <slot name="header-tools-links"></slot>
                      <div class="fr-header__search">
                          <slot name="search"></slot>
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                      <slot name="navigation"></slot>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-1">
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-1">
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>
        </fr-header>`);
    });
    it('logo/header-service/search/header-tools-links/navigation', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

          <fr-navigation aria-label="Menu principal" slot="navigation">
            <a href="#">accès direct</a>
            <a href="#">accès direct</a>
          </fr-navigation>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = true;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-2">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                          <fr-btn btn-nav-menu="" icon-only="" modal-opener-id="btn-nav-2">
                                  <fr-icon slot="left" name="menu-fill"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                      <slot name="header-tools-links"></slot>
                      <div class="fr-header__search">
                          <slot name="search"></slot>
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                      <slot name="navigation"></slot>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-2">
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-2">
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

          <fr-navigation aria-label="Menu principal" slot="navigation">
            <a href="#">accès direct</a>
            <a href="#">accès direct</a>
          </fr-navigation>
        </fr-header>`);
    });
  });

  describe('small', () => {
    it('logo/header-service/search', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = false;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-3">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                      <div class="fr-header__search">
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-3">
                <slot name="search"></slot>
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-3">
                <slot name="header-tools-links"></slot>
                 <slot name="navigation"></slot>
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>
        </fr-header>`);
    });
    it('logo/header-service/search/header-tools-links', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = false;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-4">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                          <fr-btn btn-nav-menu="" icon-only="" modal-opener-id="btn-nav-4">
                                  <fr-icon slot="left" name="menu-fill"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                      <div class="fr-header__search">
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-4">
                <slot name="search"></slot>
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-4">
                <slot name="header-tools-links"></slot>
                <slot name="navigation"></slot>
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>
        </fr-header>`);
    });
    it('logo/header-service/search/header-tools-links/navigation', async () => {
      const page = await newSpecPage({
        components: [Header],
        html: `
        <fr-header>

          <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

          <fr-navigation aria-label="Menu principal" slot="navigation">
            <a href="#">accès direct</a>
            <a href="#">accès direct</a>
          </fr-navigation>

        </fr-header>`,
      });
      page.rootInstance.desktopDevice = false;
      await page.waitForChanges();
      expect(page.root).toEqualHtml(`
      <fr-header>
      <mock:shadow-root> 
          <header role="banner" class="fr-header"> 
              <div class="fr-header__body">
              <fr-container>
                  <div class="fr-header__body-row">
                  <div class="fr-header__brand fr-enlarge-link">
                      <div class="fr-header__brand-top">
                      <slot name="logo"></slot>
                      <div class="fr-header__navbar">
                          <fr-btn btn-nav-search="" icon-only="" modal-opener-id="btn-search-5">
                                  <fr-icon slot="left" name="search-line"></fr-icon>
                          </fr-btn>
                          <fr-btn btn-nav-menu="" icon-only="" modal-opener-id="btn-nav-5">
                                  <fr-icon slot="left" name="menu-fill"></fr-icon>
                          </fr-btn>
                      </div>
                  </div>
                      <slot name="header-service"></slot>
                  </div>
                  <div class="fr-header__tools">
                     
                      <div class="fr-header__search">
                         
                      </div>
                  </div>
                  </div>
              </fr-container>
              </div>
              <div class="fr-header__menu">
                  <fr-container>
                  </fr-container>
              </div>

              <fr-modal header-modal frId="btn-search-5">
                <slot name="search"></slot>
              </fr-modal>
              <fr-modal header-modal frId="btn-nav-5">
                <slot name="header-tools-links"></slot>
                 <slot name="navigation"></slot>
              </fr-modal>
          </header>
        </mock:shadow-root>
        <fr-logo slot="logo"></fr-logo>

          <fr-header-service slot="header-service">
            <p slot="title">Nom du site / service</p>
            <p>Délégation à la transformation numérique</p>
          </fr-header-service>

          <fr-header-tools-links slot="header-tools-links">
            <fr-link href="#">
              Créer un espace
              <fr-icon name="add-circle-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              Se connecter
              <fr-icon name="lock-line"></fr-icon>
            </fr-link>
            <fr-link href="#">
              S’enregistrer
              <fr-icon name="account-line"></fr-icon>
            </fr-link>
          </fr-header-tools-links>

          <fr-search slot="search">
            <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
            <fr-btn icon-only>
              <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
            </fr-btn>
          </fr-search>

          <fr-navigation aria-label="Menu principal" slot="navigation">
            <a href="#">accès direct</a>
            <a href="#">accès direct</a>
          </fr-navigation>
        </fr-header>`);
    });
  });
  
});
