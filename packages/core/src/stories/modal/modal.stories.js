import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'modal/fr-modal',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: { default: null || undefined, small: 'sm', large: 'lg' },
      },
    },
  },
};

const ModalTemplate = ({ title, size, top, footer }) => html` <fr-app>
  <fr-btn modal-opener-id="opendModal">Open modal</fr-btn>
  <fr-modal fr-id="opendModal" fr-title=${title} size=${ifDefined(size)} ?top=${top}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam
      maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
    </p>
    ${footer
      ? html`
          <fr-btns slot="footer" position="right">
            <fr-btn>label button 1</fr-btn>
            <fr-btn>label button 2</fr-btn>
          </fr-btns>
        `
      : null}
  </fr-modal>
</fr-app>`;

export const Default = ModalTemplate.bind({});
Default.args = {
  title: 'Titre de la modale',
};

export const Small = ModalTemplate.bind({});
Small.args = {
  title: 'Titre de la modale',
  size: 'sm',
};

export const Large = ModalTemplate.bind({});
Large.args = {
  title: 'Titre de la modale',
  size: 'lg',
};

export const Footer = ModalTemplate.bind({});
Footer.args = {
  title: 'Titre de la modale',
  footer: true,
};
