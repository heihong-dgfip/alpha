import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { icons } from './alert-icons';

export default {
  title: 'alert/fr-alert',
  decorators: [(story) => html`<fr-app>${story()}</fr-app>`],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: { default: null || undefined, info: 'info', success: 'success', error: 'error' },
      },
    },
    closable: {
      control: {
        type: 'boolean'
      }
    },
    small: {
      control: {
        type: 'boolean'
      }
    },
    customIcon: {
      control: {
        type: 'select',
        options: [...icons],
      }
    },
  }
};

const AlertTemplate = ({ title, type, closable, closableCollapsible, alertId, small, slot, customTitle, customIcon }) =>
  html  `<fr-alert title=${ifDefined(title)} type=${ifDefined(type)} closable=${ifDefined(closable)} alert-id=${ifDefined(alertId)} small=${ifDefined(small)}>
            ${ifDefined(unsafeHTML(customIcon))} ${ifDefined(unsafeHTML(customTitle))} ${slot}
         </fr-alert>`;


export const Default = AlertTemplate.bind({});
Default.args = {
  title: "Titre de l'alerte",
  slot: "Descriptif de l'alerte",
  closable: false,
  small: false,
  customIcon: '',
  customTitle: ''
};

export const Info = AlertTemplate.bind({});
Info.args = {
  ...Default.args,
  slot: "Descriptif d'une alerte info",
  type: 'info'
};

export const Success = AlertTemplate.bind({});
Success.args = {
  ...Default.args,
  slot: "Descriptif d'une alerte de succès",
  type: 'success'
};

export const Error = AlertTemplate.bind({});
Error.args = {
  ...Default.args,
  slot: "Descriptif d'une alerte d'erreur",
  type: 'error'
};

export const WithCloseButton = AlertTemplate.bind({});
WithCloseButton.args = {
  ...Default.args,
  slot: "Descriptif d'une alerte refermable",
  closable: true
};

export const Small = AlertTemplate.bind({});
Small.args = {
  ...Default.args,
  slot: "Descriptif d'une petite alerte",
  small: true,
  type: 'info'
};

export const SmallClosable = AlertTemplate.bind({});
SmallClosable.args = {
  ...Default.args,
  slot: "Descriptif d'une petite alerte refermable",
  closable: true,
  small: true,
  type: 'info'
};

export const CustomTitle = AlertTemplate.bind({});
CustomTitle.args = {
  slot: "Descriptif de l'alerte avec titre customisé",
  customTitle: `<h2 slot="title">Titre h2</h2>`,
  customIcon: ''
};

export const CustomIcon = AlertTemplate.bind({});
CustomIcon.args = {
  title: "Icône customisée",
  slot: "Descriptif de l'alerte avec icône customisée",
  customIcon: `<fr-icon name="lock-fill" slot="icon"></fr-icon>`,
  customTitle: ''
};
