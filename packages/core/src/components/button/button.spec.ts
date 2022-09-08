import '../../engine/__mocks__/engine.mock';
import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('fr-btn', () => {
  it('default button', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<fr-btn button-title="label button" aria-label="label button">label button</fr-btn>',
    });
    expect(root).toEqualHtml(`
      <fr-btn button-title="label button" >
        <mock:shadow-root>
          <button title="label button" aria-label="label button" class="fr-btn">
             <slot name="left"></slot>
             <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        label button
      </fr-btn>
    `);
  });
  it('button small', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<fr-btn button-title="label button" size="sm" aria-label="label button"> label button</fr-btn>',
    });
    expect(root).toEqualHtml(`
      <fr-btn button-title="label button" size="sm" >
        <mock:shadow-root>
          <button aria-label="label button" title="label button" class="fr-btn fr-btn--sm">
             <slot name="left"></slot>
             <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        label button
      </fr-btn>
    `);
  });
  it('button large', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<fr-btn button-title="label button" size="lg" aria-label="label button">Label Button</fr-btn>',
    });
    expect(root).toEqualHtml(`
      <fr-btn button-title="label button" size="lg" >
        <mock:shadow-root>
          <button title="label button" aria-label="label button" class="fr-btn fr-btn--lg">
             <slot name="left"></slot>
             <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Label Button
      </fr-btn>
    `);
  });
  it('button disabled', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<fr-btn button-title="Label button" disabled aria-label="label button">Label Button</fr-btn>',
    });
    expect(root).toEqualHtml(`
      <fr-btn  button-title="Label button" disabled="" >
        <mock:shadow-root>
          <button title="Label button" disabled="" aria-label="label button" class="fr-btn">
             <slot name="left"></slot>
             <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Label Button
      </fr-btn>
    `);
  });
  it('button secondary', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<fr-btn state="secondary" button-title="Label button" aria-label="label button">label button</fr-btn>',
    });
    expect(root).toEqualHtml(`
      <fr-btn state="secondary" button-title="Label button" >
        <mock:shadow-root>
          <button title="Label button" aria-label="label button" class="fr-btn fr-btn--secondary">
             <slot name="left"></slot>
             <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        label button
      </fr-btn>
    `);
  });

  it('button with icon', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<fr-btn button-title="Label button" aria-label="Label button">
              <fr-icon name="checkbox-line" slot="left"></fr-icon>
              Label button
            </fr-btn>`,
    });
    expect(root).toEqualHtml(`
      <fr-btn button-title="Label button" >
        <mock:shadow-root>
          <button title="Label button" aria-label="Label button" class="fr-btn">
            <slot name="left"></slot>
            <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        <fr-icon name="checkbox-line" slot="left"></fr-icon>
        Label button
      </fr-btn>
    `);
  });

  it('button with iconOnly', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<fr-btn icon-only button-title="Label button" aria-label="Label button">
              <fr-icon name="checkbox-line" slot="left"></fr-icon>
              Label button
            </fr-btn>`,
    });
    expect(root).toEqualHtml(`
      <fr-btn button-title="Label button" icon-only>
        <mock:shadow-root>
          <button title="Label button" aria-label="Label button" class="fr-btn">
            <slot name="left"></slot>
            <slot name="text"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        <fr-icon name="checkbox-line" slot="left"></fr-icon>
        Label button
      </fr-btn>
    `);
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<fr-btn button-title="Label button" aria-label="Label button">
              Label button
            </fr-btn>`,
    });
    let buttonSpy = jest.fn();
    page.win.addEventListener('focus', buttonSpy);
    page.rootInstance.onFocus();
    await page.waitForChanges();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<fr-btn button-title="Label button" aria-label="Label button">
              Label button
            </fr-btn>`,
    });
    let buttonSpy = jest.fn();
    page.win.addEventListener('blur', buttonSpy);
    page.rootInstance.onBlur();
    await page.waitForChanges();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<form>
              <fr-btn button-title="Label button" aria-label="Label button" type="submit">
                Label button
              </fr-btn>
            </form>`,
    });
    let buttonSpy = jest.fn();
    page.root.addEventListener('click', buttonSpy);
    page.root.click();
    await page.waitForChanges();
    expect(buttonSpy).toHaveBeenCalled();
  });
});
