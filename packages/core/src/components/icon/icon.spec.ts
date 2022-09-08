import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

describe('fr-icon', () => {
  it('alert-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="alert-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="alert-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('alert-fill small', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="alert-fill" size="sm"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="alert-fill" size="sm">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('alert-fill large', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="alert-fill" size="lg"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="alert-fill" size="lg">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('alert-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="alert-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="alert-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('question-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="question-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="question-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('question-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="question-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="question-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('information-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="information-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="information-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('information-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="information-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="information-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('close-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="close-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="close-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('check-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="check-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="check-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('close-circle-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="checkbox-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="checkbox-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('close-circle-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="close-circle-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="close-circle-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('menu-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="menu-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="menu-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('menu-2-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="menu-2-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="menu-2-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-up-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-up-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-up-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('arrow-right-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-right-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-right-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-down-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-down-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-down-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-left-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-left-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-left-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-up-s-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-up-s-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-up-s-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-right-s-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-right-s-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-right-s-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-down-s-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-down-s-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-down-s-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('arrow-left-s-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="arrow-left-s-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="arrow-left-s-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('user-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="user-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="user-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('user-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="user-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="user-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('account-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="account-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="account-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('account-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="account-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="account-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('lock-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="lock-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="lock-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('lock-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="lock-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="lock-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('search-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="search-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="search-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('search-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="search-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="search-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('eye-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="eye-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="eye-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('eye-off-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="eye-off-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="eye-off-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('printer-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="printer-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="printer-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('printer-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="printer-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="printer-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('file-download-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-download-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-download-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('file-download-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-download-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-download-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('download-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="download-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="download-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('external-link-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="external-link-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="external-link-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('edit-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="edit-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="edit-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('edit-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="edit-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="edit-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('delete-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="delete-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="delete-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('delete-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="delete-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="delete-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });

  it('save-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="save-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="save-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('save-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="save-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="save-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('calendar-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="calendar-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="calendar-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('calendar-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="calendar-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="calendar-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('file-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('file-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('mail-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="mail-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="mail-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('mail-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="mail-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="mail-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('play-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="play-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="play-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('play-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="play-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="play-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-up-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-up-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-up-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-up-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-up-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-up-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-mute-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-mute-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-mute-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-mute-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-mute-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-mute-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-down-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-down-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-down-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('volume-down-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="volume-down-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="volume-down-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('pause-circle-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="pause-circle-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="pause-circle-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('pause-circle-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="pause-circle-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="pause-circle-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('file-pdf-fill', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-pdf-fill"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-pdf-fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
  it('file-pdf-line', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<fr-icon name="file-pdf-line"></fr-icon>',
    });
    expect(root).toEqualHtml(`
      <fr-icon aria-hidden="true" name="file-pdf-line">
        <mock:shadow-root>
        </mock:shadow-root>
      </fr-icon>
    `);
  });
});
