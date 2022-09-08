import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('card', () => {
  it('default', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: `<fr-card  href="fondamentaux.svg" title="Fondamentaux" title-type="h4">
                <p slot="detail">Détail</p>
                <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
                <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
            </fr-card>`,
    });

    expect(root).toEqualHtml(`
    <fr-card  href="fondamentaux.svg" title="Fondamentaux" title-type="h4">
      <mock:shadow-root>
        <div class='fr-card'>
          <div class="fr-card__body">
            <slot name="detail"></slot>
            <h4>
              <a href="fondamentaux.svg" class="fr-card__link">
                Fondamentaux
              </a>
            </h4>
            <slot></slot>
          </div>
          <div class="fr-card__img">
            <slot name="img"></slot>
          </div>
        </div>
        </footer>
      </mock:shadow-root>
       <p slot="detail">Détail</p>
       <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
       <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
    </fr-card>`);
  });
  it('NoArrow', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: `<fr-card  href="fondamentaux.svg" no-arrow="true" title="Fondamentaux" title-type="h4">
                <p slot="detail">Détail</p>
                <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
                <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
            </fr-card>`,
    });

    expect(root).toEqualHtml(`
    <fr-card  href="fondamentaux.svg" no-arrow title="Fondamentaux" title-type="h4">
      <mock:shadow-root>
        <div class='fr-card fr-card--no-arrow'>
          <div class="fr-card__body">
            <slot name="detail"></slot>
            <h4>
              <a href="fondamentaux.svg" class="fr-card__link">
                Fondamentaux
              </a>
            </h4>
            <slot></slot>
          </div>
          <div class="fr-card__img">
            <slot name="img"></slot>
          </div>
        </div>
        </footer>
      </mock:shadow-root>
       <p slot="detail">Détail
       <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
       <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
    </fr-card>`);
  });

  it('Horizontal', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: `<fr-card  href="fondamentaux.svg" horizontal="true" title="Fondamentaux" title-type="h4">
                <p slot="detail">Détail</p>
                <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
                <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
            </fr-card>`,
    });

    expect(root).toEqualHtml(`
    <fr-card  href="fondamentaux.svg" horizontal title="Fondamentaux" title-type="h4">
      <mock:shadow-root>
        <div class='fr-card fr-card--horizontal'>
          <div class="fr-card__body">
            <slot name="detail"></slot>
            <h4>
              <a href="fondamentaux.svg" class="fr-card__link">
                Fondamentaux
              </a>
            </h4>
            <slot></slot>
          </div>
          <div class="fr-card__img">
            <slot name="img"></slot>
          </div>
        </div>
        </footer>
      </mock:shadow-root>
       <p slot="detail">Détail
       <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
       <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
    </fr-card>`);
  });
  it('Horizontal', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: `<fr-card  href="fondamentaux.svg" enlarge-link="true" title="Fondamentaux" title-type="h4">
                <p slot="detail">Détail</p>
                <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
                <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
            </fr-card>`,
    });

    expect(root).toEqualHtml(`
    <fr-card  href="fondamentaux.svg" enlarge-link title="Fondamentaux" title-type="h4">
      <mock:shadow-root>
        <div class='fr-card fr-enlarge-link'>
          <div class="fr-card__body">
            <slot name="detail"></slot>
            <h4>
              <a href="fondamentaux.svg" class="fr-card__link">
                Fondamentaux
              </a>
            </h4>
            <slot></slot>
          </div>
          <div class="fr-card__img">
            <slot name="img"></slot>
          </div>
        </div>
        </footer>
      </mock:shadow-root>
       <p slot="detail">Détail
       <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
       <img src="fondamentaux.svg" alt="fondamentaux.svg" slot="img" />
    </fr-card>`);
  });
});
