import { newSpecPage } from '@stencil/core/testing';
import { HeaderToolsLinks } from './header-tools-links';

describe('header-tools-links', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [HeaderToolsLinks],
      html: `
    <fr-header-tools-links>
        <fr-link href="#">
          Créer un espace
          <fr-icon slot="left" name="add-circle-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         Se connecter
          <fr-icon slot="left" name="lock-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         S’enregistrer
           <fr-icon slot="left" name="account-line"></fr-icon>
        </fr-link>
      </fr-header-tools-links>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-header-tools-links>
      <mock:shadow-root>
        <div class="fr-header__tools-links">
            <ul class="fr-links-group">
                <li>
                   <fr-link chip size="sm">Créer un espace
                        <fr-icon slot="left" name="add-circle-line"></fr-icon>
                    </fr-link>
                </li>
                <li>
                    <fr-link chip size="sm"> Se connecter
                        <fr-icon slot="left" name="lock-line"></fr-icon>
                    </fr-link>
                </li>
                <li>
                    <fr-link chip size="sm">S’enregistrer
                        <fr-icon slot="left" name="account-line"></fr-icon>
                    </fr-link>
                </li>
            </ul>
        </div>
      </mock:shadow-root>
       <fr-link href="#">
          Créer un espace
          <fr-icon slot="left" name="add-circle-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         Se connecter
          <fr-icon slot="left" name="lock-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         S’enregistrer
           <fr-icon slot="left" name="account-line"></fr-icon>
        </fr-link>
    </fr-header-tools-links>`);
  });
   it('no icon', async () => {
    const page = await newSpecPage({
      components: [HeaderToolsLinks],
      html: `
    <fr-header-tools-links>
        <fr-link href="#">
          Créer un espace
        </fr-link>
        <fr-link href="#">
         Se connecter
        </fr-link>
        <fr-link href="#">
         S’enregistrer
        </fr-link>
      </fr-header-tools-links>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-header-tools-links>
      <mock:shadow-root>
        <div class="fr-header__tools-links">
            <ul class="fr-links-group">
                <li>
                   <fr-link chip size="sm">Créer un espace
                    </fr-link>
                </li>
                <li>
                    <fr-link chip size="sm"> Se connecter
                    </fr-link>
                </li>
                <li>
                    <fr-link chip size="sm">S’enregistrer
                    </fr-link>
                </li>
            </ul>
        </div>
      </mock:shadow-root>
       <fr-link href="#">
          Créer un espace
        </fr-link>
        <fr-link href="#">
         Se connecter
        </fr-link>
        <fr-link href="#">
         S’enregistrer
        </fr-link>
    </fr-header-tools-links>`);
  });

  
});
