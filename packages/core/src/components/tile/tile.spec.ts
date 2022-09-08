import { newSpecPage } from '@stencil/core/testing';
import { Tile } from './tile';

describe('tile', () => {
  /**
   * Default component with image and description
   */
  it('vertical (defaut)', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2">
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">
          Lorem ipsum [...] cum esse.
        </p>
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2">
      <mock:shadow-root>
        <div class="fr-tile">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
            <div class="fr-tile__desc">
              <slot name="desc"></slot>
            </div>
          </div>
          <div class="fr-tile__img">
            <slot name="img"></slot>
          </div>
        </div>
      </mock:shadow-root>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">Lorem ipsum [...] cum esse.</p> 
    </fr-tile>`);
  });

  /**
   * Horizontal component with image and description
   */
  it('horizontal', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2" horizontal>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">
          Lorem ipsum [...] cum esse.
        </p>
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2" horizontal>
      <mock:shadow-root>
        <div class="fr-tile fr-tile--horizontal">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
            <div class="fr-tile__desc">
              <slot name="desc"></slot>
            </div>
          </div>
          <div class="fr-tile__img">
            <slot name="img"></slot>
          </div>
        </div>
      </mock:shadow-root>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">Lorem ipsum [...] cum esse.</p> 
    </fr-tile>`);
  });

  /**
   * Vertical component with image, description and enlarge link
   */
  it('vertical enlarge-link', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2" enlarge-link>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">
          Lorem ipsum [...] cum esse.
        </p>
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2" enlarge-link>
      <mock:shadow-root>
        <div class="fr-tile fr-enlarge-link">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
            <div class="fr-tile__desc">
              <slot name="desc"></slot>
            </div>
          </div>
          <div class="fr-tile__img">
            <slot name="img"></slot>
          </div>
        </div>
      </mock:shadow-root>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">Lorem ipsum [...] cum esse.</p> 
    </fr-tile>`);
  });

  /**
   * Horizontal component with image, description and enlarge link
   */
  it('horizontal enlarge-link', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2" horizontal enlarge-link>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">
          Lorem ipsum [...] cum esse.
        </p>
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2" horizontal enlarge-link>
      <mock:shadow-root>
        <div class="fr-tile fr-tile--horizontal fr-enlarge-link">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
            <div class="fr-tile__desc">
              <slot name="desc"></slot>
            </div>
          </div>
          <div class="fr-tile__img">
            <slot name="img"></slot>
          </div>
        </div>
      </mock:shadow-root>
        <img slot="img" src="build/apple-touch-icon.png"/>
        <p slot="desc">Lorem ipsum [...] cum esse.</p> 
    </fr-tile>`);
  });

  /**
   * Vertical component without image
   */
  it('vertical sans image', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2">
        <p slot="desc">
          Lorem ipsum [...] cum esse.
        </p>
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2">
      <mock:shadow-root>
        <div class="fr-tile">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
            <div class="fr-tile__desc">
              <slot name="desc"></slot>
            </div>
          </div>
        </div>
      </mock:shadow-root>
        <p slot="desc">Lorem ipsum [...] cum esse.</p> 
    </fr-tile>`);
  });

  /**
   * Vertical component without image ant description
   */
  it('vertical sans image et sans desc', async () => {
    const { root } = await newSpecPage({
      components: [Tile],
      html: `<fr-tile href="#" title-type="h2" titre="Mon titre h2">
      </fr-tile>`,
    });

    expect(root).toEqualHtml(`
    <fr-tile href="#" title-type="h2" titre="Mon titre h2">
      <mock:shadow-root>
        <div class="fr-tile">
          <div class="fr-tile__body">
            <div class="fr-tile__title">
              <h2>
                <a href="#" class="fr-tile__link">Mon titre h2</a>
              </h2>
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </fr-tile>`);
  });
});
