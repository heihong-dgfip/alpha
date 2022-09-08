import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'links/fr-link',
  argTypes: {
    size: {
      description: 'Size of link',
      control: {
        type: 'select',
        options: { default: null || undefined, small: 'sm', large: 'lg' },
      },
    },
  },
};

const LinkTemplate = ({ href, chip, size, alignOnContent, newWindow, raw, reset, slot, slotIconOnly, slotLeft, slotRight }) =>
  html`<fr-app>
    <fr-link href=${ifDefined(href)} ?chip=${chip} size=${ifDefined(size)} ?align-on-content=${alignOnContent} ?new-window=${newWindow} ?raw=${raw} ?reset=${reset}>
    ${slot ? unsafeHTML(slot) : null}
    ${slotIconOnly ? unsafeHTML(slotIconOnly) : null}
    ${slotLeft ? unsafeHTML(slotLeft) : null}
    ${slotRight ? unsafeHTML(slotRight) : null}
    </fr-link>
  </fr-app>`;

export const Default = LinkTemplate.bind({});
Default.args = {
  href: '#',
  slot: 'Label lien',
};

export const Disabled = LinkTemplate.bind({});
Disabled.args = {
  slot: 'Label lien',
};

export const NewWindow = LinkTemplate.bind({});
NewWindow.args = {
  href: '#',
  newWindow: true,
  slot: 'Label lien',
};

export const Raw = LinkTemplate.bind({});
Raw.args = {
  href: '#',
  newWindow: true,
  raw: true,
  slot: 'Label lien',
};

export const Reset = LinkTemplate.bind({});
Reset.args = {
  href: '#',
  newWindow: true,
  reset: true,
  slot: 'Label lien',
};

export const Chip = LinkTemplate.bind({});
Chip.args = {
  href: '#',
  chip: true,
  slot: 'Label lien',
};

export const ChipDisabled = LinkTemplate.bind({});
ChipDisabled.args = {
  chip: true,
  slot: 'Label lien',
};

export const ChipSmall = LinkTemplate.bind({});
ChipSmall.args = {
  href: '#',
  chip: true,
  size: 'sm',
  slot: 'Label lien',
};

export const ChipLarge = LinkTemplate.bind({});
ChipLarge.args = {
  href: '#',
  chip: true,
  size: 'lg',
  slot: 'Label lien',
};

export const ChipAlignOnContent = LinkTemplate.bind({});
ChipAlignOnContent.args = {
  href: '#',
  chip: true,
  alignOnContent: true,
  slot: 'Label lien',
};

export const ChipIconOnly = LinkTemplate.bind({});
ChipIconOnly.args = {
  href: '#',
  chip: true,
  slotIconOnly: `<fr-icon slot="icon-only" name="arrow-right-line" />`,
};

export const ChipLeftIcon = LinkTemplate.bind({});
ChipLeftIcon.args = {
  href: '#',
  chip: true,
  slot: 'Label lien',
  slotLeft: `<fr-icon slot="left" name="arrow-left-line" />`,
};

export const ChipRightIcon = LinkTemplate.bind({});
ChipRightIcon.args = {
  href: '#',
  chip: true,
  slot: 'Label lien',
  slotRight: `<fr-icon slot="right" name="arrow-right-line" />`,
};
