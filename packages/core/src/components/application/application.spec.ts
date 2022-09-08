import '../../engine/__mocks__/engine.mock';
import { newSpecPage } from '@stencil/core/testing';
import { Application } from './application';

describe('fr-app', () => {
  it('default application', async () => {
    const { root } = await newSpecPage({
      components: [Application],
      html: `
        <fr-app>
          <h1>Title</h1>
        </fr-app>`,
    });
    expect(root).toEqualHtml(`
      <fr-app>
        <h1>Title</h1>
      </fr-app>
    `);
  });
});
