import { newSpecPage, newE2EPage } from '@stencil/core/testing';
import { Alert } from './alert';

describe('fr-alert', () => {
  const info = "info";
  const error = "error";
  const success = "success";
  const infoClass = "fr-alert--info";
  const errorClass = "fr-alert--error";
  const successClass = "fr-alert--success";

  it('default', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <fr-alert title="Titre d'alerte">
      <mock:shadow-root>
        <div role="alert" class="fr-alert">
          <slot name="icon"></slot>
          <slot name="title"></slot>
          <p class="fr-alert__title">Titre d'alerte</p>
          <p>
            <slot></slot>
          </p>
        </div>
      </mock:shadow-root>
      Descriptif
    </fr-alert>`);
  });

  it('throw-error', async() => {
    let msgError;
    try {
      const page = await newSpecPage({
        components: [Alert],
        html: `<fr-alert>Descriptif</fr-alert>`
      });
      expect(page.rootInstance).toBeNull();
    }
    catch(e) {
      msgError = e.message;
    }
    expect('Alert must be initialized with a title attribute or a html hx element').toEqual(msgError);
  });

  it('is-typed-alert', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" type="${info}">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const elt = await page.root as HTMLElement;
    expect(elt).toHaveAttribute("type");
  });

  it('is-info', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" type="${info}">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const divElt = await page.root.shadowRoot.querySelector('div') as HTMLDivElement;
    expect(divElt.className).toContain(infoClass);
  });

  it('is-error', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" type="${error}">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const divElt = await page.root.shadowRoot.querySelector('div') as HTMLDivElement;
    expect(divElt.className).toContain(errorClass);
  });

  it('is-success', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" type="${success}">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const divElt = await page.root.shadowRoot.querySelector('div') as HTMLDivElement;
    expect(divElt.className).toContain(successClass);
  });

  it('is-random-type', async () => {
    const arr = [info, error, success];
    const nbr = random(0, 2);
    const type = arr[nbr];

    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" type="${type}">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const divElt = await page.root.shadowRoot.querySelector('div') as HTMLDivElement;
    if (nbr === 0)
      expect(divElt.className).toContain(infoClass);
    else if (nbr === 1)
      expect(divElt.className).toContain(errorClass);
    else if (nbr === 2)
      expect(divElt.className).toContain(successClass);

    function random(min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }
  });

  it('is-closable', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" closable>Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const elt = await page.root.shadowRoot.querySelector('fr-btn');
    expect(elt).not.toBeNull();
  });

  it('is-collapsible', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" closable-collapsible alert-id="10">Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const elt = await page.root.shadowRoot.querySelector('fr-btn');
    expect(elt).toHaveAttribute('aria-expanded');
    expect(elt).toHaveAttribute('aria-controls');
  });

  it('is-small', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<fr-alert title="Titre d'alerte" small>Descriptif</fr-alert>`
    });
    await page.waitForChanges();
    const elt = await page.root.shadowRoot.querySelector('div') as HTMLDivElement;
    expect(elt.className).toContain("fr-alert--sm");
  });

});
