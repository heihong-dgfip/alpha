import { newSpecPage } from '@stencil/core/testing';
import { Tag } from './tag';

describe('tag default', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: '<fr-tag href="#">label tag</fr-tag>',
    });
    expect(root).toEqualHtml(`
      <fr-tag href="#">
        <mock:shadow-root>
        <a class="fr-tag" href="#">
           <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
         </a>
        </mock:shadow-root>
        label tag
      </fr-tag>
    `);
  });

  it('Icon Left Tag', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: `<fr-tag href="#"><fr-icon name="arrow-left-line" slot="left"></fr-icon> label tag</fr-tag>`,
    });
    expect(root).toEqualHtml(`
      <fr-tag href="#">
        <mock:shadow-root>
        <a class="fr-tag" href="#">
           <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
         </a>
        </mock:shadow-root>
        <fr-icon name="arrow-left-line" slot="left"></fr-icon> label tag
      </fr-tag>
    `);
  });
  it('Icon Right Tag', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: `<fr-tag href="#"><fr-icon name="arrow-left-line" slot="right"></fr-icon> label tag</fr-tag>`,
    });
    expect(root).toEqualHtml(`
      <fr-tag href="#">
        <mock:shadow-root>
        <a class="fr-tag" href="#">
           <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
         </a>
        </mock:shadow-root>
        <fr-icon name="arrow-left-line" slot="right"></fr-icon> label tag
      </fr-tag>
    `);
  });
  it('Small Template', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: `<fr-tag sm="true" href="#"><fr-icon name="arrow-left-line" slot="right"></fr-icon> label tag</fr-tag>`,
    });
    expect(root).toEqualHtml(`
      <fr-tag href="#" sm>
        <mock:shadow-root>
        <a class="fr-tag fr-tag--sm" href="#">
           <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
         </a>
        </mock:shadow-root>
        <fr-icon name="arrow-left-line" slot="right"></fr-icon> label tag
      </fr-tag>
    `);
  });
  it('No href', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: `<fr-tag>label tag</fr-tag>`,
    });
    expect(root).toEqualHtml(`
      <fr-tag>
        <mock:shadow-root>
        <p class="fr-tag" >
           <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
         </p>
        </mock:shadow-root>
         label tag
      </fr-tag>
    `);
  });
});
