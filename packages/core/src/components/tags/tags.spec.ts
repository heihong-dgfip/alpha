import { newSpecPage } from '@stencil/core/testing';
import { Tags } from './tags';

describe('tag default', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Tags],
      html: `<fr-tags>
        <fr-tag>label tag</fr-tag>
        <fr-tag>label tag</fr-tag>
      </fr-tags>`,
    });
    expect(root).toEqualHtml(`
      <fr-tags>
        <mock:shadow-root>
        <ul class="fr-tags-group">
            <li>
                <fr-tag>label tag</fr-tag>
            </li>
            <li>
                <fr-tag>label tag</fr-tag>
            </li>
        </ul>
        </mock:shadow-root>
        <fr-tag>label tag</fr-tag>
        <fr-tag>label tag</fr-tag>
      </fr-tag>
    `);
  });
});
