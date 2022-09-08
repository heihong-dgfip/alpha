import { html } from 'lit-html';
import { styles } from './grid';

export default {
  title: 'grid/fr-col',
  argTypes: {
    offset: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
      },
    }
  },
};

export const WidthWithoutGutters = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="2">
        <p>2/12</p>
      </fr-col>
      <fr-col width="4">
        <p>4/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="7">
        <p>7/12</p>
      </fr-col>
      <fr-col width="9">
        <p>9/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="2">
        <p>2/12</p>
      </fr-col>
      <fr-col width="12">
        <p>12/12</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const WidthWithGutters = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="2">
        <p>2/12</p>
      </fr-col>
      <fr-col width="4">
        <p>4/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="7">
        <p>7/12</p>
      </fr-col>
      <fr-col width="9">
        <p>9/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="5">
        <p>5/12</p>
      </fr-col>
      <fr-col width="2">
        <p>2/12</p>
      </fr-col>
      <fr-col width="12">
        <p>12/12</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const Align = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col width="3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
      </fr-col>
      <fr-col width="3" align="top">
        <p>align top</p>
      </fr-col>
      <fr-col width="3" align="middle">
        <p>align middle</p>
      </fr-col>
      <fr-col width="3" align="bottom">
        <p>align bottom</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

const OffsetTemplate = ({ offset }) => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="3" offset=${offset}>
        <p>3/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>`;

export const Offset = OffsetTemplate.bind({});
Offset.args = {
  offset: 3
};

export const Responsive = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col width="12" width-sm="10" width-md="8" width-lg="6" width-xl="4">
        <p>12 / sm-10 / md-8 / lg-6 / xl-4</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;
